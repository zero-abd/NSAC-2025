# Artemis+ Lunar Habitat Simulator

**🌐 Live Demo: [Artemis+](https://nsac-2025-production.up.railway.app/)**

**NASA Space Apps Challenge 2025**

A React TypeScript web application featuring an Artemis+ Unity WebGL game with an AI-powered chat assistant using Google's Gemini LLM. This project was developed for the NASA Space Apps Challenge 2025, combining space exploration gaming with AI assistance for educational and strategic purposes.

## Features

- **Left Navbar**: Navigation sidebar with game controls and settings
- **Center Game Panel**: Unity WebGL Artemis+ game embedded in an iframe
- **Right Chat Panel**: AI assistant powered by Google Gemini for space exploration help and strategies
- **API Key Management**: Secure API key input for Gemini integration
- **Responsive Design**: Mobile-friendly layout

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Google Gemini API key (free from [Google AI Studio](https://makersuite.google.com/app/apikey))
- Unity WebGL build files in `backend/public/Build/` folder (the game is built using Unity and exported as WebGL)

## Installation

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd NSAC-2025
   ```

2. **Install Frontend Dependencies**:
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**:
   ```bash
   cd ../backend
   npm install
   ```

## Running the Application

### Development Mode

1. **Start the Backend Server**:
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

2. **Start the Frontend Development Server** (in a new terminal):
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:3000`

### Production Mode

1. **Build the Backend**:
   ```bash
   cd backend
   npm run build
   npm start
   ```

2. **Build the Frontend**:
   ```bash
   cd frontend
   npm run build
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. You'll see the three-panel layout:
   - **Left**: Navigation sidebar
   - **Center**: Artemis+ Unity WebGL game
   - **Right**: Chat assistant (requires API key)

3. **Setting up the AI Assistant**:
   - Click on the chat panel on the right
   - Enter your Google Gemini API key
   - Click "Set API Key" to activate the assistant
   - Start chatting about space exploration strategies and techniques!

## API Key Setup

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the API key and paste it into the chat panel

## Project Structure

```
NSAC-2025/
├── frontend/                 # React TypeScript frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Navbar.tsx
│   │   │   ├── GamePanel.tsx
│   │   │   └── ChatPanel.tsx
│   │   ├── App.tsx
│   │   └── App.css
│   ├── package.json
│   └── vite.config.ts
├── backend/                  # Node.js Express backend
│   ├── src/
│   │   ├── routes/
│   │   │   └── chat.ts      # Chat API routes
│   │   └── index.ts         # Main server file
│   ├── public/              # WebGL game files
│   │   ├── index.html
│   │   ├── Build/           # Unity WebGL game files (required for game to run)
│   │   └── TemplateData/
│   └── package.json
└── unity_codebase/       # Unity source code for the game build
```

## Technologies Used

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Lucide React for icons
- Axios for API calls
- CSS3 for styling

### Backend
- Node.js with Express
- TypeScript
- Google Generative AI SDK
- CORS for cross-origin requests

### Game Development
- Unity (for game development and WebGL export)
- WebGL build files located in `backend/public/Build/` folder

## API Endpoints

- `GET /api/health` - Health check
- `GET /game` - Serve the WebGL game
- `POST /api/chat/set-api-key` - Set Gemini API key
- `POST /api/chat/message` - Send message to AI assistant
- `GET /api/chat/status` - Check if API key is set

## Development Notes

- The WebGL game is served from the backend at `/game` endpoint
- The frontend proxies API calls to the backend
- API keys are stored in memory (consider using a database for production)
- The chat assistant is specifically trained to help with space exploration strategies
- **Important**: The Unity WebGL build files must be present in `backend/public/Build/` folder for the game to run properly
- The game is developed in Unity and exported as WebGL for web deployment

## Troubleshooting

1. **API Key Issues**: Make sure your Gemini API key is valid and has proper permissions
2. **Game Not Loading**: Check that the backend is running and serving files from `/public`, and ensure Unity WebGL build files are present in `backend/public/Build/` folder
3. **CORS Errors**: Ensure both frontend and backend are running on their respective ports
4. **Build Errors**: Make sure all dependencies are installed with `npm install`

## License

This project is for educational purposes as part of NSAC 2025.
