// Stateless mission-assistant route (Vercel Function).
//
// Bring your own key: the visitor's Gemini API key arrives in the
// `x-gemini-api-key` header of each request, is forwarded to Google for that
// one call, and is never stored, cached or logged. There is no module-level
// key or client, so one visitor's key can never serve another visitor.

const GEMINI_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';
// gemini-2.5-flash is the model the team built with; the alias is a fallback
// in case Google retires that model name.
const MODELS = ['gemini-2.5-flash', 'gemini-flash-latest'];
const MAX_MESSAGE_CHARS = 4000;
const MAX_GAME_STATE_CHARS = 4000;

function buildPrompt(message: string, gameState: unknown): string {
  const state =
    gameState == null
      ? 'No specific game state provided'
      : `Current game state: ${JSON.stringify(gameState).slice(0, MAX_GAME_STATE_CHARS)}`;

  return `You are a helpful Artemis+ mission assistant for a lunar base simulation game. The user is playing a space exploration game where they build and manage lunar habitats.

GAME CONTROLS:
- W, A, S, D keys for character movement
- Left Alt to lock/unlock mouse cursor
- When mouse is locked, move mouse to control character view/camera
- Use these controls to navigate around the lunar base and inspect different areas

MISSION CONTEXTS:
The simulation contains 4 different mission designs for lunar exploration:

1. **Mission 01: Habitat Layout** - Build the base by dragging modules. The system enforces habitability rules. Put comms too close to bunks? Artemis+ flags 'Crew fatigue risk' and explains why. It teaches by consequences, not text.

2. **Mission 02: Mission Setup** - Pick crew size and mission length. Every choice instantly changes resource needs — you're not guessing, you're seeing the consequences. Configure crew amount, mission duration (e.g., Short - 60 days), and mission location (Moon).

3. **Mission 03: Habitat Customization** - Pick crew size and mission length. Every choice instantly changes resource needs — you're not guessing, you're seeing the consequences. This involves customizing habitat modules for specific crew needs.

4. **Mission 04: Colony Management** - Manage the overall lunar colony with multiple habitat structures, including Moon Surface map, Colony map, Habitat Map, and Habitat Layout Info. The simulation shows a 3D lunar landscape with modular habitat units, protective barriers, and various structures.

CURRENT GAME STATE: ${state}

USER QUESTION: ${message}

Please provide helpful advice about lunar base construction, habitat layout optimization, crew management, resource planning, mission strategies, or specific help with their current mission. Consider the habitability rules, crew fatigue risks, and resource management aspects. Keep your response concise and focused on lunar base simulation gameplay.`;
}

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });
}

type GeminiError = { error?: { message?: string; status?: string; details?: { reason?: string }[] } };
type GeminiReply = { candidates?: { content?: { parts?: { text?: string }[] } }[] };

function isKeyError(status: number, err: GeminiError | null): boolean {
  if (status === 401 || status === 403) return true;
  const reasons = err?.error?.details?.map((d) => d.reason) ?? [];
  return status === 400 && (reasons.includes('API_KEY_INVALID') || /api key/i.test(err?.error?.message ?? ''));
}

export async function POST(request: Request): Promise<Response> {
  const apiKey = request.headers.get('x-gemini-api-key')?.trim();
  if (!apiKey) {
    return json(401, { error: 'Add your Gemini API key to use the assistant.' });
  }

  let body: { message?: unknown; gameState?: unknown };
  try {
    body = await request.json();
  } catch {
    return json(400, { error: 'Request body must be JSON.' });
  }

  const message = typeof body.message === 'string' ? body.message.trim() : '';
  if (!message) return json(400, { error: 'Message is required.' });
  if (message.length > MAX_MESSAGE_CHARS) {
    return json(413, { error: `Message is too long (max ${MAX_MESSAGE_CHARS} characters).` });
  }

  const payload = JSON.stringify({
    contents: [{ role: 'user', parts: [{ text: buildPrompt(message, body.gameState) }] }],
  });

  for (const model of MODELS) {
    let res: Response;
    try {
      res = await fetch(`${GEMINI_BASE}/${model}:generateContent`, {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-goog-api-key': apiKey },
        body: payload,
        signal: AbortSignal.timeout(55_000),
      });
    } catch {
      return json(504, { error: 'Gemini did not answer in time. Please try again.' });
    }

    if (res.status === 404) continue; // model name retired: try the next one

    if (!res.ok) {
      const err = (await res.json().catch(() => null)) as GeminiError | null;
      if (isKeyError(res.status, err)) {
        return json(401, { error: 'Gemini rejected this API key. Check the key and try again.' });
      }
      if (res.status === 429) {
        return json(429, { error: 'This Gemini key is over its rate limit or quota. Wait a minute and try again.' });
      }
      return json(502, { error: `Gemini returned an error (${res.status}). Please try again.` });
    }

    const data = (await res.json()) as GeminiReply;
    const text = (data.candidates?.[0]?.content?.parts ?? [])
      .map((p) => p.text ?? '')
      .join('')
      .trim();
    if (!text) return json(502, { error: 'Gemini returned an empty answer. Try rephrasing the question.' });

    return json(200, { message: text, timestamp: new Date().toISOString() });
  }

  return json(502, { error: 'No supported Gemini model is available for this key.' });
}

export function GET(): Response {
  return json(405, { error: 'Use POST.' });
}
