import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="page-content">
        <h1 className="page-title">About Artemis+</h1>
        <div className="about-content">
          <p className="about-text">
            Artemis+ represents the next generation of lunar habitat design, combining cutting-edge 
            technology with sustainable living principles to create self-sufficient communities on the Moon.
          </p>
          
          <div className="about-section">
            <h2>Mission Statement</h2>
            <p>
              Our mission is to develop and demonstrate the technologies necessary for permanent 
              human presence on the Moon, focusing on sustainability, efficiency, and scalability.
            </p>
          </div>

          <div className="about-section">
            <h2>Key Technologies</h2>
            <ul>
              <li>Advanced life support systems</li>
              <li>In-situ resource utilization (ISRU)</li>
              <li>Closed-loop environmental control</li>
              <li>Modular construction techniques</li>
              <li>AI-assisted habitat management</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>Future Vision</h2>
            <p>
              We envision a future where lunar habitats serve as stepping stones for deeper space 
              exploration, providing valuable experience and resources for missions to Mars and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
