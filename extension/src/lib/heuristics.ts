import type { TargetElementMeta } from '../types';

export function getElementReadableLabel(el: HTMLElement): string {
  // 1. Check aria-label or title
  const ariaLabel = el.getAttribute('aria-label') || el.getAttribute('title');
  if (ariaLabel && ariaLabel.trim()) {
    return ariaLabel.trim();
  }

  // 2. Check innerText or textContent (for buttons, links, spans)
  if (el instanceof HTMLButtonElement || el instanceof HTMLAnchorElement || el.getAttribute('role') === 'button') {
    const text = el.innerText || el.textContent || '';
    if (text.trim()) {
      return text.trim().slice(0, 45);
    }
  }

  // 3. Check placeholder or associated label for inputs
  if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
    if (el.placeholder && el.placeholder.trim()) {
      return el.placeholder.trim();
    }
    // Check associated <label for="...">
    if (el.id) {
      const label = document.querySelector(`label[for="${el.id}"]`);
      if (label && label.textContent?.trim()) {
        return label.textContent.trim();
      }
    }
    // Check parent label
    const parentLabel = el.closest('label');
    if (parentLabel && parentLabel.textContent?.trim()) {
      return parentLabel.textContent.trim().slice(0, 45);
    }
    // Check name or id attribute
    if (el.name) return el.name;
    if (el.id) return el.id;
  }

  // 4. Check image alt
  if (el instanceof HTMLImageElement && el.alt) {
    return el.alt;
  }

  // 5. Fallback to tag name or text
  const text = el.innerText || el.textContent || '';
  if (text.trim() && text.trim().length <= 30) {
    return text.trim();
  }

  return el.tagName.toLowerCase();
}

export function generateStepInstruction(
  eventType: 'click' | 'input' | 'change' | 'navigation',
  el: HTMLElement | null,
  meta?: Partial<TargetElementMeta>
): { title: string; description: string } {
  if (eventType === 'navigation') {
    const pageTitle = document.title || window.location.href;
    return {
      title: `Navigate to ${pageTitle}`,
      description: `Open and navigate to the ${pageTitle} page.`
    };
  }

  if (!el) {
    return {
      title: 'Interact with Page',
      description: 'Perform the required interaction on the screen.'
    };
  }

  const tag = el.tagName.toLowerCase();
  const label = getElementReadableLabel(el);

  if (eventType === 'click') {
    if (tag === 'button' || el.getAttribute('role') === 'button') {
      return {
        title: `Click on "${label}" button`,
        description: `Click on the "${label}" button to proceed.`
      };
    }
    if (tag === 'a') {
      return {
        title: `Click on "${label}" link`,
        description: `Click on the "${label}" link to open the page.`
      };
    }
    if (tag === 'input' && (el as HTMLInputElement).type === 'checkbox') {
      return {
        title: `Check "${label}" checkbox`,
        description: `Click to toggle or check the "${label}" checkbox.`
      };
    }
    if (tag === 'input' && (el as HTMLInputElement).type === 'radio') {
      return {
        title: `Select "${label}" radio option`,
        description: `Select the "${label}" option from the list.`
      };
    }
    return {
      title: `Click on "${label}"`,
      description: `Click on the "${label}" element to continue.`
    };
  }

  if (eventType === 'input' || eventType === 'change') {
    if (tag === 'select') {
      return {
        title: `Select dropdown option for "${label}"`,
        description: `Choose the desired option from the "${label}" dropdown menu.`
      };
    }
    const inputEl = el as HTMLInputElement;
    if (inputEl.type === 'password') {
      return {
        title: `Enter Password into "${label}" field`,
        description: `Type your password into the "${label}" field.`
      };
    }
    return {
      title: `Type into "${label}" field`,
      description: `Enter the required text or information into the "${label}" field.`
    };
  }

  return {
    title: `Interact with "${label}"`,
    description: `Interact with the "${label}" element.`
  };
}

export function getElementSelector(el: HTMLElement): string {
  if (el.id) return `#${el.id}`;
  if (el.className && typeof el.className === 'string') {
    const classes = el.className.trim().split(/\s+/).slice(0, 2).join('.');
    if (classes) return `${el.tagName.toLowerCase()}.${classes}`;
  }
  return el.tagName.toLowerCase();
}
