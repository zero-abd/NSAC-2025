"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const chat_1 = require("./routes/chat");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Serve static files (WebGL game) with proper Brotli handling
app.use('/game', express_1.default.static(path_1.default.join(__dirname, '../public'), {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.br')) {
            res.setHeader('Content-Encoding', 'br');
            if (filePath.endsWith('.js.br')) {
                res.setHeader('Content-Type', 'application/javascript');
            }
            else if (filePath.endsWith('.wasm.br')) {
                res.setHeader('Content-Type', 'application/wasm');
            }
            else if (filePath.endsWith('.data.br')) {
                res.setHeader('Content-Type', 'application/octet-stream');
            }
        }
    }
}));
// API routes
app.use('/api/chat', chat_1.chatRouter);
// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Artemis+ Backend is running' });
});
// Serve the main game page
app.get('/game', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'));
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`WebGL game available at http://localhost:${PORT}/game`);
});
//# sourceMappingURL=index.js.map