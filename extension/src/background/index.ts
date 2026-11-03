import { db, saveWorkflow } from '../lib/db';
import type { Workflow, Step, RecordingStatus, ExtensionMessage } from '../types';

let currentWorkflow: Workflow | null = null;
let recordingStatus: RecordingStatus = 'idle';
let activeRecordingTabId: number | null = null;

// Restore state from chrome.storage if service worker was suspended
async function ensureStateRestored() {
  if (recordingStatus === 'idle' && !currentWorkflow) {
    try {
      const stored = await chrome.storage.local.get(['recordingStatus', 'activeWorkflowId', 'activeRecordingTabId']);
      if (stored.recordingStatus && stored.recordingStatus !== 'idle' && stored.activeWorkflowId) {
        recordingStatus = stored.recordingStatus;
        activeRecordingTabId = stored.activeRecordingTabId || null;
        currentWorkflow = (await db.workflows.get(stored.activeWorkflowId)) || null;
      }
    } catch (e) {
      console.warn('Failed to restore SW state:', e);
    }
  }
}

// Persist state to storage
async function persistState() {
  try {
    if (recordingStatus === 'idle' || !currentWorkflow) {
      await chrome.storage.local.remove(['recordingStatus', 'activeWorkflowId', 'activeRecordingTabId']);
    } else {
      await chrome.storage.local.set({
        recordingStatus,
        activeWorkflowId: currentWorkflow.id,
        activeRecordingTabId
      });
    }
  } catch (e) {
    console.warn('Failed to persist SW state:', e);
  }
}

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
    await ensureStateRestored();

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

        const tabUrl = activeTab.url || '';
        if (
          tabUrl.startsWith('chrome://') ||
          tabUrl.startsWith('edge://') ||
          tabUrl.startsWith('chrome-extension://') ||
          tabUrl.startsWith('about:') ||
          tabUrl.startsWith('view-source:')
        ) {
          throw new Error(
            'Ekstensi tidak dapat merekam halaman internal browser (chrome:// atau edge://).\nSilakan buka tab website biasa (misal: localhost:3000, google.com, atau sistem kerja Anda).'
          );
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
            title: message.payload?.title || activeTab.title || 'New Workflow Guide',
            description: 'Step-by-step tutorial automatically captured from website workflow.',
            category: message.payload?.category || 'General',
            createdAt: Date.now(),
            updatedAt: Date.now(),
            targetUrl: tabUrl,
            steps: []
          };
        }

        // Save immediately to DB & persist state
        await saveWorkflow(currentWorkflow);
        await persistState();

        // Check if content script is active in tab; if not, inject dynamically!
        try {
          const res = await chrome.tabs.sendMessage(activeRecordingTabId, { type: 'PING' });
          if (!res?.pong) throw new Error('No pong');
        } catch {
          try {
            await chrome.scripting.executeScript({
              target: { tabId: activeRecordingTabId },
              files: ['content.js']
            });
            await chrome.scripting.insertCSS({
              target: { tabId: activeRecordingTabId },
              files: ['content.css']
            }).catch(() => {});
          } catch (injectErr) {
            console.warn('Could not inject content script:', injectErr);
          }
        }

        // Notify content script in the active tab to show dock
        await chrome.tabs.sendMessage(activeRecordingTabId, {
          type: 'RECORDING_STATUS_CHANGED',
          payload: {
            status: recordingStatus,
            stepCount: currentWorkflow.steps.length,
            workflowTitle: currentWorkflow.title
          }
        }).catch(() => {});

        await broadcastStatus();
        return { status: recordingStatus, workflowId: currentWorkflow.id };
      }

      case 'PAUSE_RECORDING': {
        recordingStatus = 'paused';
        await persistState();
        await broadcastStatus();
        return { status: recordingStatus };
      }

      case 'RESUME_RECORDING': {
        recordingStatus = 'recording';
        await persistState();
        await broadcastStatus();
        return { status: recordingStatus };
      }

      case 'CAPTURE_STEP': {
        if (recordingStatus !== 'recording' || !currentWorkflow) {
          return { error: 'Not in recording mode' };
        }

        try {
          // Capture visible tab
          const screenshotDataUrl = await chrome.tabs.captureVisibleTab({ format: 'png' });
          
          const meta = message.payload;
          const dpr = meta.targetElement?.viewport?.devicePixelRatio || 1;
          const rect = meta.targetElement?.rect;

          const newStep: Step = {
            id: generateId(),
            order: currentWorkflow.steps.length + 1,
            actionType: meta.actionType || 'click',
            title: meta.title || `Step ${currentWorkflow.steps.length + 1}`,
            description: meta.description || '',
            url: meta.url || sender.tab?.url || '',
            pageTitle: meta.pageTitle || sender.tab?.title || '',
            targetElement: meta.targetElement,
            screenshot: screenshotDataUrl,
            callout: { type: 'none', text: '' },
            highlight: rect ? {
              x: Math.round(rect.x * dpr),
              y: Math.round(rect.y * dpr),
              width: Math.round(rect.width * dpr),
              height: Math.round(rect.height * dpr),
              color: '#FF5C35',
              style: 'border'
            } : undefined
          };

          currentWorkflow.steps.push(newStep);
          currentWorkflow.updatedAt = Date.now();

          // Save progress in IndexedDB
          await saveWorkflow(currentWorkflow);
          await persistState();

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
        await persistState();

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
        await persistState();
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

