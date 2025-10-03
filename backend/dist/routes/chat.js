"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatRouter = void 0;
const express_1 = __importDefault(require("express"));
const generative_ai_1 = require("@google/generative-ai");
const router = express_1.default.Router();
exports.chatRouter = router;
// Store API keys in memory (in production, use a proper database)
const apiKeys = new Map();
// Initialize Gemini AI
let genAI = null;
// Set API key endpoint
router.post('/set-api-key', (req, res) => {
    const { apiKey } = req.body;
    if (!apiKey) {
        return res.status(400).json({ error: 'API key is required' });
    }
    try {
        // Test the API key by initializing Gemini
        genAI = new generative_ai_1.GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
        // Store the API key (in production, store in database with user session)
        apiKeys.set('default', apiKey);
        res.json({ message: 'API key set successfully' });
    }
    catch (error) {
        res.status(400).json({ error: 'Invalid API key' });
    }
});
// Chat endpoint
router.post('/message', async (req, res) => {
    const { message, gameState } = req.body;
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }
    if (!genAI) {
        return res.status(400).json({ error: 'API key not set. Please set your Gemini API key first.' });
    }
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
        // Create a context-aware prompt for space exploration assistance
        const prompt = `You are a helpful Artemis+ mission assistant for a lunar base simulation game. The user is playing a space exploration game where they build and manage lunar habitats.

GAME CONTROLS:
- WASD keys for character movement
- Left Alt to lock/unlock mouse cursor
- When mouse is locked, move mouse to control character view/camera
- Use these controls to navigate around the lunar base and inspect different areas

MISSION CONTEXTS:
The simulation contains 4 different mission designs for lunar exploration:

1. **Mission 01: Habitat Layout** - Build the base by dragging modules. The system enforces habitability rules. Put comms too close to bunks? Artemis+ flags 'Crew fatigue risk' and explains why. It teaches by consequences, not text.

2. **Mission 02: Mission Setup** - Pick crew size and mission length. Every choice instantly changes resource needs — you're not guessing, you're seeing the consequences. Configure crew amount, mission duration (e.g., Short - 60 days), and mission location (Moon).

3. **Mission 03: Habitat Customization** - Pick crew size and mission length. Every choice instantly changes resource needs — you're not guessing, you're seeing the consequences. This involves customizing habitat modules for specific crew needs.

4. **Mission 04: Colony Management** - Manage the overall lunar colony with multiple habitat structures, including Moon Surface map, Colony map, Habitat Map, and Habitat Layout Info. The simulation shows a 3D lunar landscape with modular habitat units, protective barriers, and various structures.

CURRENT GAME STATE: ${gameState ? `Current game state: ${JSON.stringify(gameState)}` : 'No specific game state provided'}

USER QUESTION: ${message}

Please provide helpful advice about lunar base construction, habitat layout optimization, crew management, resource planning, mission strategies, or specific help with their current mission. Consider the habitability rules, crew fatigue risks, and resource management aspects. Keep your response concise and focused on lunar base simulation gameplay.`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        res.json({
            message: text,
            timestamp: new Date().toISOString()
        });
    }
    catch (error) {
        console.error('Error generating response:', error);
        res.status(500).json({ error: 'Failed to generate response' });
    }
});
// Check if API key is set
router.get('/status', (req, res) => {
    res.json({
        hasApiKey: !!genAI,
        message: genAI ? 'API key is set' : 'API key not set'
    });
});
//# sourceMappingURL=chat.js.map