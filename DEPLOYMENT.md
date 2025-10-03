# Deployment Guide for Artemis+ Application

## Free Hosting Options

### 1. Railway (Recommended) 🚀

**Why Railway?**
- Free $5 credit monthly (usually enough for small projects)
- Easy deployment from GitHub
- Automatic builds and deployments
- Custom domains
- Perfect for Node.js applications

**Steps to Deploy on Railway:**

1. **Prepare your repository:**
   ```bash
   # Install dependencies
   npm install
   
   # Build for production
   node build-for-production.js
   ```

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for Railway deployment"
   git push origin main
   ```

3. **Deploy on Railway:**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Railway will auto-detect it's a Node.js app
   - Deploy! 🎉

4. **Set Environment Variables (if needed):**
   - In Railway dashboard, go to your project
   - Click on "Variables" tab
   - Add any environment variables (like API keys)

### 2. Render (Alternative) 🎨

**Why Render?**
- Always free tier (750 hours/month)
- Spins down after 15 minutes of inactivity
- Good for Node.js apps

**Steps to Deploy on Render:**

1. **Prepare your repository** (same as Railway)

2. **Deploy on Render:**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Build Command**: `node build-for-production.js`
     - **Start Command**: `cd backend && npm start`
     - **Node Version**: 18 or higher
   - Deploy! 🎉

### 3. Vercel (Frontend + Serverless) ⚡

**Why Vercel?**
- Excellent for frontend
- Serverless functions for backend
- Generous free tier

**Limitation**: Not ideal for persistent Node.js servers (your chat API needs to stay running)

### 4. Netlify (Frontend + Serverless) 🌐

**Why Netlify?**
- Great for frontend
- Serverless functions
- Good free tier

**Limitation**: Serverless functions only (not persistent servers)

## Local Testing Before Deployment

1. **Test the production build locally:**
   ```bash
   # Build everything
   node build-for-production.js
   
   # Start the production server
   cd backend
   npm start
   ```

2. **Visit your app:**
   - Frontend: `http://localhost:5000`
   - Game: `http://localhost:5000/game`
   - API Health: `http://localhost:5000/api/health`

## Important Notes

- **Unity WebGL Files**: Make sure `backend/public/Build/` contains your Unity WebGL build files
- **API Keys**: Users will need to enter their Gemini API key in the chat panel
- **Environment Variables**: No sensitive data is hardcoded (API keys are user-provided)

## Troubleshooting

1. **Build fails**: Make sure all dependencies are installed
2. **Game doesn't load**: Check that Unity WebGL files are in `backend/public/Build/`
3. **API errors**: Ensure the backend is running and accessible

## Recommended: Railway

For your use case, **Railway** is the best choice because:
- ✅ Free tier with $5 credit monthly
- ✅ Perfect for Node.js + static files
- ✅ Easy GitHub integration
- ✅ Automatic deployments
- ✅ Custom domains
- ✅ No cold starts (unlike serverless)

Your app will be available at a URL like: `https://your-app-name.railway.app`
