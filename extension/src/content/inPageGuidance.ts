import type { Step } from '../types';

let spotlightOverlay: HTMLElement | null = null;
let floatingBadge: HTMLElement | null = null;
let activeTargetElement: HTMLElement | null = null;
let activeClickHandler: ((e: MouseEvent) => void) | null = null;
let repositionListenersActive = false;
let currentHighlightedStep: Step | null = null;

/**
 * Smart Element Locator: Locates target DOM element using progressive fallbacks.
 * Even if step title is edited by the team, technical selectors and coordinates guarantee match.
 */
export function findElementForStep(step: Step): HTMLElement | null {
  const meta = step.targetElement;

  // 1. Primary: CSS Selector if present
  if (meta?.selector) {
    try {
      const el = document.querySelector(meta.selector) as HTMLElement;
      if (el && isElementVisible(el)) return el;
    } catch {}
  }

  // 2. Secondary: Element ID
  if (meta?.id) {
    try {
      const el = document.getElementById(meta.id);
      if (el && isElementVisible(el)) return el;
    } catch {}
  }

  // 3. Tertiary: TagName + ClassName match
  if (meta?.tagName && meta?.className) {
    try {
      const firstClass = meta.className.split(' ').filter(Boolean)[0];
      if (firstClass) {
        const candidates = document.querySelectorAll(`${meta.tagName}.${firstClass}`);
        for (let i = 0; i < candidates.length; i++) {
          const el = candidates[i] as HTMLElement;
          if (isElementVisible(el)) return el;
        }
      }
    } catch {}
  }

  // 4. Quaternary: Aria Label or Placeholder
  if (meta?.ariaLabel) {
    try {
      const el = document.querySelector(`[aria-label="${CSS.escape(meta.ariaLabel)}"]`) as HTMLElement;
      if (el && isElementVisible(el)) return el;
    } catch {}
  }
  if (meta?.placeholder) {
    try {
      const el = document.querySelector(`[placeholder="${CSS.escape(meta.placeholder)}"]`) as HTMLElement;
      if (el && isElementVisible(el)) return el;
    } catch {}
  }

  // 5. Quinary: Exact or Fuzzy innerText match
  if (meta?.innerText && meta.innerText.length > 2) {
    try {
      const allButtonsAndLinks = document.querySelectorAll('button, a, input, [role="button"], span, div');
      const targetText = meta.innerText.trim().toLowerCase();
      for (let i = 0; i < allButtonsAndLinks.length; i++) {
        const el = allButtonsAndLinks[i] as HTMLElement;
        const txt = (el.innerText || '').trim().toLowerCase();
        if (txt === targetText && isElementVisible(el)) {
          return el;
        }
      }
    } catch {}
  }

  // 6. Final Fallback: Element at coordinates (x, y)
  if (meta?.rect) {
    try {
      const el = document.elementFromPoint(
        meta.rect.x + meta.rect.width / 2,
        meta.rect.y + meta.rect.height / 2
      ) as HTMLElement;
      if (el && isElementVisible(el)) return el;
    } catch {}
  }

  return null;
}

function isElementVisible(el: HTMLElement): boolean {
  if (!el || el.offsetParent === null) return false;
  const rect = el.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}

/**
 * Highlight element with orange glowing spotlight & floating tooltip badge
 */
export function highlightTargetElement(
  step: Step,
  onElementClicked: () => void
) {
  clearInPageGuidance();
  currentHighlightedStep = step;

  const targetEl = findElementForStep(step);
  activeTargetElement = targetEl;

  // Ensure spotlight container exists
  createOverlayElements();

  if (targetEl) {
    // Scroll element smoothly into center view
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });

    // Update position
    updateOverlayPositions(targetEl, step);

    // Listen for click on element to advance automatically
    activeClickHandler = (e: MouseEvent) => {
      // Visual feedback: flash green on success
      if (spotlightOverlay) {
        spotlightOverlay.style.borderColor = '#10B981';
        spotlightOverlay.style.boxShadow = '0 0 0 4px rgba(16, 185, 129, 0.4), 0 0 25px rgba(16, 185, 129, 0.7)';
      }
      setTimeout(() => {
        onElementClicked();
      }, 350);
    };

    targetEl.addEventListener('click', activeClickHandler, { once: true, capture: true });
  } else {
    // Fallback: If element is not found on current page, show centered floating badge banner
    showFallbackBanner(step);
  }

  // Bind resize & scroll listeners once to keep overlay anchored
  if (!repositionListenersActive) {
    repositionListenersActive = true;
    window.addEventListener('resize', handleWindowReposition, { passive: true });
    window.addEventListener('scroll', handleWindowReposition, { passive: true });
  }
}

function handleWindowReposition() {
  if (activeTargetElement && currentHighlightedStep && spotlightOverlay) {
    updateOverlayPositions(activeTargetElement, currentHighlightedStep);
  }
}

function createOverlayElements() {
  if (!spotlightOverlay) {
    spotlightOverlay = document.createElement('div');
    spotlightOverlay.id = 'stepflow-spotlight-box';
    spotlightOverlay.style.position = 'fixed';
    spotlightOverlay.style.zIndex = '2147483645';
    spotlightOverlay.style.pointerEvents = 'none';
    spotlightOverlay.style.border = '3px solid #FF5C35';
    spotlightOverlay.style.borderRadius = '8px';
    spotlightOverlay.style.boxShadow = '0 0 0 4px rgba(255, 92, 53, 0.25), 0 0 20px rgba(255, 92, 53, 0.6)';
    spotlightOverlay.style.transition = 'all 0.18s cubic-bezier(0.4, 0, 0.2, 1)';
    spotlightOverlay.style.display = 'none';
    document.documentElement.appendChild(spotlightOverlay);
  }

  if (!floatingBadge) {
    floatingBadge = document.createElement('div');
    floatingBadge.id = 'stepflow-floating-badge';
    floatingBadge.style.position = 'fixed';
    floatingBadge.style.zIndex = '2147483646';
    floatingBadge.style.pointerEvents = 'none';
    floatingBadge.style.display = 'none';
    floatingBadge.style.fontFamily = 'Inter, system-ui, -apple-system, sans-serif';
    document.documentElement.appendChild(floatingBadge);
  }
}

function updateOverlayPositions(el: HTMLElement, step: Step) {
  if (!spotlightOverlay || !floatingBadge) return;

  const rect = el.getBoundingClientRect();
  const padding = 4;

  // 1. Update Spotlight Box
  spotlightOverlay.style.display = 'block';
  spotlightOverlay.style.left = `${Math.max(0, rect.left - padding)}px`;
  spotlightOverlay.style.top = `${Math.max(0, rect.top - padding)}px`;
  spotlightOverlay.style.width = `${rect.width + padding * 2}px`;
  spotlightOverlay.style.height = `${rect.height + padding * 2}px`;
  spotlightOverlay.style.borderColor = '#FF5C35';
  spotlightOverlay.style.boxShadow = '0 0 0 4px rgba(255, 92, 53, 0.25), 0 0 20px rgba(255, 92, 53, 0.6)';

  // 2. Update Floating Tooltip Badge with Dynamic Step Title
  const displayTitle = step.title || 'Lakukan tindakan ini';
  floatingBadge.style.display = 'block';
  floatingBadge.innerHTML = `
    <div style="
      display: flex;
      align-items: center;
      gap: 8px;
      background-color: #1E1E24;
      color: #FFFFFF;
      padding: 8px 14px;
      border-radius: 12px;
      box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.15);
      font-size: 13px;
      font-weight: 700;
      white-space: nowrap;
      animation: stepflow-fade-in 0.2s ease;
    ">
      <span style="
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: #FF5C35;
        color: #FFFFFF;
        font-size: 11px;
        font-weight: 800;
        flex-shrink: 0;
      ">👤</span>
      <span>${escapeHtml(displayTitle)}</span>
    </div>
  `;

  // Position Badge: Prefer top of element, flip to bottom if offscreen
  const badgeHeight = 44;
  let badgeTop = rect.top - badgeHeight - 10;
  if (badgeTop < 10) {
    badgeTop = rect.bottom + 10; // Flip to bottom
  }

  // Keep badge horizontally within available target area (exclude 380px sidebar on the right)
  const maxAvailableWidth = window.innerWidth - 400;
  let badgeLeft = rect.left;
  if (badgeLeft > maxAvailableWidth - 250) {
    badgeLeft = Math.max(10, maxAvailableWidth - 260);
  }

  floatingBadge.style.top = `${badgeTop}px`;
  floatingBadge.style.left = `${Math.max(10, badgeLeft)}px`;
}

function showFallbackBanner(step: Step) {
  if (!floatingBadge) return;
  floatingBadge.style.display = 'block';
  floatingBadge.style.top = '24px';
  floatingBadge.style.left = '24px';
  floatingBadge.innerHTML = `
    <div style="
      display: flex;
      align-items: center;
      gap: 10px;
      background-color: #1E1E24;
      color: #FFFFFF;
      padding: 10px 18px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.4);
      border: 1px solid rgba(255, 92, 53, 0.5);
      font-size: 13px;
      font-weight: 700;
    ">
      <span style="width: 22px; height: 22px; border-radius: 50%; background-color: #FF5C35; display: inline-flex; align-items: center; justify-content: center; font-size: 11px;">👤</span>
      <span>${escapeHtml(step.title)}</span>
    </div>
  `;
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.innerText = text;
  return div.innerHTML;
}

/**
 * Remove all in-page overlays, spotlights, badges, and listeners cleanly
 */
export function clearInPageGuidance() {
  if (activeTargetElement && activeClickHandler) {
    try {
      activeTargetElement.removeEventListener('click', activeClickHandler, true);
    } catch {}
    activeClickHandler = null;
    activeTargetElement = null;
  }

  if (spotlightOverlay) {
    spotlightOverlay.style.display = 'none';
  }

  if (floatingBadge) {
    floatingBadge.style.display = 'none';
  }

  currentHighlightedStep = null;
}

/**
 * Destroy overlay elements completely on exit
 */
export function destroyInPageGuidance() {
  clearInPageGuidance();

  if (spotlightOverlay && spotlightOverlay.parentNode) {
    spotlightOverlay.parentNode.removeChild(spotlightOverlay);
    spotlightOverlay = null;
  }

  if (floatingBadge && floatingBadge.parentNode) {
    floatingBadge.parentNode.removeChild(floatingBadge);
    floatingBadge = null;
  }

  if (repositionListenersActive) {
    window.removeEventListener('resize', handleWindowReposition);
    window.removeEventListener('scroll', handleWindowReposition);
    repositionListenersActive = false;
  }
}
