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
            <h2>Baseline Configuration</h2>
            <div className="baseline-specs">
              <div className="spec-card">
                <h3>Crew Parameters</h3>
                <ul>
                  <li>Metabolism: 2,500 kcal/person/day nominal</li>
                  <li>Base Crew: 4 personnel</li>
                  <li>Volume: 125 m³ pressurized (≈25 m³/person)</li>
                  <li>Location: Lunar south-pole ridge (80-90% illumination)</li>
                </ul>
              </div>
            </div>
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

          <div className="about-section technical-details">
            <h2>Technical Details</h2>
            <div className="technical-grid">
              <div className="technical-card">
                <h3>ECLSS Systems</h3>
                <div className="tech-specs">
                  <h4>System Specifications</h4>
                  <ul>
                    <li>Size: ~10 m³ rack area</li>
                    <li>Mass: 180-250 kg</li>
                    <li>Power: 600-900W nominal, 1.2kW peak</li>
                    <li>O₂ Production: 0.9 kg/person/day</li>
                  </ul>
                </div>

                <div className="greenhouse-management">
                  <h4>Greenhouse Airflow Management</h4>
                  <div className="greenhouse-modes">
                    <div className="mode-card">
                      <h5>Day Mode Operations</h5>
                      <p>Two greenhouses actively:</p>
                      <ul>
                        <li>Process crew CO₂ output</li>
                        <li>Generate O₂ through photosynthesis</li>
                        <li>Supply fresh oxygen to habitat</li>
                      </ul>
                    </div>
                    <div className="mode-card">
                      <h5>Night Mode Operations</h5>
                      <p>Two greenhouses in rest cycle:</p>
                      <ul>
                        <li>CO₂ scrubbing systems active</li>
                        <li>Supplemental O₂ from storage</li>
                        <li>Automated environment control</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="system-controls">
                  <h4>Environmental Controls</h4>
                  <ul>
                    <li>Real-time CO₂ monitoring and management</li>
                    <li>Smart valve distribution system</li>
                    <li>Automated lighting cycles (LED/Heliostat)</li>
                    <li>Emergency oxygen distribution network</li>
                    <li>Redundant scrubber channels (A/B)</li>
                  </ul>
                </div>
              </div>

              <div className="technical-card">
                <h3>Water Recovery System (WRR)</h3>
                <div className="tech-specs">
                  <h4>System Specifications</h4>
                  <ul>
                    <li>Volume: 0.5-1.0 m³ tanks</li>
                    <li>Mass: 120-180 kg equipment</li>
                    <li>Power: 250-500 W</li>
                    <li>Recovery Rate: ≥95% (target), 98% (aspirational)</li>
                  </ul>
                </div>
                <div className="maintenance">
                  <h4>Maintenance & Redundancy</h4>
                  <ul>
                    <li>Spare membranes/filters for 180 days</li>
                    <li>Hot-flush/backwash capabilities</li>
                    <li>Backup pumps and emergency protocols</li>
                    <li>30-day sustained performance testing</li>
                  </ul>
                </div>
              </div>

              <div className="technical-card">
                <h3>Food Production & Greenhouse</h3>
                <div className="tech-specs">
                  <h4>System Specifications</h4>
                  <ul>
                    <li>Mass: 300-600 kg</li>
                    <li>Power: ~1.0 kW steady (lights/pumps)</li>
                    <li>Target: 2,100 kCal/person/day</li>
                    <li>Design Range: 1,500-2,200 kCal with reserves</li>
                  </ul>
                </div>
                <div className="resilience">
                  <h4>System Resilience</h4>
                  <ul>
                    <li>Staggered crop cycles</li>
                    <li>Backup lighting systems</li>
                    <li>Emergency seed reserves</li>
                    <li>≥85% yield validation testing</li>
                  </ul>
                </div>
              </div>

              <div className="technical-card">
                <h3>Power Systems</h3>
                <div className="tech-specs">
                  <h4>Solar Array Specifications</h4>
                  <ul>
                    <li>Solar Constant: 1361 W/m²</li>
                    <li>Panel Efficiency: 30% (~405 W/m²)</li>
                    <li>Array Area: 7.5-8 m² effective</li>
                    <li>Base Load: 2.5-3.5 kW continuous</li>
                    <li>Peak Load: ~5 kW</li>
                  </ul>
                </div>
                <div className="battery-specs">
                  <h4>Energy Storage</h4>
                  <ul>
                    <li>Capacity: 150-300 kWh</li>
                    <li>Autonomy: 48-72 hours minimum</li>
                    <li>Multiple PV strings & N+1 inverters</li>
                    <li>20% SoC worst-case testing</li>
                  </ul>
                </div>
              </div>

              <div className="technical-card">
                <h3>Support Systems</h3>
                <div className="support-grid">
                  <div className="support-item">
                    <h4>Hygiene & Waste</h4>
                    <ul>
                      <li>Volume: ~10 m³</li>
                      <li>Mass: 80-140 kg</li>
                      <li>Power: 100-300 W</li>
                    </ul>
                  </div>
                  <div className="support-item">
                    <h4>Medical Facilities</h4>
                    <ul>
                      <li>Volume: ~10 m³</li>
                      <li>180-day medical supplies</li>
                      <li>Telemedicine capabilities</li>
                    </ul>
                  </div>
                  <div className="support-item">
                    <h4>Exercise & Mental Health</h4>
                    <ul>
                      <li>Volume: ~15 m³</li>
                      <li>Power: 100-400 W (active)</li>
                      <li>45 min/person/day capacity</li>
                    </ul>
                  </div>
                  <div className="support-item">
                    <h4>EVA Systems</h4>
                    <ul>
                      <li>Airlock: ~6 m³</li>
                      <li>3 suits per 4 crew</li>
                      <li>Charging: 0.5-1.2 kW/cycle</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="technical-card">
                <h3>Communications & Avionics</h3>
                <div className="tech-specs">
                  <ul>
                    <li>Mass: 30-80 kg</li>
                    <li>Power: 50-300 W</li>
                    <li>Dual communication paths</li>
                    <li>Orbital relay capabilities</li>
                  </ul>
                  <h4>Testing Protocol</h4>
                  <ul>
                    <li>Telemetry window validation</li>
                    <li>Packet-loss monitoring</li>
                    <li>Latency performance checks</li>
                  </ul>
                </div>
              </div>

              <div className="technical-card">
                <h3>Resource Recycling Station</h3>
                <div className="tech-specs">
                  <h4>System Specifications</h4>
                  <ul>
                    <li>Mass: 150-400 kg</li>
                    <li>Power: 300-1,200 W (throughput dependent)</li>
                  </ul>
                </div>

                <div className="recycling-process">
                  <h4>Material Processing</h4>
                  <div className="process-steps">
                    <div className="step">
                      <h5>Collection & Sorting</h5>
                      <ul>
                        <li>AI + NIR sensors for plastics</li>
                        <li>Manual categorization for metals/glass</li>
                        <li>CO₂ bath cleaning system</li>
                      </ul>
                    </div>
                    <div className="step">
                      <h5>Processing Methods</h5>
                      <ul>
                        <li>Plastics: Extrusion & pyrolysis</li>
                        <li>Metals: Microgravity casting</li>
                        <li>Glass: Protective tile production</li>
                      </ul>
                    </div>
                    <div className="step">
                      <h5>Quality Control</h5>
                      <ul>
                        <li>AI-driven dimension checking</li>
                        <li>Automated process optimization</li>
                        <li>Material property verification</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="technical-card">
                <h3>System Maintenance & Contingency</h3>
                <div className="maintenance-specs">
                  <h4>180-Day Critical Spares</h4>
                  <ul>
                    <li>ECLSS: Spare blower, filter sets</li>
                    <li>WRR: Pump cartridges (×2), membrane set</li>
                    <li>Medical: Full 180-day supply kit</li>
                    <li>Production: 3D-printer supplies, binder stock</li>
                  </ul>
                </div>

                <div className="emergency-procedures">
                  <h4>Critical Failure Responses</h4>
                  <ul>
                    <li>Power Loss: Safe mode activation, minimal life support</li>
                    <li>WRR Failure: Potable reserves, conservation protocol</li>
                    <li>ECLSS Issues: Backup scrubbers, reduced activity</li>
                    <li>Crop System: Emergency rations, reseeding protocol</li>
                    <li>EVA Systems: Mission postponement, equipment check</li>
                    <li>Communications: Relay switchover, local logging</li>
                  </ul>
                </div>

                <div className="validation-procedures">
                  <h4>System Validation</h4>
                  <ul>
                    <li>30/90/180-day closed-loop verification</li>
                    <li>Sensitivity analysis (±20-30% ranges)</li>
                    <li>Failure scenario simulations</li>
                    <li>Ground-truth validation against NASA data</li>
                  </ul>
                </div>
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

          <div className="about-section key-parameters">
            <h2>Key Parameters</h2>
            <div className="parameters-table">
              <table>
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Value</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Crew size</td>
                    <td>16 / 24 / 32</td>
                    <td>Configurable</td>
                  </tr>
                  <tr>
                    <td>Target WRR</td>
                    <td>95%+</td>
                    <td>Includes brine recovery</td>
                  </tr>
                  <tr>
                    <td>Greenhouse yield</td>
                    <td>~2,100–2,200 kCal/person/day</td>
                    <td>Depends on crop mix & area</td>
                  </tr>
                  <tr>
                    <td>Panel efficiency</td>
                    <td>30% baseline</td>
                    <td>Include temperature/angle derating</td>
                  </tr>
                  <tr>
                    <td>Battery reserve</td>
                    <td>30–50% margin</td>
                    <td>For eclipse and contingency</td>
                  </tr>
                  <tr>
                    <td>Regolith vault strength</td>
                    <td>--</td>
                    <td>Outcome MPa & SF=1.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
