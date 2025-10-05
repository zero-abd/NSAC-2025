import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { GamePanel } from './components/GamePanel';
import { ChatPanel } from './components/ChatPanel';
import { LandingPage } from './components/LandingPage';
import { AboutPage } from './components/AboutPage';
import { MissionPage } from './components/MissionPage';
import { SystemsPage } from './components/SystemsPage';
import { MethodsPage } from './components/MethodsPage';
import { DataDesignPage } from './components/DataDesignPage';
import { X } from 'lucide-react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showChat, setShowChat] = useState(true);

  const renderContent = () => {
    const isSimulator = activeTab === 'simulator';
    const shouldShowChat = isSimulator || showChat;

    switch (activeTab) {
      case 'home':
        return <LandingPage onNavigateToSimulator={() => setActiveTab('simulator')} />;
      case 'about':
        return (
          <div className="page-with-chat">
            <AboutPage />
            {shouldShowChat && <ChatPanel />}
          </div>
        );
      case 'mission':
        return (
          <div className="page-with-chat">
            <MissionPage />
            {shouldShowChat && <ChatPanel />}
          </div>
        );
      case 'systems':
        return (
          <div className="page-with-chat">
            <SystemsPage />
            {shouldShowChat && <ChatPanel />}
          </div>
        );
      case 'methods':
        return (
          <div className="page-with-chat">
            <MethodsPage />
            {shouldShowChat && <ChatPanel />}
          </div>
        );
      case 'data-design':
        return (
          <div className="page-with-chat">
            <DataDesignPage />
            {shouldShowChat && <ChatPanel />}
          </div>
        );
      case 'simulator':
        return (
          <div className="simulator-container">
            <GamePanel />
            <ChatPanel />
          </div>
        );
      default:
        return <LandingPage onNavigateToSimulator={() => setActiveTab('simulator')} />;
    }
  };

  return (
    <div className="app">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="main-content">
        {renderContent()}
        {activeTab !== 'simulator' && activeTab !== 'home' && (
          <button 
            className="chat-toggle"
            onClick={() => setShowChat(!showChat)}
            title={showChat ? "Hide AI Assistant" : "Show AI Assistant"}
          >
            {showChat ? <X size={20} /> : <span className="ai-text">AI</span>}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;