import React from 'react';
import { Home, Info, Target, Settings, BookOpen, Palette, Gamepad2, Table } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="navbar">
      <div className="navbar-header">
        <h1><span style={{color: '#3498db'}}>Artemis+</span></h1>
        <h2>Lunar Habitat</h2>
      </div>
      
      <nav className="nav-menu">
        <div 
          className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => onTabChange('home')}
        >
          <Home size={20} />
          <span>Home</span>
        </div>
        
        <div 
          className={`nav-item ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => onTabChange('about')}
        >
          <Info size={20} />
          <span>About</span>
        </div>

        <div 
          className={`nav-item ${activeTab === 'mission' ? 'active' : ''}`}
          onClick={() => onTabChange('mission')}
        >
          <Target size={20} />
          <span>Mission</span>
        </div>

        <div 
          className={`nav-item ${activeTab === 'systems' ? 'active' : ''}`}
          onClick={() => onTabChange('systems')}
        >
          <Settings size={20} />
          <span>Systems</span>
        </div>

        <div 
          className={`nav-item ${activeTab === 'methods' ? 'active' : ''}`}
          onClick={() => onTabChange('methods')}
        >
          <BookOpen size={20} />
          <span>Methods</span>
        </div>
        
        <div 
          className={`nav-item ${activeTab === 'data' ? 'active' : ''}`}
          onClick={() => onTabChange('data')}
        >
          <Table size={20} />
          <span>Data</span>
        </div>
        
        <div 
          className={`nav-item ${activeTab === 'design' ? 'active' : ''}`}
          onClick={() => onTabChange('design')}
        >
          <Palette size={20} />
          <span>Design</span>
        </div>
        
        <div 
          className={`nav-item ${activeTab === 'simulator' ? 'active' : ''}`}
          onClick={() => onTabChange('simulator')}
        >
          <Gamepad2 size={20} />
          <span>Simulator</span>
        </div>
      </nav>
    </div>
  );
};
