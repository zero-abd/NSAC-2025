const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Building Artemis+ for production...\n');

try {
  // 1. Build frontend
  console.log('📦 Building frontend...');
  execSync('cd frontend && npm install --omit=dev && npm run build', { stdio: 'inherit' });
  
  // 2. Create frontend-dist directory in backend
  const frontendDistPath = path.join(__dirname, 'backend', 'frontend-dist');
  if (fs.existsSync(frontendDistPath)) {
    fs.rmSync(frontendDistPath, { recursive: true });
  }
  fs.mkdirSync(frontendDistPath, { recursive: true });
  
  // 3. Copy frontend build to backend
  console.log('📋 Copying frontend build to backend...');
  execSync(`cp -r frontend/dist/* backend/frontend-dist/`, { stdio: 'inherit' });
  
  // 4. Build backend
  console.log('🔧 Building backend...');
  execSync('cd backend && npm install --omit=dev && npm run build', { stdio: 'inherit' });
  
  console.log('\n✅ Build complete! Ready for deployment.');
  console.log('📁 Frontend files copied to: backend/frontend-dist/');
  console.log('🔧 Backend built to: backend/dist/');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
