import { createReadStream, existsSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// The Unity build is Brotli-compressed (*.br). In production vercel.json adds
// `Content-Encoding: br`; this does the same for `npm run dev`.
const BR_TYPES: Record<string, string> = {
  '.js.br': 'application/javascript',
  '.wasm.br': 'application/wasm',
  '.data.br': 'application/octet-stream',
}

function unityBrotli(): Plugin {
  return {
    name: 'unity-brotli',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = (req.url ?? '').split('?')[0]
        const ext = Object.keys(BR_TYPES).find((e) => url.endsWith(e))
        if (!ext || !url.startsWith('/game/Build/') || url.includes('..')) return next()
        const file = join(server.config.publicDir, decodeURIComponent(url))
        if (!existsSync(file)) return next()
        res.setHeader('Content-Encoding', 'br')
        res.setHeader('Content-Type', BR_TYPES[ext])
        createReadStream(file).pipe(res)
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), unityBrotli()],
  server: {
    port: 3000,
  },
})
