import type { Step } from '../types';

let spotlightOverlay: HTMLElement | null = null;
let floatingBadge: HTMLElement | null = null;
let activeTargetElement: HTMLElement | null = null;
let activeClickHandler: ((e: MouseEvent) => void) | null = null;
let repositionListenersActive = false;
let currentHighlightedStep: Step | null = null;

/**
 * Extract clean target keywords and label from step data.
 * Resilient against user edits (e.g. "Push on XYZ", "Click on 'Reminder' link").
 */
function extractTargetLabels(step: Step): string[] {
  const labels: string[] = [];
  const meta = step.targetElement;

  // 1. Exact innerText from capture metadata if available
  if (meta?.innerText && meta.innerText.trim().length > 0) {
    labels.push(meta.innerText.trim().toLowerCase());
  }

  // 2. Aria label or placeholder
  if (meta?.ariaLabel && meta.ariaLabel.trim().length > 0) {
    labels.push(meta.ariaLabel.trim().toLowerCase());
  }
  if (meta?.placeholder && meta.placeholder.trim().length > 0) {
    labels.push(meta.placeholder.trim().toLowerCase());
  }

  // 3. Extract quoted string from title: e.g. Click on "Reminder" link -> "reminder"
  const title = step.title || '';
  const quoteMatch = title.match(/["']([^"']+)["']/);
  if (quoteMatch && quoteMatch[1]?.trim()) {
    const q = quoteMatch[1].trim().toLowerCase();
    if (!labels.includes(q)) labels.push(q);
  }

  // 4. Strip common action verbs from title to get core noun
  const cleanTitle = title
    .replace(/^(click on|klik pada|klik|click|press|push on|push|tap on|tap|select|pilih|buka|open|type into|masukkan|enter)\s+/i, '')
    .replace(/\s+(button|link|tombol|field|input|option|checkbox|menu|tab)$/i, '')
    .trim()
    .toLowerCase();

  if (cleanTitle && cleanTitle.length > 1 && !labels.includes(cleanTitle)) {
    labels.push(cleanTitle);
  }

  return labels;
}

/**
 * Get target coordinate box from metadata or highlight_json fallback
 */
function getTargetBox(step: Step): { x: number; y: number; width: number; height: number } | null {
  if (step.targetElement?.rect && step.targetElement.rect.width > 0) {
    return step.targetElement.rect;
  }
  if (step.highlight && step.highlight.width > 0) {
    return {
      x: step.highlight.x,
      y: step.highlight.y,
      width: step.highlight.width,
      height: step.highlight.height
    };
  }
  return null;
}

function isElementVisible(el: HTMLElement): boolean {
  if (!el) return false;
  try {
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
      return false;
    }
  } catch {}
  const rect = el.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}

/**
 * Smart Multi-Criteria Element Locator.
 * Solves wrong element detection by evaluating text relevance, tag match, and coordinate proximity.
 */
export function findElementForStep(step: Step): HTMLElement | null {
  const meta = step.targetElement;
  const targetLabels = extractTargetLabels(step);
  const targetBox = getTargetBox(step);

  // 1. Direct ID match if present and unique
  if (meta?.id) {
    try {
      const el = document.getElementById(meta.id);
      if (el && isElementVisible(el)) return el;
    } catch {}
  }

  // Gather candidate elements
  const candidatesSet = new Set<HTMLElement>();

  // A. From meta.selector if available
  if (meta?.selector) {
    try {
      document.querySelectorAll(meta.selector).forEach((el) => {
        if (el instanceof HTMLElement && isElementVisible(el)) {
          candidatesSet.add(el);
        }
      });
    } catch {}
  }

  // B. From interactive & structural elements on the page
  const selectorPool = 'a, button, input, select, textarea, [role="button"], [role="link"], [role="menuitem"], [role="tab"], li, span, p, h1, h2, h3, h4, h5, h6, div';
  try {
    document.querySelectorAll(selectorPool).forEach((el) => {
      if (el instanceof HTMLElement && isElementVisible(el)) {
        // Exclude our own extension UI
        if (el.closest('stepflow-dock-root') || el.closest('stepflow-guideme-root') || el.id.startsWith('stepflow-')) {
          return;
        }
        // Exclude enormous container elements
        const r = el.getBoundingClientRect();
        if (r.width > window.innerWidth * 0.95 && r.height > window.innerHeight * 0.95) {
          return;
        }
        candidatesSet.add(el);
      }
    });
  } catch {}

  // C. From point coordinate if available
  if (targetBox) {
    try {
      const ptEl = document.elementFromPoint(
        targetBox.x + targetBox.width / 2,
        targetBox.y + targetBox.height / 2
      ) as HTMLElement | null;
      if (ptEl && isElementVisible(ptEl)) {
        const interactive = ptEl.closest('a, button, input, select, [role="button"], li') as HTMLElement | null;
        if (interactive) candidatesSet.add(interactive);
        else candidatesSet.add(ptEl);
      }
    } catch {}
  }

  const primaryLabel = targetLabels[0] || '';

  // Score each candidate
  let bestCandidate: HTMLElement | null = null;
  let bestScore = -Infinity;

  candidatesSet.forEach((el) => {
    let score = 0;
    const elText = (el.innerText || el.textContent || '').trim().toLowerCase();
    const elAria = (el.getAttribute('aria-label') || el.getAttribute('title') || '').trim().toLowerCase();
    const elPlaceholder = (el as HTMLInputElement).placeholder?.trim().toLowerCase() || '';

    // --- 1. Text & Label Matching (High Weight) ---
    if (primaryLabel) {
      if (elText === primaryLabel || elAria === primaryLabel || elPlaceholder === primaryLabel) {
        score += 2000; // Perfect exact match
      } else if (elText.length > 0 && elText.includes(primaryLabel)) {
        if (elText.length <= primaryLabel.length + 15) {
          score += 1500;
        } else {
          score += 600;
        }
      } else if (primaryLabel.includes(elText) && elText.length >= 3) {
        score += 800;
      } else if (elAria.includes(primaryLabel) || elPlaceholder.includes(primaryLabel)) {
        score += 1200;
      } else if (elText.length > 0) {
        // Candidate text contradicts target label (e.g. "Dashboard" vs "Reminder")
        score -= 1000;
      }
    }

    // Secondary labels
    for (let i = 1; i < targetLabels.length; i++) {
      const secLabel = targetLabels[i];
      if (elText === secLabel || elAria === secLabel) score += 600;
      else if (elText.includes(secLabel)) score += 350;
    }

    // --- 2. Interactive Element Preference ---
    const tag = el.tagName.toLowerCase();
    if (['a', 'button', 'input', 'select', 'textarea'].includes(tag) || el.getAttribute('role') === 'button' || el.getAttribute('role') === 'link') {
      score += 200;
    }

    // --- 3. Tag Match with recorded metadata ---
    if (meta?.tagName && tag === meta.tagName.toLowerCase()) {
      score += 150;
    }

    // --- 4. Coordinate & Proximity Matching ---
    if (targetBox) {
      const rect = el.getBoundingClientRect();
      const targetCenterX = targetBox.x + targetBox.width / 2;
      const targetCenterY = targetBox.y + targetBox.height / 2;
      const elCenterX = rect.left + rect.width / 2;
      const elCenterY = rect.top + rect.height / 2;

      const dist = Math.hypot(targetCenterX - elCenterX, targetCenterY - elCenterY);
      if (dist < 50) score += 600;
      else if (dist < 150) score += 350;
      else if (dist < 300) score += 150;
      else if (dist < 600) score += 50;
      else score -= 100; // Too far

      // Size similarity
      const widthDiff = Math.abs(rect.width - targetBox.width);
      const heightDiff = Math.abs(rect.height - targetBox.height);
      if (widthDiff < 50 && heightDiff < 25) {
        score += 150;
      }
    }

    // Prefer clickable container rather than raw inner text node if both present
    if (el.parentElement && candidatesSet.has(el.parentElement)) {
      const pTag = el.parentElement.tagName.toLowerCase();
      if (['a', 'button'].includes(pTag)) {
        score -= 80;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestCandidate = el;
    }
  });

  // Threshold check: Must have solid positive confidence score
  if (bestCandidate && bestScore > 100) {
    return bestCandidate;
  }

  // Fallback: If no candidate scored above threshold, try elementFromPoint
  if (targetBox) {
    try {
      const ptEl = document.elementFromPoint(
        targetBox.x + targetBox.width / 2,
        targetBox.y + targetBox.height / 2
      ) as HTMLElement | null;
      if (ptEl && isElementVisible(ptEl)) {
        const interactive = ptEl.closest('a, button, input, select, [role="button"]') as HTMLElement | null;
        return interactive || ptEl;
      }
    } catch {}
  }

  return null;
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

    // Initial position
    updateOverlayPositions(targetEl, step);

    // Keep positioned as smooth scroll finishes
    setTimeout(() => {
      if (activeTargetElement && currentHighlightedStep) {
        updateOverlayPositions(activeTargetElement, currentHighlightedStep);
      }
    }, 150);
    setTimeout(() => {
      if (activeTargetElement && currentHighlightedStep) {
        updateOverlayPositions(activeTargetElement, currentHighlightedStep);
      }
    }, 350);

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
