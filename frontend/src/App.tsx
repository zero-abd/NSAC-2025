import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { GamePanel } from './components/GamePanel';
import { ChatPanel } from './components/ChatPanel';
import { LandingPage } from './components/LandingPage';
import { AboutPage } from './components/AboutPage';
import { DesignPage } from './components/DesignPage';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <LandingPage onNavigateToSimulator={() => setActiveTab('simulator')} />;
      case 'about':
        return <AboutPage />;
      case 'design':
        return <DesignPage />;
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
      </div>
    </div>
  );
}

export default App;