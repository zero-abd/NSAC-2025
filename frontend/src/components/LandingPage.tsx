import React from 'react';

interface LandingPageProps {
  onNavigateToSimulator?: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigateToSimulator }) => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Lunar Habitat — <span className="hero-accent">Artemis+</span>
            </h1>
            <p className="hero-subtitle">
              Designing sustainable lunar habitats — greenhouses, ISRU, and closed-loop water systems.
            </p>
            <button 
              className="cta-button"
              onClick={onNavigateToSimulator}
            >
              View Simulator
            </button>
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
                  Advanced water recycling systems that capture, purify, and reuse every drop of water, 
                  ensuring sustainable resource management for long-term lunar habitation.
                </p>
              </div>
              
              <div className="pillar-card">
                <div className="pillar-icon">🌱</div>
                <h3 className="pillar-title">Vertical Greenhouse</h3>
                <p className="pillar-description">
                  Multi-level agricultural systems optimized for lunar gravity, providing fresh food 
                  production and oxygen generation in a controlled environment.
                </p>
              </div>
              
              <div className="pillar-card">
                <div className="pillar-icon">🧱</div>
                <h3 className="pillar-title">ISRU Structure</h3>
                <p className="pillar-description">
                  In-Situ Resource Utilization facilities that process lunar regolith into building 
                  materials, fuel, and other essential resources for habitat construction.
                </p>
              </div>
              
              <div className="pillar-card">
                <div className="pillar-icon">📈</div>
                <h3 className="pillar-title">Scalable Design</h3>
                <p className="pillar-description">
                  Modular architecture that grows with mission requirements, from initial outposts 
                  to permanent settlements supporting hundreds of inhabitants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="landing-footer">
        <p>&copy; 2025 Team CodeCrackers. All rights reserved.</p>
      </footer>
    </div>
  );
};
