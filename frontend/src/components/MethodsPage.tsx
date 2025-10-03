import React, { useState } from 'react';

export const MethodsPage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const sections = [
    {
      id: 'crew-metabolism',
      title: 'Crew Metabolism & Baseline',
      content: {
        metabolism: '2,500 kcal/person/day nominal',
        water: 'Use NASA/ESA analogs for water per-person baseline',
        co2: 'Use NASA/ESA analogs for CO₂ per-person baseline',
        volume: '4 crew • 125 m³ total pressurized volume (≈ 25 m³/person + margin)',
        location: 'Lunar south-pole ridge (good sunlight ~80–90%)'
      }
    },
    {
      id: 'validation-verification',
      title: 'Validation & Verification',
      content: {
        massBalance: 'Run closed-loop checks for air, water, and food across 30/90/180 day windows. Save logs.',
        sensitivity: 'Greenhouse productivity ±20%, WRR ±5%, battery capacity ±30% (report on margin at each step)',
        failureScenarios: 'Pump failure, greenhouse crop failure (X% yield drop), prolonged eclipse (extra 7–14 days), regolith contamination event. Include mitigation SOPs and recovery timelines.',
        reproducibility: 'Include notebooks and raw CSVs; tests must run end-to-end within provided Jupyter notebooks.',
        groundTruthing: 'Cite NASA HERA analogs, LunaH-Map polar ice data, and any lab test reports used for binder/regolith strength.'
      }
    },
    {
      id: 'key-parameters',
      title: 'Key Parameters',
      content: {
        parameters: [
          { param: 'Crew size', value: '16 / 24 / 32', notes: 'Configurable' },
          { param: 'Target WRR', value: '95%+', notes: 'Includes brine recovery' },
          { param: 'Greenhouse yield', value: '~2,100–2,200 kCal/person/day', notes: 'System target' },
          { param: 'Panel efficiency', value: '30% baseline', notes: 'Include temperature/angle derating' },
          { param: 'Battery reserve', value: '30–50% margin', notes: 'For eclipse and contingency' },
          { param: 'Regolith vault strength', value: 'Provided in isru_materials.csv', notes: 'Outcome MPa & SF=1.5' }
        ]
      }
    },
    {
      id: 'water-math',
      title: 'Water Math (Example)',
      content: {
        wrrFormula: 'WRR (%) = recycled_liters / (recycled_liters + loss_liters) × 100',
        target: 'WRR ≥ 95% steady-state',
        greenhouseYield: 'Expected_yield_g/day per tray from plant-specific models; apply conservative harvest factor 0.85 for losses/inefficiencies',
        solar: 'Peak insolation 1350 W/m²; baseline panel eff = 30%; derating & dust factor applied per sensitivity sweep',
        regolith: 'Binder mixes and print rate based on small-scale lab results; safety factor 1.5 on structural checks',
        atmosphere: 'Mass-balance O₂ and CO₂ tracking per timestep; include crew metabolic CO₂ and plant uptake (Photosynthetic rate model used)'
      }
    },
    {
      id: 'spares-maintenance',
      title: 'Spares & Maintenance (180-day stock)',
      content: {
        spares: [
          'Spare blower ×1 (ECLSS)',
          'Pump cartridges ×2 (WRR)',
          '1× membrane replacement set (WRR)',
          'Air/water filter sets (6 months)',
          'Nutrient concentrate (6 months)',
          'Medical kit + meds (180 days)',
          'Tool kit + 3D-printer spare reels & binder feedstock'
        ]
      }
    },
    {
      id: 'recycling-procedures',
      title: 'Moon-Based Material Recycling Procedures',
      content: {
        materials: [
          {
            type: 'Plastics (PS, PP, PET, HDPE, LDPE)',
            source: 'Shredded trays, bottles, pouches, food containers',
            process: [
              'Sorting: AI + NIR spectrometer separates plastics by type',
              'Cleaning: Supercritical CO₂ bath removes residue',
              'Melting & Extrusion: Extruder heats to type-specific temperature',
              'Filament Formation: Laser micrometer monitors diameter',
              'Optional Box/Forming: Press and calendering to create sheets/boxes'
            ],
            output: 'Filament for 3D printing, food packaging, structural panels',
            automation: 'Fully automated; astronauts only load waste and remove finished spools'
          },
          {
            type: 'Metals (Aluminum, Steel, Titanium)',
            source: 'Scrap parts, cans, broken brackets',
            process: [
              'Shredding / cutting',
              'Induction or resistive furnace melting',
              'Mold casting (rods, bolts, screws, plates)',
              'Cooling and finishing'
            ],
            output: 'Support rods, bolts, screws, structural plates / shielding',
            automation: 'Microgravity-safe sealed molds; uses controlled cooling'
          },
          {
            type: 'Glass / Ceramics',
            source: 'Broken glassware, bottles, instrument panels',
            process: [
              'Shredding',
              'Melting in compact furnace',
              'Casting into tiles, plates, or protective covers',
              'Cooling and polishing'
            ],
            output: 'Protective plates for micrometeoroid shielding, reusable laboratory containers',
            automation: 'Fully sealed furnace prevents floating molten droplets'
          }
        ]
      }
    }
  ];

  return (
    <div className="methods-page">
      <div className="page-content">
        <h1 className="page-title">Methods & Assumptions</h1>
        
        <div className="methods-intro">
          <p>
            Detailed technical parameters, validation procedures, and assumptions used in the Artemis+ 
            simulation environment. All methods are based on NASA mission reports and validated models.
          </p>
        </div>

        <div className="methods-sections">
          {sections.map((section) => (
            <div key={section.id} className="method-section">
              <div className="method-header" onClick={() => toggleSection(section.id)}>
                <h2 className="method-title">{section.title}</h2>
                <div className="expand-icon">
                  {expandedSection === section.id ? '−' : '+'}
                </div>
              </div>
              
              {expandedSection === section.id && (
                <div className="method-content">
                  {section.id === 'key-parameters' ? (
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
                          {section.content.parameters.map((param, index) => (
                            <tr key={index}>
                              <td>{param.param}</td>
                              <td>{param.value}</td>
                              <td>{param.notes}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : section.id === 'recycling-procedures' ? (
                    <div className="recycling-materials">
                      {section.content.materials.map((material, index) => (
                        <div key={index} className="material-card">
                          <h3>{material.type}</h3>
                          <div className="material-details">
                            <div className="material-source">
                              <strong>Input Source:</strong> {material.source}
                            </div>
                            <div className="material-process">
                              <strong>Processing Steps:</strong>
                              <ol>
                                {material.process.map((step, stepIndex) => (
                                  <li key={stepIndex}>{step}</li>
                                ))}
                              </ol>
                            </div>
                            <div className="material-output">
                              <strong>Output & Uses:</strong> {material.output}
                            </div>
                            <div className="material-automation">
                              <strong>Automation:</strong> {material.automation}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : section.id === 'spares-maintenance' ? (
                    <div className="spares-list">
                      <ul>
                        {section.content.spares.map((spare, index) => (
                          <li key={index}>{spare}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="method-details">
                      {Object.entries(section.content).map(([key, value]) => (
                        <div key={key} className="detail-item">
                          <h4 className="detail-label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h4>
                          <p className="detail-value">{value}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="technical-parameters-table">
          <h2>Technical Parameters Table</h2>
          <div className="parameters-table-container">
            <table className="technical-table">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Units</th>
                  <th>Min Value</th>
                  <th>Max Value</th>
                  <th>Typical / Nominal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>O₂ Production (habitat)</td>
                  <td>kg/day</td>
                  <td>13.44</td>
                  <td>20.16</td>
                  <td>13.44</td>
                </tr>
                <tr>
                  <td>Water Recovery Rate (system)</td>
                  <td>%</td>
                  <td>90</td>
                  <td>99</td>
                  <td>97</td>
                </tr>
                <tr>
                  <td>Battery / Energy Margin</td>
                  <td>%</td>
                  <td>20</td>
                  <td>50</td>
                  <td>33</td>
                </tr>
                <tr>
                  <td>Food / Crew (per person)</td>
                  <td>kcal/person/day</td>
                  <td>2,800</td>
                  <td>3,200</td>
                  <td>3,000</td>
                </tr>
                <tr>
                  <td>Crew Size</td>
                  <td>persons</td>
                  <td>16</td>
                  <td>16</td>
                  <td>16</td>
                </tr>
                <tr>
                  <td>CO₂ Scrub Rate (habitat)</td>
                  <td>kg/day</td>
                  <td>13.44</td>
                  <td>20.16</td>
                  <td>13.44</td>
                </tr>
                <tr>
                  <td>Greywater Recycling (system)</td>
                  <td>%</td>
                  <td>70</td>
                  <td>98</td>
                  <td>92</td>
                </tr>
                <tr>
                  <td>Power Consumption (habitat)</td>
                  <td>kW</td>
                  <td>25</td>
                  <td>80</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>Habitat Volume</td>
                  <td>m³/person</td>
                  <td>15</td>
                  <td>30</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>Water Consumption (net, after recycling)</td>
                  <td>L/person/day</td>
                  <td>2</td>
                  <td>6</td>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mission-benefits">
          <h2>Mission Benefits</h2>
          <ul>
            <li>Reduces payload dependence on Earth</li>
            <li>Enables circular resource use onboard lunar or Mars habitats</li>
            <li>Provides critical components: tools, structural elements, protective shields, spare parts, and backup fuels</li>
            <li>Supports life support, energy generation, and food production systems</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
