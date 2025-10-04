import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { GamePanel } from './components/GamePanel';
import { ChatPanel } from './components/ChatPanel';
import { LandingPage } from './components/LandingPage';
import { AboutPage } from './components/AboutPage';
import { MissionPage } from './components/MissionPage';
import { SystemsPage } from './components/SystemsPage';
import { MethodsPage } from './components/MethodsPage';
import { DesignPage } from './components/DesignPage';
import { DataPage } from './components/DataPage';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <LandingPage onNavigateToSimulator={() => setActiveTab('simulator')} />;
      case 'about':
        return (
          <div className="page-with-chat">
            <AboutPage />
            <ChatPanel />
          </div>
        );
      case 'mission':
        return (
          <div className="page-with-chat">
            <MissionPage />
            <ChatPanel />
          </div>
        );
      case 'systems':
        return (
          <div className="page-with-chat">
            <SystemsPage />
            <ChatPanel />
          </div>
        );
      case 'methods':
        return (
          <div className="page-with-chat">
            <MethodsPage />
            <ChatPanel />
          </div>
        );
      case 'simulator':
        return (
          <div className="simulator-container">
            <GamePanel />
            <ChatPanel />
          </div>
        );
      case 'design':
        return <DesignPage />;
      case 'data':
        return <DataPage />;
      default:
        return <LandingPage onNavigateToSimulator={() => setActiveTab('simulator')} />;
    }
  };

  return (
    <div className="app">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;