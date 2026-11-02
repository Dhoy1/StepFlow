import React from 'react';
import ReactDOM from 'react-dom/client';
import { FloatingDock } from './FloatingDock';
import { generateStepInstruction, getElementSelector } from '../lib/heuristics';
import type { RecordingStatus, TargetElementMeta } from '../types';

let dockHost: HTMLElement | null = null;
let shadowRoot: ShadowRoot | null = null;
let dockReactRoot: ReactDOM.Root | null = null;

let currentStatus: RecordingStatus = 'idle';
let currentStepCount = 0;

// Render or update floating dock in Shadow DOM to isolate styles
function updateDock() {
  if (currentStatus === 'idle') {
    if (dockReactRoot) {
      dockReactRoot.unmount();
      dockReactRoot = null;
    }
    if (dockHost && dockHost.parentNode) {
      dockHost.parentNode.removeChild(dockHost);
      dockHost = null;
      shadowRoot = null;
    }
    return;
  }

  if (!dockHost) {
    dockHost = document.createElement('stepflow-dock-root');
    dockHost.style.position = 'fixed';
    dockHost.style.zIndex = '2147483647';
    document.body.appendChild(dockHost);

    shadowRoot = dockHost.attachShadow({ mode: 'open' });

    // Inject dock pulse animation keyframes into shadow dom
    const style = document.createElement('style');
    style.textContent = `
      @keyframes stepflow-pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.5; transform: scale(1.2); }
      }
    `;
    shadowRoot.appendChild(style);

    const mountPoint = document.createElement('div');
    shadowRoot.appendChild(mountPoint);
    dockReactRoot = ReactDOM.createRoot(mountPoint);
  }

  dockReactRoot.render(
    <FloatingDock
      status={currentStatus}
      stepCount={currentStepCount}
      onPause={() => chrome.runtime.sendMessage({ type: 'PAUSE_RECORDING' })}
      onResume={() => chrome.runtime.sendMessage({ type: 'RESUME_RECORDING' })}
      onComplete={() => chrome.runtime.sendMessage({ type: 'STOP_RECORDING' })}
      onDiscard={() => {
        if (confirm('Apakah Anda yakin ingin membatalkan rekaman ini?')) {
          chrome.runtime.sendMessage({ type: 'DISCARD_RECORDING' });
        }
      }}
    />
  );
}

// Visual click ripple/border effect
function showClickFeedback(rect: DOMRect) {
  const ripple = document.createElement('div');
  ripple.style.position = 'fixed';
  ripple.style.left = `${rect.left}px`;
  ripple.style.top = `${rect.top}px`;
  ripple.style.width = `${rect.width}px`;
  ripple.style.height = `${rect.height}px`;
  ripple.style.border = '2px solid #FF5C35';
  ripple.style.borderRadius = '4px';
  ripple.style.boxShadow = '0 0 15px rgba(255, 92, 53, 0.6)';
  ripple.style.pointerEvents = 'none';
  ripple.style.zIndex = '2147483646';
  ripple.style.transition = 'all 0.4s ease-out';
  ripple.style.transform = 'scale(1)';
  ripple.style.opacity = '1';

  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.style.transform = 'scale(1.05)';
    ripple.style.opacity = '0';
    setTimeout(() => ripple.remove(), 400);
  }, 250);
}

// Extract element metadata
function extractElementMeta(el: HTMLElement): TargetElementMeta {
  const rect = el.getBoundingClientRect();
  return {
    tagName: el.tagName.toLowerCase(),
    id: el.id || undefined,
    className: typeof el.className === 'string' ? el.className : undefined,
    innerText: el.innerText ? el.innerText.trim().slice(0, 100) : undefined,
    placeholder: (el as HTMLInputElement).placeholder || undefined,
    ariaLabel: el.getAttribute('aria-label') || undefined,
    selector: getElementSelector(el),
    rect: {
      x: Math.round(rect.left),
      y: Math.round(rect.top),
      width: Math.round(rect.width),
      height: Math.round(rect.height)
    },
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      scrollX: window.scrollX,
      scrollY: window.scrollY,
      devicePixelRatio: window.devicePixelRatio || 1
    }
  };
}

// Listen for interactions on the page
function setupEventListeners() {
  // Capture Click
  window.addEventListener(
    'click',
    (event) => {
      if (currentStatus !== 'recording') return;

      const target = event.target as HTMLElement | null;
      if (!target) return;

      // Ignore interactions inside StepFlow's own dock
      if (dockHost && (dockHost.contains(target) || event.composedPath().includes(dockHost))) {
        return;
      }

      const rect = target.getBoundingClientRect();
      showClickFeedback(rect);

      const targetMeta = extractElementMeta(target);
      const instruction = generateStepInstruction('click', target, targetMeta);

      // Sembunyikan dock sebelum screenshot diambil agar tidak masuk ke gambar tutorial
      if (dockHost) {
        dockHost.style.visibility = 'hidden';
      }

      // Beri jeda 80ms agar browser melakukan repaint tanpa dock
      setTimeout(() => {
        chrome.runtime.sendMessage(
          {
            type: 'CAPTURE_STEP',
            payload: {
              actionType: 'click',
              title: instruction.title,
              description: instruction.description,
              targetElement: targetMeta,
              url: window.location.href,
              pageTitle: document.title
            }
          },
          () => {
            // Tampilkan kembali dock setelah screenshot selesai diambil
            if (dockHost) {
              dockHost.style.visibility = 'visible';
            }
          }
        );
      }, 90);
    },
    true // Capture phase
  );

  // Capture Change (Forms, dropdowns)
  window.addEventListener(
    'change',
    (event) => {
      if (currentStatus !== 'recording') return;

      const target = event.target as HTMLElement | null;
      if (!target) return;
      if (dockHost && (dockHost.contains(target) || event.composedPath().includes(dockHost))) {
        return;
      }

      const targetMeta = extractElementMeta(target);
      const instruction = generateStepInstruction('change', target, targetMeta);

      if (dockHost) {
        dockHost.style.visibility = 'hidden';
      }

      setTimeout(() => {
        chrome.runtime.sendMessage(
          {
            type: 'CAPTURE_STEP',
            payload: {
              actionType: 'change',
              title: instruction.title,
              description: instruction.description,
              targetElement: targetMeta,
              url: window.location.href,
              pageTitle: document.title
            }
          },
          () => {
            if (dockHost) {
              dockHost.style.visibility = 'visible';
            }
          }
        );
      }, 90);
    },
    true
  );
}

// Listen to messages from background service worker
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'RECORDING_STATUS_CHANGED') {
    currentStatus = message.payload.status;
    currentStepCount = message.payload.stepCount || 0;
    updateDock();
  }
});

// Initialize on page load
setupEventListeners();

// Query initial status on script injection
chrome.runtime.sendMessage({ type: 'GET_STATUS' }, (res) => {
  if (res && res.status) {
    currentStatus = res.status;
    currentStepCount = res.stepCount || 0;
    updateDock();
  }
});

