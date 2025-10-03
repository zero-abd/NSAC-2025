import React from 'react';

export const MissionPage: React.FC = () => {
  return (
    <div className="mission-page">
      <div className="page-content">
        <h1 className="page-title">Mission Scope</h1>
        
        <div className="mission-overview">
          <p className="mission-description">
            Artemis+ is an interactive habitat-planning and validation environment focused on long-duration lunar missions at the south pole. It combines in-situ resource utilization (ISRU), aeroponic vertical greenhouses, and closed-loop water systems so designers can test tradeoffs (mass, power, O₂, water, food) in minutes rather than months.
          </p>
        </div>

        <div className="mission-specs">
          <div className="spec-grid">
            <div className="spec-card">
              <h3>Crew Sizes</h3>
              <div className="spec-values">
                <span className="spec-value">16</span>
                <span className="spec-value">24</span>
                <span className="spec-value">32</span>
              </div>
              <p className="spec-note">Configurable</p>
            </div>

            <div className="spec-card">
              <h3>Mission Durations</h3>
              <div className="spec-range">
                <span className="spec-value">30</span>
                <span className="spec-arrow">→</span>
                <span className="spec-value">180+</span>
              </div>
              <p className="spec-note">Days (scenarios)</p>
            </div>

            <div className="spec-card">
              <h3>Primary Site</h3>
              <div className="spec-location">
                <span className="spec-value">Lunar South Pole</span>
              </div>
              <p className="spec-note">Polar illumination + ice resources</p>
            </div>

            <div className="spec-card">
              <h3>Key Constraints</h3>
              <div className="spec-list">
                <span className="constraint">Mass budget</span>
                <span className="constraint">Power</span>
                <span className="constraint">Water</span>
                <span className="constraint">Food</span>
                <span className="constraint">Radiation shielding</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mission-outputs">
          <h2>Simulator Outputs</h2>
          <p className="outputs-description">
            The simulator outputs measurable KPIs and includes downloadable datasets and calculation notebooks so reviewers can reproduce results.
          </p>
          <div className="kpi-grid">
            <div className="kpi-item">
              <span className="kpi-label">Water Recovery Rate (WRR)</span>
              <span className="kpi-target">≥95%</span>
            </div>
            <div className="kpi-item">
              <span className="kpi-label">O₂ Production</span>
              <span className="kpi-target">~3.6 kg/day (4 crew)</span>
            </div>
            <div className="kpi-item">
              <span className="kpi-label">Battery Margin</span>
              <span className="kpi-target">30-50%</span>
            </div>
            <div className="kpi-item">
              <span className="kpi-label">Food Production</span>
              <span className="kpi-target">2,100 kCal/person/day</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
