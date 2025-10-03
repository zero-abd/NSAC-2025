import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import { chatRouter } from './routes/chat';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (WebGL game) with proper Brotli handling
app.use('/game', express.static(path.join(__dirname, '../public'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.br')) {
      res.setHeader('Content-Encoding', 'br');
      if (filePath.endsWith('.js.br')) {
        res.setHeader('Content-Type', 'application/javascript');
      } else if (filePath.endsWith('.wasm.br')) {
        res.setHeader('Content-Type', 'application/wasm');
      } else if (filePath.endsWith('.data.br')) {
        res.setHeader('Content-Type', 'application/octet-stream');
      }
    }
  }
}));

// API routes
app.use('/api/chat', chatRouter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Artemis+ Backend is running' });
});

// Serve the main game page
app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Serve frontend static files (for production)
app.use(express.static(path.join(__dirname, '../frontend-dist')));

// Serve frontend for all non-API routes (SPA routing)
app.get('*', (req, res) => {
  // Don't serve frontend for API routes
  if (req.path.startsWith('/api') || req.path.startsWith('/game')) {
    return res.status(404).json({ error: 'Not found' });
  }
  res.sendFile(path.join(__dirname, '../frontend-dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`WebGL game available at http://localhost:${PORT}/game`);
  console.log(`Frontend available at http://localhost:${PORT}`);
});
