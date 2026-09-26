import { useSyncExternalStore } from 'react';

// The visitor's Gemini key lives only in this page's memory. It is never
// written to storage, and it is sent only as a header on the visitor's own
// requests to /api/chat/message. Reloading the page forgets it.
let geminiKey = '';
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

export function setGeminiKey(key: string) {
  geminiKey = key.trim();
  emit();
}

export function clearGeminiKey() {
  geminiKey = '';
  emit();
}

export function useGeminiKey(): string {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => geminiKey,
  );
}

export class AssistantError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export async function askAssistant(message: string, gameState: unknown = null): Promise<{ message: string; timestamp: string }> {
  if (!geminiKey) throw new AssistantError('Add your Gemini API key to use the assistant.', 401);

  let res: Response;
  try {
    res = await fetch('/api/chat/message', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-gemini-api-key': geminiKey },
      body: JSON.stringify({ message, gameState }),
    });
  } catch {
    throw new AssistantError('Could not reach the assistant. Check your connection and try again.', 0);
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new AssistantError(data.error || `The assistant returned an error (${res.status}).`, res.status);
  }
  return data;
}

export const REPO_URL = 'https://github.com/zero-abd/artemis-plus-lunar-habitat-simulator';
