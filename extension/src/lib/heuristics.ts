import type { TargetElementMeta } from '../types';

/**
 * Checks if an element is a writable text input or rich-text area
 */
export function isWritableTextInput(el: HTMLElement | null): boolean {
  if (!el) return false;
  if (el.isContentEditable || el.getAttribute('contenteditable') === 'true' || el.getAttribute('role') === 'textbox') {
    return true;
  }
  if (el instanceof HTMLTextAreaElement) return true;
  if (el instanceof HTMLInputElement) {
    const nonTextTypes = ['button', 'checkbox', 'radio', 'submit', 'reset', 'file', 'image', 'range', 'color', 'hidden'];
    return !nonTextTypes.includes((el.type || 'text').toLowerCase());
  }
  return false;
}

/**
 * Checks if an element is a dropdown trigger / toggle
 */
export function isDropdownTriggerElement(el: HTMLElement | null): HTMLElement | null {
  if (!el) return null;
  const trigger = el.closest(
    'button[aria-haspopup], [role="combobox"], [data-toggle="dropdown"], [data-bs-toggle="dropdown"], .dropdown-toggle, [aria-haspopup="listbox"], [aria-haspopup="menu"]'
  ) as HTMLElement | null;
  return trigger;
}

/**
 * Checks if an element is a dropdown option or inside a dropdown list
 */
export function isDropdownOptionElement(el: HTMLElement | null): HTMLElement | null {
  if (!el) return null;

  // Never treat sidebar or main navigation links as dropdown options!
  if (el.closest('aside, [class*="sidebar"], [id*="sidebar"], nav:not([class*="dropdown"])')) {
    return null;
  }

  // Direct option match
  const option = el.closest(
    '[role="option"], [role="menuitem"], [role="menuitemradio"], [role="menuitemcheckbox"], ' +
    '.dropdown-item, [class*="dropdown-item"], ' +
    '.select2-results__option, [class*="select__option"], [class*="select-option"], ' +
    '.ant-select-item-option, .ant-dropdown-menu-item, ' +
    '.v-list-item, [class*="v-list-item"], ' +
    '.MuiMenuItem-root, [class*="MuiMenuItem"], ' +
    '.chakra-menu__menuitem, ' +
    'li[class*="option"], li[class*="item"], li[class*="choice"], ' +
    'a[class*="dropdown-item"], div[class*="dropdown-item"], ' +
    '[data-radix-collection-item], [data-value]'
  ) as HTMLElement | null;
  if (option) return option;

  // Option inside an open listbox / menu / dropdown container
  const container = el.closest(
    '[role="listbox"], [role="menu"], [role="combobox"] + *, ' +
    'ul.dropdown-menu, .dropdown-menu, [class*="dropdown-menu"], ' +
    '[class*="dropdown-content"], [class*="dropdown-popover"], [class*="dropdown-list"], ' +
    '.select2-results, [data-radix-popper-content-wrapper], ' +
    '.ant-select-dropdown, .ant-dropdown, [class*="ant-dropdown"], ' +
    '.v-menu__content, [class*="v-menu"], ' +
    '.MuiMenu-paper, [class*="MuiMenu"], [class*="MuiPopover"], ' +
    '[class*="select__menu"], [class*="select-options"], [class*="options-container"], ' +
    '[data-headlessui-state], [data-state="open"], [popover]'
  );
  if (container && container !== el) {
    // If clicking a list item or child inside the dropdown container
    const item = el.closest('li, a, button, div[tabindex], div[class*="item"], div[class*="option"]');
    return (item as HTMLElement) || el;
  }
  return null;
}

/**
 * Finds the dropdown container element (to clone or inspect)
 */
export function findDropdownContainer(el: HTMLElement | null): HTMLElement | null {
  if (!el) return null;

  // Never treat sidebars or main navs as dropdown containers!
  if (el.closest('aside, [class*="sidebar"], [id*="sidebar"]')) {
    return null;
  }

  // 1. Direct match on standard dropdown menu classes/roles
  const knownDropdown = el.closest(
    '[role="listbox"], [role="menu"], .dropdown-menu, [class*="dropdown-menu"], [class*="dropdown-content"], [class*="dropdown-popover"], [class*="dropdown-list"], .select2-dropdown, .select2-results, [class*="select__menu"], [class*="select-menu"], [class*="select-options"], [class*="options-container"], [data-radix-popper-content-wrapper], .ant-select-dropdown, .ant-dropdown, [class*="ant-dropdown"], .v-menu__content, [class*="v-menu"], .MuiMenu-paper, [class*="MuiMenu"], [class*="MuiPopover"], [class*="popover"], [data-popper-placement], [data-state="open"], [data-headlessui-state], [popover]'
  ) as HTMLElement | null;
  if (knownDropdown && !['BODY', 'HTML', 'NAV', 'ASIDE', 'MAIN'].includes(knownDropdown.tagName)) {
    return knownDropdown;
  }

  // 2. Walk up to find the floating popup container (absolute or fixed with z-index)
  let curr = el.parentElement;
  while (curr && curr !== document.body && curr !== document.documentElement) {
    if (['NAV', 'ASIDE', 'MAIN'].includes(curr.tagName)) break;
    const style = window.getComputedStyle(curr);
    if (style.position === 'absolute' || style.position === 'fixed') {
      const z = parseInt(style.zIndex, 10);
      if (!isNaN(z) && z >= 5) {
        return curr;
      }
      if (curr.getAttribute('role') === 'listbox' || curr.getAttribute('role') === 'menu') {
        return curr;
      }
    }
    curr = curr.parentElement;
  }

  return knownDropdown || el.parentElement;
}

/**
 * Detects if an element is inside an actual modal dialog, alert dialog, or lightbox
 * Strictly excludes sidebars, navigation bars, headers, footers, and main layouts.
 */
export function findModalOrPopupContainer(el: HTMLElement | null): HTMLElement | null {
  if (!el) return null;

  // If clicked inside persistent UI layout (sidebar, navbar, header, footer): NEVER a modal!
  const layoutEl = el.closest('nav, aside, header, footer, main, [class*="sidebar"], [id*="sidebar"], [class*="navbar"], [id*="navbar"]');
  if (layoutEl) {
    return null;
  }

  let current: HTMLElement | null = el;
  let modalCandidate: HTMLElement | null = null;

  while (current && current !== document.body && current !== document.documentElement) {
    // Ignore StepFlow's own UI
    if (
      current.tagName.toLowerCase().startsWith('stepflow-') ||
      current.id.startsWith('stepflow-')
    ) {
      return null;
    }

    const tag = current.tagName.toUpperCase();
    if (['NAV', 'ASIDE', 'HEADER', 'FOOTER', 'MAIN', 'BODY', 'HTML'].includes(tag)) {
      return null;
    }

    const role = current.getAttribute('role');
    const ariaModal = current.getAttribute('aria-modal');
    if (role === 'dialog' || role === 'alertdialog' || ariaModal === 'true') {
      modalCandidate = current;
      break;
    }
    if (tag === 'DIALOG') {
      modalCandidate = current;
      break;
    }

    const className = (typeof current.className === 'string' ? current.className : '').toLowerCase();
    const id = (current.id || '').toLowerCase();

    // Check explicit modal libraries / classes
    if (
      className.includes('modal-dialog') ||
      className.includes('modal-content') ||
      className.includes('swal2-') ||
      className.includes('swal-') ||
      className.includes('sweetalert') ||
      className.includes('ant-modal') ||
      className.includes('muidialog') ||
      className.includes('chakra-modal') ||
      (className.split(/\s+/).some(c => c === 'modal' || c === 'modal-box'))
    ) {
      modalCandidate = current;
      break;
    }

    current = current.parentElement;
  }

  if (modalCandidate) {
    // If modal is wrapped inside a dedicated backdrop overlay (e.g. .swal2-container, .modal-backdrop, .modal.show, [role="presentation"])
    const parent = modalCandidate.parentElement;
    if (parent && parent !== document.body && parent !== document.documentElement) {
      const pClass = (typeof parent.className === 'string' ? parent.className : '').toLowerCase();
      const pRole = parent.getAttribute('role');
      if (
        pClass.includes('swal2-container') ||
        pClass.includes('modal-backdrop') ||
        pClass.includes('modal-overlay') ||
        pClass.includes('backdrop') ||
        pClass.includes('modal-wrap') ||
        pRole === 'presentation' ||
        pRole === 'dialog'
      ) {
        return parent;
      }
    }
    return modalCandidate;
  }

  return null;
}

/**
 * Attempts to find the label / header of the dropdown for an option
 */
export function findDropdownLabel(optionEl: HTMLElement): string {
  try {
    // 1. Look for aria-labelledby on parent listbox
    const listbox = optionEl.closest('[role="listbox"], [role="menu"]');
    if (listbox) {
      const labelledBy = listbox.getAttribute('aria-labelledby');
      if (labelledBy) {
        const labelEl = document.getElementById(labelledBy);
        if (labelEl && labelEl.textContent?.trim()) {
          return labelEl.textContent.trim().slice(0, 45);
        }
      }
    }

    // 2. Look for aria-controls referring to this listbox
    if (listbox && listbox.id) {
      const trigger = document.querySelector(`[aria-controls="${listbox.id}"]`);
      if (trigger) {
        return getElementReadableLabel(trigger as HTMLElement);
      }
    }

    // 3. Look nearby in previous sibling / parent container for label
    const parent = optionEl.closest('.dropdown, .select, [class*="select-container"], .form-group, div');
    if (parent) {
      const lbl = parent.querySelector('label, [class*="label"], [class*="trigger"], button');
      if (lbl && lbl !== optionEl && lbl.textContent?.trim()) {
        const text = lbl.textContent.trim().slice(0, 45);
        if (text && text.length > 1) return text;
      }
    }
  } catch {}
  return '';
}

export function getElementReadableLabel(el: HTMLElement): string {
  // If clicked on an SVG icon, path, or empty glyph, find closest interactive ancestor
  const tagName = el.tagName.toLowerCase();
  if (tagName === 'svg' || tagName === 'path' || tagName === 'i') {
    const parentInteractive = el.closest('button, a, [role="button"], [role="option"], [role="menuitem"], [role="combobox"], [data-toggle="dropdown"], label');
    if (parentInteractive && parentInteractive !== el) {
      return getElementReadableLabel(parentInteractive as HTMLElement);
    }
  }

  // 1. Check aria-label or title
  const ariaLabel = el.getAttribute('aria-label') || el.getAttribute('title');
  if (ariaLabel && ariaLabel.trim()) {
    return ariaLabel.trim();
  }

  // 2. Check innerText or textContent (for buttons, links, dropdown items, spans)
  if (
    el instanceof HTMLButtonElement ||
    el instanceof HTMLAnchorElement ||
    el.getAttribute('role') === 'button' ||
    el.getAttribute('role') === 'option' ||
    el.getAttribute('role') === 'menuitem' ||
    el.classList.contains('dropdown-item')
  ) {
    const text = el.innerText || el.textContent || '';
    if (text.trim()) {
      return text.trim().replace(/\s+/g, ' ').slice(0, 45);
    }
  }

  // 3. For native select elements
  if (el instanceof HTMLSelectElement) {
    // Check associated <label for="...">
    if (el.id) {
      const label = document.querySelector(`label[for="${el.id}"]`);
      if (label && label.textContent?.trim()) {
        return label.textContent.trim().slice(0, 45);
      }
    }
    const parentLabel = el.closest('label');
    if (parentLabel && parentLabel.textContent?.trim()) {
      return parentLabel.textContent.trim().slice(0, 45);
    }
    if (el.name) return el.name;
    if (el.id) return el.id;
  }

  // 4. Check placeholder or associated label for inputs & textareas
  if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
    if (el.placeholder && el.placeholder.trim()) {
      return el.placeholder.trim();
    }
    // Check associated <label for="...">
    if (el.id) {
      const label = document.querySelector(`label[for="${el.id}"]`);
      if (label && label.textContent?.trim()) {
        return label.textContent.trim().slice(0, 45);
      }
    }
    // Check parent label
    const parentLabel = el.closest('label');
    if (parentLabel && parentLabel.textContent?.trim()) {
      return parentLabel.textContent.trim().slice(0, 45);
    }
    // Check nearby label inside same form-group / container
    const container = el.closest('.form-group, .form-control, .field, .input-group, div');
    if (container) {
      const lbl = container.querySelector('label');
      if (lbl && lbl.textContent?.trim()) {
        return lbl.textContent.trim().slice(0, 45);
      }
    }
    // Check name or id attribute
    if (el.name) return el.name;
    if (el.id) return el.id;
  }

  // 5. Check image alt
  if (el instanceof HTMLImageElement && el.alt) {
    return el.alt;
  }

  // 6. Fallback to clean inner text
  const text = el.innerText || el.textContent || '';
  const clean = text.trim().replace(/\s+/g, ' ');
  if (clean && clean.length <= 40) {
    return clean;
  }

  return el.tagName.toLowerCase();
}

export function generateStepInstruction(
  eventType: 'click' | 'input' | 'change' | 'select' | 'navigation',
  el: HTMLElement | null,
  meta?: Partial<TargetElementMeta>,
  contextLabel?: string
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

  // 1. Dropdown Option Selection (Custom or Native)
  if (eventType === 'select' || meta?.isDropdownOption) {
    const optionText = meta?.selectedText || (el.innerText || el.textContent || '').trim().replace(/\s+/g, ' ') || 'Option';
    const ddName = contextLabel || findDropdownLabel(el);
    if (ddName) {
      return {
        title: `Select "${optionText}" from "${ddName}" dropdown`,
        description: `Click to select "${optionText}" from the "${ddName}" dropdown options.`
      };
    }
    return {
      title: `Select "${optionText}" from dropdown`,
      description: `Click on "${optionText}" from the dropdown list to select it.`
    };
  }

  // 2. Native <select> Change
  if (tag === 'select' || (eventType === 'change' && tag === 'select')) {
    const selectEl = el as HTMLSelectElement;
    const selectedOption = selectEl.options?.[selectEl.selectedIndex];
    const optionText = meta?.selectedText || selectedOption?.text?.trim() || selectEl.value;
    if (optionText) {
      return {
        title: `Select "${optionText}" from "${label}" dropdown`,
        description: `Choose "${optionText}" from the "${label}" dropdown menu.`
      };
    }
    return {
      title: `Select option from "${label}" dropdown`,
      description: `Choose the desired option from the "${label}" dropdown menu.`
    };
  }

  // 3. Text Typing (input / textarea / contenteditable)
  if (eventType === 'input' || (eventType === 'change' && isWritableTextInput(el))) {
    const isPassword = (el as HTMLInputElement).type === 'password';
    const value = meta?.inputValue !== undefined ? meta.inputValue : (el as HTMLInputElement).value || (el.innerText || '').trim();

    if (isPassword) {
      return {
        title: `Enter password into "${label}" field`,
        description: `Type your password into the "${label}" field.`
      };
    }

    if (value && value.trim()) {
      const displayVal = value.trim().length > 35 ? value.trim().slice(0, 32) + '...' : value.trim();
      return {
        title: `Type "${displayVal}" into "${label}" field`,
        description: `Enter "${displayVal}" into the "${label}" field to proceed.`
      };
    }

    return {
      title: `Type into "${label}" field`,
      description: `Enter the required text or information into the "${label}" field.`
    };
  }

  // 4. Click Events
  if (eventType === 'click') {
    // Check if clicking a dropdown trigger / toggle button
    const isDropdownTrigger = meta?.isDropdownTrigger || isDropdownTriggerElement(el);
    if (isDropdownTrigger) {
      return {
        title: `Click on "${label}" dropdown`,
        description: `Click on "${label}" to open the dropdown options.`
      };
    }

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
      const checked = (el as HTMLInputElement).checked;
      return {
        title: `${checked ? 'Check' : 'Toggle'} "${label}" checkbox`,
        description: `Click to ${checked ? 'check' : 'toggle'} the "${label}" checkbox.`
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

  return {
    title: `Interact with "${label}"`,
    description: `Interact with the "${label}" element.`
  };
}

export function getElementSelector(el: HTMLElement): string {
  if (el.id) return `#${el.id}`;

  const path: string[] = [];
  let current: HTMLElement | null = el;

  while (current && current !== document.body && current !== document.documentElement && path.length < 4) {
    if (current.id) {
      path.unshift(`#${current.id}`);
      break;
    }

    let seg = current.tagName.toLowerCase();
    if (current.className && typeof current.className === 'string') {
      const validClasses = current.className
        .trim()
        .split(/\s+/)
        .filter(c => !c.startsWith('stepflow-') && !c.includes(':') && c.length < 35)
        .slice(0, 2);
      if (validClasses.length > 0) {
        seg += '.' + validClasses.join('.');
      }
    }

    if (current.parentElement) {
      const siblings = Array.from(current.parentElement.children).filter(c => c.tagName === current?.tagName);
      if (siblings.length > 1) {
        const index = siblings.indexOf(current) + 1;
        seg += `:nth-of-type(${index})`;
      }
    }

    path.unshift(seg);
    current = current.parentElement;
  }

  return path.join(' > ') || el.tagName.toLowerCase();
}
