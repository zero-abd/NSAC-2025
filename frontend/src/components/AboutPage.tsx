import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="page-content">
        <h1 className="page-title">About Artemis+</h1>
        
        <div className="about-hero">
          <h2 className="about-hero-title">Interactive Lunar Habitat Planner</h2>
          <p className="about-hero-subtitle">
            Artemis+ is an interactive habitat-planning and validation environment focused on long-duration 
            lunar missions at the south pole. It combines in-situ resource utilization (ISRU), aeroponic 
            vertical greenhouses, and closed-loop water systems so designers can test tradeoffs (mass, power, 
            O₂, water, food) in minutes rather than months.
          </p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h2>What We Do</h2>
            <p>
              The simulator outputs measurable KPIs (WRR, O₂ production, battery margin, kCal/person/day) 
              and includes downloadable datasets and calculation notebooks so reviewers can reproduce results. 
              Every technical detail is available for review, built from NASA mission reports and validated models.
            </p>
          </div>

          <div className="about-section">
            <h2>Core Systems</h2>
            <div className="systems-overview">
              <div className="system-item">
                <h3>ISRU Structure</h3>
                <p>3D-printed regolith vaults for radiation & micrometeoroid protection</p>
              </div>
              <div className="system-item">
                <h3>Closed-Loop Water</h3>
                <p>Polar-ice feed → purification → brine extraction → recycling (WRR target ≥95%)</p>
              </div>
              <div className="system-item">
                <h3>Vertical Greenhouse</h3>
                <p>Power-staggered day/night racks for O₂ and food production</p>
              </div>
              <div className="system-item">
                <h3>Power System</h3>
                <p>Solar arrays optimized for ridge illumination + battery storage sized for 14-day eclipse margins</p>
              </div>
              <div className="system-item">
                <h3>ECLSS Control</h3>
                <p>Integrated CO₂/O₂ balance, humidity, and thermal loads; real-time failure alerts</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Mission Scope</h2>
            <div className="mission-details">
              <div className="mission-item">
                <strong>Crew sizes:</strong> 16, 24, 32 (configurable)
              </div>
              <div className="mission-item">
                <strong>Mission durations:</strong> 30 → 180+ days (scenarios)
              </div>
              <div className="mission-item">
                <strong>Primary site:</strong> Lunar south pole (polar illumination + ice resources)
              </div>
              <div className="mission-item">
                <strong>Key constraints evaluated:</strong> mass budget, power, water, food, radiation shielding
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Technical Foundation</h2>
            <p>
              All calculations and models are based on NASA mission reports, validated through ground testing, 
              and designed for reproducibility. The system includes comprehensive failure mode analysis, 
              sensitivity testing, and validation procedures to ensure mission-critical reliability.
            </p>
          </div>

          <div className="about-section">
            <h2>Future Vision</h2>
            <p>
              We envision a future where lunar habitats serve as stepping stones for deeper space 
              exploration, providing valuable experience and resources for missions to Mars and beyond. 
              Artemis+ enables this vision through sustainable, self-sufficient habitat design that 
              minimizes Earth dependence while maximizing crew safety and mission success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
