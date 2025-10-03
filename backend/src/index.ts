import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';
import crypto from 'crypto';
import { chatRouter } from './routes/chat';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Helper: compute short hash of a file if it exists
function computeFileHash(filePath: string): string | null {
  try {
    const data = fs.readFileSync(filePath);
    const hash = crypto.createHash('md5').update(data).digest('hex');
    return hash.slice(0, 12);
  } catch {
    return null;
  }
}

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

// Frontend version endpoint (diagnostic)
app.get('/api/frontend-version', (req, res) => {
  const indexPath = path.join(__dirname, '../frontend-dist/index.html');
  const hash = computeFileHash(indexPath);
  if (!hash) {
    return res.status(404).json({ error: 'index.html not found' });
  }
  return res.json({ indexHtmlHash: hash });
});

// Serve the main game page
app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Serve frontend static files (for production) with cache control
app.use(express.static(path.join(__dirname, '../frontend-dist'), {
  setHeaders: (res, filePath) => {
    // Ensure latest HTML on each deploy
    if (filePath.endsWith(`${path.sep}index.html`)) {
      res.setHeader('Cache-Control', 'no-store');
      return;
    }

    // Long cache for fingerprinted assets (vite outputs to assets/ with content hashes)
    if (filePath.includes(`${path.sep}assets${path.sep}`)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      return;
    }

    // Reasonable default for other static files
    res.setHeader('Cache-Control', 'public, max-age=3600');
  }
}));

// Serve frontend for all non-API routes (SPA routing)
app.get('*', (req, res) => {
  // Don't serve frontend for API routes
  if (req.path.startsWith('/api') || req.path.startsWith('/game')) {
    return res.status(404).json({ error: 'Not found' });
  }
  res.setHeader('Cache-Control', 'no-store');
  res.sendFile(path.join(__dirname, '../frontend-dist/index.html'));
});

app.listen(PORT, () => {
  const indexPath = path.join(__dirname, '../frontend-dist/index.html');
  const hash = computeFileHash(indexPath);
  console.log(`Server is running on port ${PORT}`);
  console.log(`WebGL game available at http://localhost:${PORT}/game`);
  console.log(`Frontend available at http://localhost:${PORT}`);
  console.log(`Serving frontend index at ${indexPath} (hash: ${hash ?? 'missing'})`);
});
