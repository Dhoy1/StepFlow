// Helper for Editor Role Access using Team PIN

export const DEFAULT_PIN = process.env.NEXT_PUBLIC_EDITOR_PIN || '1234';

const AUTH_KEY = 'stepflow_editor_token';
const EDITOR_NAME_KEY = 'stepflow_editor_name';

export function isEditorAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(AUTH_KEY) === 'true';
}

export function getStoredEditorName(): string {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem(EDITOR_NAME_KEY) || '';
}

export function setStoredEditorName(name: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(EDITOR_NAME_KEY, name.trim());
}

export function loginWithPin(inputPin: string, editorName?: string): boolean {
  if (typeof window === 'undefined') return false;
  if (inputPin.trim() === DEFAULT_PIN.trim()) {
    localStorage.setItem(AUTH_KEY, 'true');
    if (editorName && editorName.trim()) {
      setStoredEditorName(editorName.trim());
    }
    return true;
  }
  return false;
}

export function logoutEditor(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(AUTH_KEY);
}

export function getStoredPin(): string {
  return DEFAULT_PIN;
}

