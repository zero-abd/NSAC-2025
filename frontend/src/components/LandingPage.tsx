import React, { useState } from "react";
import { AssistantChat } from './AssistantChat';

interface LandingPageProps {
  onNavigateToSimulator?: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onNavigateToSimulator,
}) => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="landing-page">
      <div className="landing-content">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-accent">Artemis+</span>
            </h1>
            <p className="hero-subline">
              Interactive habitat-planning and validation environment focused on long-duration lunar missions at the south pole.
            </p>
            <p className="hero-subtitle">
              Combines in-situ resource utilization (ISRU), aeroponic vertical greenhouses, and closed-loop water systems so designers can test tradeoffs (mass, power, O₂, water, food) in minutes rather than months.
            </p>
            <div className="cta-buttons">
              <button className="cta-button" onClick={onNavigateToSimulator}>
                Web Simulation
              </button>

              <a
                className="cta-button"
                href="https://drive.google.com/file/d/1gC-KIiKuW8_-H1686DCXjRS6rKbsW6yA/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Local Simulation
              </a>

              <a
                href="https://docs.google.com/document/d/1SzAdJUrG13BEjFGdndVeFb8ll743DiXvXLCdL5AuoD0/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Data & Design Documentation
              </a>
            </div>
          </div>
        </div>

        {/* Core System Pillars */}
        <div className="pillars-section">
          <div className="pillars-container">
            <h2 className="pillars-title">Core System Pillars</h2>
            <div className="pillars-grid">
              <div className="pillar-card">
                <div className="pillar-icon">💧</div>
                <h3 className="pillar-title">Closed-Loop Water</h3>
                <p className="pillar-description">
                  Advanced water recycling systems achieving ≥95% water recovery rate (WRR) that capture, purify, and
                  reuse every drop of water, ensuring sustainable resource
                  management for long-term lunar habitation.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon">🌱</div>
                <h3 className="pillar-title">Aeroponic Vertical Greenhouse</h3>
                <p className="pillar-description">
                  Multi-level agricultural systems optimized for lunar gravity,
                  providing ~2,100 kCal/person/day food production and oxygen generation in a
                  controlled environment with 4 greenhouse rotation cycles.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon">🧱</div>
                <h3 className="pillar-title">ISRU & Material Recycling</h3>
                <p className="pillar-description">
                  In-Situ Resource Utilization facilities that process lunar
                  regolith and recycle plastics, metals, and glass into building materials, tools, and spare parts for habitat construction.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon">📊</div>
                <h3 className="pillar-title">Measurable KPIs</h3>
                <p className="pillar-description">
                  The simulator outputs measurable KPIs (WRR, O₂ production, battery margin, kCal/person/day) and includes downloadable datasets and calculation notebooks for reproducible results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Helper Button */}
      <button 
        className="ai-helper-button"
        onClick={() => setShowChat(!showChat)}
        title="How can I help you?"
      >
        💬
      </button>

      {/* Chat Panel */}
      {showChat && (
        <div className="homepage-chat-overlay">
          <div className="homepage-chat-panel">
            <div className="chat-header">
              <h2>AI Assistant</h2>
              <p className="chat-status">How can I help you with Artemis+?</p>
              <button 
                className="close-chat-button"
                onClick={() => setShowChat(false)}
              >
                ×
              </button>
            </div>
            
            <AssistantChat />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="landing-footer">
        <p>&copy; 2025 Team CodeCrackers. All rights reserved.</p>
      </footer>
    </div>
  );
};
