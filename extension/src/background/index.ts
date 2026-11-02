import { db, saveWorkflow } from '../lib/db';
import type { Workflow, Step, RecordingStatus, ExtensionMessage } from '../types';

let currentWorkflow: Workflow | null = null;
let recordingStatus: RecordingStatus = 'idle';
let activeRecordingTabId: number | null = null;

// Helper to broadcast state to all tabs or active tab
async function broadcastStatus() {
  const tabs = await chrome.tabs.query({});
  for (const tab of tabs) {
    if (tab.id) {
      chrome.tabs.sendMessage(tab.id, {
        type: 'RECORDING_STATUS_CHANGED',
        payload: {
          status: recordingStatus,
          stepCount: currentWorkflow ? currentWorkflow.steps.length : 0,
          workflowTitle: currentWorkflow?.title || ''
        }
      }).catch(() => {
        // Tab might not have content script loaded, ignore error
      });
    }
  }
}

// Generate simple UUID
function generateId(): string {
  return 'wf_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 9);
}

// Listen to messages from Popup or Content Script
chrome.runtime.onMessage.addListener((message: ExtensionMessage, sender, sendResponse) => {
  const handleMessage = async () => {
    switch (message.type) {
      case 'GET_STATUS': {
        return {
          status: recordingStatus,
          stepCount: currentWorkflow ? currentWorkflow.steps.length : 0,
          workflow: currentWorkflow
        };
      }

      case 'START_RECORDING': {
        const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
        if (!activeTab || !activeTab.id) {
          throw new Error('Tidak ada tab aktif yang dapat direkam.');
        }

        activeRecordingTabId = activeTab.id;
        recordingStatus = 'recording';

        // Check if user requested to APPEND to an existing tutorial
        if (message.payload?.appendToId) {
          const existing = await db.workflows.get(message.payload.appendToId);
          if (existing) {
            currentWorkflow = existing;
          }
        }

        if (!currentWorkflow) {
          currentWorkflow = {
            id: generateId(),
            title: message.payload?.title || activeTab.title || 'Panduan Workflow Baru',
            description: 'Tutorial langkah demi langkah yang direkam secara otomatis.',
            category: message.payload?.category || 'Umum',
            createdAt: Date.now(),
            updatedAt: Date.now(),
            targetUrl: activeTab.url || '',
            steps: []
          };
        }

        // Notify content script in the active tab to start listening & show dock
        await chrome.tabs.sendMessage(activeRecordingTabId, {
          type: 'RECORDING_STATUS_CHANGED',
          payload: {
            status: recordingStatus,
            stepCount: currentWorkflow.steps.length,
            workflowTitle: currentWorkflow.title
          }
        }).catch(() => {
          // Tab might need reload or script injection
        });

        await broadcastStatus();
        return { status: recordingStatus, workflowId: currentWorkflow.id };
      }

      case 'PAUSE_RECORDING': {
        recordingStatus = 'paused';
        await broadcastStatus();
        return { status: recordingStatus };
      }

      case 'RESUME_RECORDING': {
        recordingStatus = 'recording';
        await broadcastStatus();
        return { status: recordingStatus };
      }

      case 'CAPTURE_STEP': {
        if (recordingStatus !== 'recording' || !currentWorkflow) {
          return { error: 'Not in recording mode' };
        }

        try {
          // 1. Capture visible tab
          const screenshotDataUrl = await chrome.tabs.captureVisibleTab({ format: 'png' });
          
          const meta = message.payload;
          const newStep: Step = {
            id: generateId(),
            order: currentWorkflow.steps.length + 1,
            actionType: meta.actionType || 'click',
            title: meta.title || `Langkah ${currentWorkflow.steps.length + 1}`,
            description: meta.description || '',
            url: meta.url || sender.tab?.url || '',
            pageTitle: meta.pageTitle || sender.tab?.title || '',
            targetElement: meta.targetElement,
            screenshot: screenshotDataUrl,
            callout: { type: 'none', text: '' },
            highlight: meta.targetElement ? {
              x: meta.targetElement.rect.x,
              y: meta.targetElement.rect.y,
              width: meta.targetElement.rect.width,
              height: meta.targetElement.rect.height,
              color: '#FF5C35',
              style: 'border'
            } : undefined
          };

          currentWorkflow.steps.push(newStep);
          currentWorkflow.updatedAt = Date.now();

          // Save progress in IndexedDB
          await saveWorkflow(currentWorkflow);

          // Notify dock of step count change
          await broadcastStatus();

          return { success: true, stepCount: currentWorkflow.steps.length };
        } catch (err: any) {
          console.error('Failed to capture screenshot:', err);
          return { error: err.message };
        }
      }

      case 'STOP_RECORDING': {
        if (!currentWorkflow) return { error: 'No active recording' };

        const finishedWorkflow = { ...currentWorkflow };
        recordingStatus = 'idle';
        currentWorkflow = null;

        await broadcastStatus();

        // Save final workflow
        await saveWorkflow(finishedWorkflow);

        // Open editor tab
        const editorUrl = chrome.runtime.getURL(`editor.html?id=${finishedWorkflow.id}`);
        await chrome.tabs.create({ url: editorUrl });

        return { success: true, workflowId: finishedWorkflow.id };
      }

      case 'DISCARD_RECORDING': {
        if (currentWorkflow) {
          await db.workflows.delete(currentWorkflow.id);
        }
        currentWorkflow = null;
        recordingStatus = 'idle';
        await broadcastStatus();
        return { success: true };
      }

      case 'OPEN_EDITOR': {
        const id = message.payload?.id;
        const url = id
          ? chrome.runtime.getURL(`editor.html?id=${id}`)
          : chrome.runtime.getURL('editor.html');
        await chrome.tabs.create({ url });
        return { success: true };
      }

      default:
        return { error: 'Unknown message type' };
    }
  };

  handleMessage().then(sendResponse).catch((err) => {
    sendResponse({ error: err.message });
  });

  return true; // Keep message channel open for async response
});

// Update badge on extension icon based on status
chrome.storage.onChanged.addListener(() => {
  // Sync if needed
});

