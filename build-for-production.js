const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Building Artemis+ for production...\n');

try {
  // 1. Build frontend
  console.log('📦 Building frontend...');
  execSync('cd frontend && npm install && npm run build', { stdio: 'inherit' });
  
  // 2. Create frontend-dist directory in backend
  const frontendDistPath = path.join(__dirname, 'backend', 'frontend-dist');
  if (fs.existsSync(frontendDistPath)) {
    fs.rmSync(frontendDistPath, { recursive: true });
  }
  fs.mkdirSync(frontendDistPath, { recursive: true });
  
  // 3. Copy frontend build to backend
  console.log('📋 Copying frontend build to backend...');
  const copyDir = (src, dest) => {
    const files = fs.readdirSync(src);
    for (const file of files) {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);
      const stat = fs.statSync(srcPath);
      
      if (stat.isDirectory()) {
        if (!fs.existsSync(destPath)) {
          fs.mkdirSync(destPath, { recursive: true });
        }
        copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  };
  
  copyDir('frontend/dist', 'backend/frontend-dist');
  
  // 4. Build backend
  console.log('🔧 Building backend...');
  execSync('cd backend && npm install && npm run build', { stdio: 'inherit' });
  
  console.log('\n✅ Build complete! Ready for deployment.');
  console.log('📁 Frontend files copied to: backend/frontend-dist/');
  console.log('🔧 Backend built to: backend/dist/');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
