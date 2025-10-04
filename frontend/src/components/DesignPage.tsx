import React from 'react';
import '../styles/DesignPage.css';

export const DesignPage: React.FC = () => {
  return (
    <div className="design-page">
      <div className="page-content">
        <h1 className="page-title">Design Philosophy</h1>
        <div className="design-content">
          <div className="documentation-reference">
            <p>
              For comprehensive technical documentation and detailed system specifications, 
              please visit our <a href="https://docs.google.com/document/d/1SzAdJUrG13BEjFGdndVeFb8ll743DiXvXLCdL5AuoD0/edit?usp=sharing" 
              target="_blank" rel="noreferrer">Design Documentation</a>.
            </p>
          </div>

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

          <div className="manufacturing-section">
            <h2>In-Situ Resource Utilization: Lunar Construction</h2>
            
            <div className="manufacturing-overview">
              <h3>Regolith-Based Construction Process</h3>
              <p>
                Our construction methodology utilizes lunar regolith for structural elements, 
                implementing low-temperature binding or sintering techniques. The process includes 
                precision milling, innovative binding solutions, and quality-controlled assembly, 
                with thermal optimization through selective oxide pigmentation.
              </p>
            </div>

            <div className="process-details">
              <div className="process-step">
                <h4>1. Regolith Processing (Comminution)</h4>
                <div className="calculation-box">
                  <h5>Specifications:</h5>
                  <ul>
                    <li>Target particle size: 45-90 µm</li>
                    <li>Bulk density: 1.5 g/cm³ (1500 kg/m³)</li>
                    <li>Energy requirement: 0.5-1.0 kWh per 100kg</li>
                  </ul>
                  <div className="calculation">
                    <h5>Volume Calculations:</h5>
                    <p>1.0 m³ processed material = 1500 kg</p>
                    <p>Energy required: 7.5-15.0 kWh per m³</p>
                  </div>
                </div>
              </div>

              <div className="process-step">
                <h4>2. Brick Manufacturing</h4>
                <div className="calculation-box">
                  <h5>Standard Brick Specifications:</h5>
                  <ul>
                    <li>Dimensions: 30cm × 15cm × 10cm</li>
                    <li>Volume: 0.0045 m³</li>
                    <li>Mass: 6.75 kg (including binder)</li>
                  </ul>
                  <div className="calculation">
                    <h5>Material Composition:</h5>
                    <ul>
                      <li>Regolith core: 6.4125 kg</li>
                      <li>Binder (5%): 0.3375 kg</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="process-step">
                <h4>3. Wall Assembly Analysis</h4>
                <div className="calculation-box">
                  <h5>Standard Wall Unit (3m × 3m × 0.3m):</h5>
                  <ul>
                    <li>Volume: 2.7 m³</li>
                    <li>Required bricks: 600 units</li>
                    <li>Total mass: 4,050 kg</li>
                  </ul>
                  <div className="calculation">
                    <h5>Resource Requirements:</h5>
                    <ul>
                      <li>Binder total: 202.5 kg</li>
                      <li>Processing energy: 20.25-40.5 kWh</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="technical-notes">
              <h4>Implementation Notes</h4>
              <ul>
                <li>High-albedo oxide pigments limited to 2-5mm outer shell for thermal efficiency</li>
                <li>Binder percentage represents optimal balance between structural integrity and resource efficiency</li>
                <li>Processing energy calculations include safety margins for variable regolith composition</li>
              </ul>
            </div>
          </div>

          <div className="thermal-optimization-section">
            <h2>Thermal Optimization: Shell Design</h2>
            
            <div className="concept-overview">
              <h3>Regolith Brick Thermal Enhancement</h3>
              <p>
                Our innovative approach incorporates a thin outer shell (2-5mm) of regolith mixed with 
                white oxide pigments (TiO₂ or Al₂O₃), optimizing thermal properties while minimizing 
                imported materials.
              </p>
            </div>

            <div className="calculations">
              <div className="surface-area">
                <h4>Surface Area Calculations</h4>
                <div className="calculation-box">
                  <h5>Per Brick Face Areas:</h5>
                  <ul>
                    <li>Length × Width (lw): 0.30m × 0.15m = 0.045 m²</li>
                    <li>Length × Height (lh): 0.30m × 0.10m = 0.030 m²</li>
                    <li>Width × Height (wh): 0.15m × 0.10m = 0.015 m²</li>
                    <li>Total Single Side: 0.090 m²</li>
                    <li>Total Surface Area: 0.180 m²</li>
                  </ul>
                </div>
              </div>

              <div className="shell-analysis">
                <h4>Shell Composition Analysis</h4>
                <div className="calculation-box">
                  <h5>2mm Shell Configuration:</h5>
                  <ul>
                    <li>Volume: 0.00036 m³</li>
                    <li>Mass: 0.54 kg</li>
                    <li>Pigment (0.5%): 2.7g</li>
                    <li>Pigment (5%): 27g</li>
                  </ul>

                  <h5>5mm Shell Configuration:</h5>
                  <ul>
                    <li>Volume: 0.00090 m³</li>
                    <li>Mass: 1.35 kg</li>
                    <li>Pigment (0.5%): 6.75g</li>
                    <li>Pigment (5%): 67.5g</li>
                  </ul>
                </div>
              </div>

              <div className="efficiency-notes">
                <h4>Design Efficiency</h4>
                <ul>
                  <li>Shell mass represents only 8-20% of total brick mass</li>
                  <li>Minimal pigment requirements (2.7g - 67.5g per brick)</li>
                  <li>Negligible impact on launch mass requirements</li>
                  <li>Significant improvement in thermal performance</li>
                </ul>
              </div>
            </div>

            <div className="reference-documents">
              <h4>Technical References</h4>
              <ul>
                <li><a href="https://ntrs.nasa.gov/citations/20100024178" target="_blank" rel="noreferrer">Lunar Construction Methods</a></li>
                <li><a href="https://data.nist.gov/od/id/mds2-3043" target="_blank" rel="noreferrer">Regolith Properties Database</a></li>
                <li><a href="https://ntrs.nasa.gov/citations/20200000920" target="_blank" rel="noreferrer">Thermal Management Study</a></li>
                <li><a href="https://ntrs.nasa.gov/citations/20220013669" target="_blank" rel="noreferrer">Habitat Layout Guidelines</a></li>
              </ul>
            </div>
          </div>

          <div className="greenhouse-system-section">
            <h2>Advanced Biogenerative Life Support System</h2>
            
            <div className="system-overview">
              <h3>Continuous Life Support Integration</h3>
              <p>
                Our greenhouse modules operate on a staggered day/night cycle, optimizing O₂ production, 
                food availability, and power consumption. This innovative approach ensures continuous 
                life support while managing resource utilization through intelligent phase shifting.
              </p>
            </div>

            <div className="layer-architecture">
              <h3>Six-Layer Protection & Control Architecture</h3>
              
              <div className="layer-details">
                <div className="layer-card">
                  <h4>1. External Protective Layer</h4>
                  <ul>
                    <li>Purpose: Micrometeoroid, UV, and radiation protection</li>
                    <li>Materials: Radiation-resistant polymers, polycarbonate</li>
                    <li>Feature: Multi-layer impact and radiation shielding</li>
                  </ul>
                </div>

                <div className="layer-card">
                  <h4>2. Thermal Insulation Layer</h4>
                  <ul>
                    <li>Purpose: Temperature stability management</li>
                    <li>Materials: Aerogel panels, MLI systems</li>
                    <li>Feature: Energy-efficient thermal regulation</li>
                  </ul>
                </div>

                <div className="layer-card">
                  <h4>3. Structural Layer</h4>
                  <ul>
                    <li>Purpose: Framework and support</li>
                    <li>Materials: Lightweight alloys, composite structures</li>
                    <li>Feature: Modular, expandable design</li>
                  </ul>
                </div>

                <div className="layer-card">
                  <h4>4. Growth & Plant Layer</h4>
                  <ul>
                    <li>Purpose: Food and biomass production</li>
                    <li>Systems: Hydroponic/aeroponic integration</li>
                    <li>Feature: Optimized LED lighting and nutrient delivery</li>
                  </ul>
                </div>

                <div className="layer-card">
                  <h4>5. Environmental Control Layer</h4>
                  <ul>
                    <li>Purpose: Atmospheric and growth condition management</li>
                    <li>Systems: Climate control, gas management</li>
                    <li>Feature: ECLSS integration for resource sharing</li>
                  </ul>
                </div>

                <div className="layer-card">
                  <h4>6. Utility & Maintenance Layer</h4>
                  <ul>
                    <li>Purpose: System support and maintenance</li>
                    <li>Components: Water systems, robotics, sensors</li>
                    <li>Feature: Automated maintenance capabilities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="operational-details">
              <h3>Operational Configuration</h3>
              <div className="details-card">
                <h4>16-Crew System Specifications</h4>
                <ul>
                  <li>Total Units: 4 greenhouse modules</li>
                  <li>Active Units: 2 day mode + 2 night mode</li>
                  <li>Power Draw: ~2 kW (reduced from 4 kW)</li>
                  <li>Cycle Duration: 12-24 hour phase shifts</li>
                </ul>
              </div>
            </div>

            <div className="system-benefits">
              <h4>Key Advantages</h4>
              <ul>
                <li>Continuous oxygen generation through phase-shifted operation</li>
                <li>50% reduction in peak power requirements</li>
                <li>Optimized CO₂ recycling between day/night modules</li>
                <li>Built-in redundancy for system resilience</li>
              </ul>
            </div>

            <div className="reference-documents">
              <h4>Technical References</h4>
              <ul>
                <li><a href="https://ntrs.nasa.gov/citations/19850021219" target="_blank" rel="noreferrer">Controlled Ecological Life Support Systems</a></li>
                <li><a href="https://ntrs.nasa.gov/citations/19950002541" target="_blank" rel="noreferrer">Bioregenerative Life Support Research</a></li>
                <li><a href="https://www.nasa.gov/science-research/lunar-martian-greenhouses" target="_blank" rel="noreferrer">NASA Lunar/Martian Greenhouse Studies</a></li>
              </ul>
            </div>
          </div>

          <div className="power-systems-section">
            <h2>Advanced Power Storage & Distribution</h2>
            
            <div className="battery-module">
              <h3>Lunar Battery Module Architecture</h3>
              <p>
                Our modular lithium energy system provides 150-300 kWh capacity for 48-72 hours 
                of habitat autonomy. The design incorporates advanced thermal management, impact protection, 
                and intelligent power distribution systems.
              </p>

              <div className="module-components">
                <div className="component-card">
                  <h4>1. Protective Architecture</h4>
                  <ul>
                    <li>Armored alloy shell with multi-layer insulation</li>
                    <li>Micrometeoroid and thermal shielding</li>
                    <li>Optional regolith berm protection</li>
                  </ul>
                </div>

                <div className="component-card">
                  <h4>2. Cell Technology</h4>
                  <ul>
                    <li>High-energy NMC/NCA chemistry</li>
                    <li>Enhanced silicon-graphite anode</li>
                    <li>Radiation-rated separators</li>
                    <li>Gel/solid-state electrolyte systems</li>
                  </ul>
                </div>

                <div className="component-card">
                  <h4>3. Thermal Management</h4>
                  <ul>
                    <li>Operating range: 0-25°C</li>
                    <li>Active heating and cooling systems</li>
                    <li>Phase-change material integration</li>
                    <li>Multi-layer thermal protection</li>
                  </ul>
                </div>

                <div className="component-card">
                  <h4>4. Battery Management System</h4>
                  <ul>
                    <li>Real-time cell monitoring</li>
                    <li>Advanced balancing algorithms</li>
                    <li>Fault detection and isolation</li>
                    <li>Remote command capabilities</li>
                  </ul>
                </div>
              </div>

              <div className="performance-specs">
                <h4>System Specifications</h4>
                <div className="specs-grid">
                  <div className="spec-item">
                    <h5>Energy Metrics</h5>
                    <ul>
                      <li>Capacity: 150-300 kWh</li>
                      <li>Energy Density: ~200 Wh/kg</li>
                      <li>DoD: 80% usable capacity</li>
                      <li>Cycle Life: 3000 cycles</li>
                    </ul>
                  </div>
                  <div className="spec-item">
                    <h5>Safety Features</h5>
                    <ul>
                      <li>Automated fault isolation</li>
                      <li>Emergency load shedding</li>
                      <li>Inert gas purge system</li>
                      <li>N+1 redundancy design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="maintenance-systems">
              <h3>Solar Array Maintenance: LRV-Class Service Rover</h3>
              <div className="rover-systems">
                <div className="cleaning-kit">
                  <h4>Hybrid Cleaning Technology</h4>
                  <ul>
                    <li>Electrodynamic Dust Shield (EDS)</li>
                    <li>Charge-repel "Moon Duster" beam</li>
                    <li>Vibrational particle removal</li>
                    <li>High-resolution diagnostic imaging</li>
                  </ul>
                </div>

                <div className="operational-sequence">
                  <h4>Maintenance Protocol</h4>
                  <ol>
                    <li>Autonomous positioning and docking</li>
                    <li>EDS activation for bulk cleaning</li>
                    <li>Targeted Moon Duster application</li>
                    <li>Resonant vibration sweep</li>
                    <li>Performance verification and logging</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
