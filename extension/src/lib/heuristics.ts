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
      return text.trim().slice(0, 40);
    }
  }

  // 3. Check placeholder for inputs
  if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
    if (el.placeholder && el.placeholder.trim()) {
      return el.placeholder.trim();
    }
    // Check associated <label>
    if (el.id) {
      const label = document.querySelector(`label[for="${el.id}"]`);
      if (label && label.textContent?.trim()) {
        return label.textContent.trim();
      }
    }
    // Check parent label
    const parentLabel = el.closest('label');
    if (parentLabel && parentLabel.textContent?.trim()) {
      return parentLabel.textContent.trim().slice(0, 40);
    }
    // Check name or id attribute
    if (el.name) return el.name;
    if (el.id) return el.id;
  }

  // 4. Check image alt
  if (el instanceof HTMLImageElement && el.alt) {
    return el.alt;
  }

  // 5. Fallback to tag name or class
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
    return {
      title: 'Navigasi ke Halaman',
      description: `Buka halaman ${document.title || window.location.href}`
    };
  }

  if (!el) {
    return {
      title: 'Interaksi Halaman',
      description: 'Lakukan interaksi pada layar'
    };
  }

  const tag = el.tagName.toLowerCase();
  const label = getElementReadableLabel(el);

  if (eventType === 'click') {
    if (tag === 'button' || el.getAttribute('role') === 'button') {
      return {
        title: `Klik "${label}"`,
        description: `Klik tombol "${label}" untuk melanjutkan proses.`
      };
    }
    if (tag === 'a') {
      return {
        title: `Klik link "${label}"`,
        description: `Klik tautan "${label}" untuk berpindah halaman.`
      };
    }
    if (tag === 'input' && (el as HTMLInputElement).type === 'checkbox') {
      return {
        title: `Centang opsi "${label}"`,
        description: `Pilih atau centang kotak "${label}".`
      };
    }
    if (tag === 'input' && (el as HTMLInputElement).type === 'radio') {
      return {
        title: `Pilih opsi "${label}"`,
        description: `Pilih opsi radio "${label}".`
      };
    }
    return {
      title: `Klik pada "${label}"`,
      description: `Klik elemen "${label}" pada halaman.`
    };
  }

  if (eventType === 'input' || eventType === 'change') {
    if (tag === 'select') {
      return {
        title: `Pilih dropdown "${label}"`,
        description: `Pilih salah satu opsi dari menu dropdown "${label}".`
      };
    }
    const inputEl = el as HTMLInputElement;
    if (inputEl.type === 'password') {
      return {
        title: `Masukkan Password pada "${label}"`,
        description: `Ketik password Anda pada kolom "${label}".`
      };
    }
    return {
      title: `Ketik pada kolom "${label}"`,
      description: `Masukkan teks atau data yang diperlukan pada kolom "${label}".`
    };
  }

  return {
    title: `Lakukan aksi pada "${label}"`,
    description: `Interaksi dengan elemen ${label}.`
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

