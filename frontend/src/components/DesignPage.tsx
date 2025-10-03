import React from 'react';

export const DesignPage: React.FC = () => {
  return (
    <div className="design-page">
      <div className="page-content">
        <h1 className="page-title">Design Philosophy</h1>
        <div className="design-content">
          <div className="design-section">
            <h2>Modular Architecture</h2>
            <p>
              Our lunar habitats are designed with modularity at their core, allowing for 
              flexible expansion and adaptation as mission requirements evolve.
            </p>
          </div>

          <div className="design-section">
            <h2>Sustainable Systems</h2>
            <p>
              Every system is designed for maximum efficiency and minimal waste, creating 
              a truly sustainable environment for long-term lunar habitation.
            </p>
          </div>

          <div className="design-section">
            <h2>Human-Centered Design</h2>
            <p>
              We prioritize the psychological and physical well-being of inhabitants, 
              creating spaces that feel like home while maximizing functionality.
            </p>
          </div>

          <div className="design-section">
            <h2>Technology Integration</h2>
            <p>
              Advanced AI systems work seamlessly with human operators to manage complex 
              life support and resource management systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
