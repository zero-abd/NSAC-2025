import React, { useState } from 'react';

export const SystemsPage: React.FC = () => {
  const [expandedSystem, setExpandedSystem] = useState<string | null>(null);

  const toggleSystem = (systemId: string) => {
    setExpandedSystem(expandedSystem === systemId ? null : systemId);
  };

  const systems = [
    {
      id: 'eclss',
      title: 'Air & Life Support (ECLSS)',
      icon: '🫁',
      summary: 'Keeps people breathing - removes CO₂, controls humidity, keeps cabin pressure and trace contaminants in check.',
      details: {
        size: '~10 m³ rack area',
        mass: '~180–250 kg',
        power: '~600–900 W normally, up to ~1.2 kW during regeneration cycles',
        keyNumber: '~0.9 kg O₂ per person per day → ~3.6 kg/day for 4 people',
        backups: 'Two scrubber channels (A/B), spare blower, emergency O₂ bottles',
        airflow: {
          concept: '4 greenhouses - 2 in day mode (light), 2 in night mode (dark), then swap',
          co2Flow: 'CO₂ from humans → active greenhouses → plants eat CO₂ → O₂ back to habitat',
          nightMode: 'Sleeping plants release CO₂ → scrubbers clean air → O₂ from tanks',
          control: 'Sensors check air, fans send CO₂ to plants/scrubbers, valves control flow'
        },
        watchFor: 'Clogged sorbents, fan failure, sensor drift',
        fixes: 'Swap to backup channel, hot-swap blower, recalibrate sensors',
        test: 'Inject CO₂ and confirm recovery time; run 30-day closed-loop air balance'
      }
    },
    {
      id: 'wrr',
      title: 'Water Recovery (WRR)',
      icon: '💧',
      summary: 'Stops you running out of water - captures urine/greywater/condensate, purifies it, concentrates brine for reuse.',
      details: {
        footprint: '~0.5–1.0 m³ tanks',
        mass: '~120–180 kg equipment',
        power: '~250–500 W',
        target: '≥95% water recovery (mission requirement; 98% aspirational goal)',
        spares: 'Membranes/filters; one full membrane replacement + cleaning spares for 180 days',
        watchFor: 'Membrane fouling and pump issues',
        fixes: 'Hot-flush/backwash, switch to spare pumps, ration potable water short-term',
        test: 'Show steady ≥95% recovery for 30 days; weekly micro checks',
        formula: 'WRR (%) = recycled_liters / (recycled_liters + loss_liters) × 100'
      }
    },
    {
      id: 'greenhouse',
      title: 'Food & Plants (Vertical Greenhouse)',
      icon: '🌱',
      summary: 'Grows fresh food, helps balance O₂/CO₂ - one compact aeroponic module for 4 people.',
      details: {
        mass: '300–600 kg',
        power: '~1.0 kW steady for lights/pumps',
        goal: '~2,100 kCal/person/day when combined with stored food',
        crops: [
          { name: 'Wheat (grain)', days: '90–120', yield: '25 g/m²/day', calories: '680 kcal/day', nasa: 'Yes' },
          { name: 'Corn (dwarf)', days: '90–120', yield: '100 g/m²/day', calories: '2,920 kcal/day', nasa: 'Partial' },
          { name: 'Potato (tuber)', days: '90–120', yield: '37.5 g/m²/day', calories: '231 kcal/day', nasa: 'Yes' },
          { name: 'Soybean', days: '90–120', yield: '20 g/m²/day', calories: '713 kcal/day', nasa: 'Yes' },
          { name: 'Microgreens', days: '7–14', yield: '200 g/m²/day', calories: '400 kcal/day', nasa: 'Yes' }
        ],
        resilience: 'Stagger crop cycles, backup lights, seed reserves. If crops fail, use emergency rations.',
        test: '30-day run hitting ≥85% of expected yield'
      }
    },
    {
      id: 'power',
      title: 'Power & Batteries',
      icon: '⚡',
      summary: 'Solar arrays optimized for ridge illumination + battery storage sized for 14-day eclipse margins.',
      details: {
        solar: 'Solar constant ≈ 1361 W/m²; ~80–90% illumination for south-pole ridge sites',
        houseLoad: '~2.5–3.5 kW continuous; peaks ~5 kW',
        solarArea: '~7.5–8 m² effective area for ~3 kW baseline (30% panel efficiency)',
        battery: '150–300 kWh depending on margins; 48–72 hours autonomy locally',
        redundancy: 'Multiple PV strings, N+1 inverters, full BMS',
        test: 'Simulate night/eclipse cycles; discharge to 20% SoC worst-case',
        powerBreakdown: [
          { system: 'ECLSS', continuous: '600–900 W', peak: 'up to 1,200 W' },
          { system: 'Water Recovery', continuous: '250–500 W', peak: '500–1,000 W' },
          { system: 'Greenhouse', continuous: '800–1,200 W', peak: '1,500–2,000 W' },
          { system: 'Comms & Avionics', continuous: '50–300 W', peak: '500–1,000 W' },
          { system: 'Medical/Labs', continuous: '50–400 W', peak: '500 W' },
          { system: 'Exercise', continuous: '100–400 W', peak: '400 W' },
          { system: 'EVA Charging', continuous: '500–1,200 W', peak: '1,200 W' },
          { system: 'Habitat', continuous: '200–400 W', peak: '600 W' }
        ]
      }
    },
    {
      id: 'hygiene',
      title: 'Hygiene & Waste',
      icon: '🚿',
      summary: 'Toilets, showers, solids drying/compaction, route greywater to WRR.',
      details: {
        volume: '~10 m³',
        mass: '80–140 kg',
        power: '100–300 W',
        plan: 'Drying/compacting solids, quarantine for failed streams, emergency portable toilet',
        test: '30-day handling demo showing safe containment and solids reduction'
      }
    },
    {
      id: 'medical',
      title: 'Medical & Health',
      icon: '🏥',
      summary: 'The "don\'t die" corner - basic trauma, meds for 180 days, telemedicine kit.',
      details: {
        volume: '~10 m³ (fold-out surgical bed + cabinet)',
        kit: 'Basic trauma, meds for 180 days, telemedicine kit',
        test: 'Run a medical drill and inventory audit'
      }
    },
    {
      id: 'exercise',
      title: 'Exercise & Mental Health',
      icon: '🏃',
      summary: 'People need to move and not go crazy - compact treadmill, resistive unit, VR/mental health station.',
      details: {
        volume: '~15 m³',
        gear: 'Compact treadmill, resistive unit, VR/mental health station',
        power: '100–400 W when in use',
        rule: '~45 min/day exercise per person equivalent'
      }
    },
    {
      id: 'eva',
      title: 'EVA & Suits',
      icon: '🚀',
      summary: 'Getting outside without dying - airlock, suits, charging systems.',
      details: {
        airlock: 'Part of corridors; airlock volume included (≈6 m³)',
        suits: 'At least 2 suits + 1 spare for 4 people (depends on EVA ops)',
        power: '~0.5–1.2 kW per charge cycle',
        test: 'Suit pressure/leak checks; run 3 EVAs in sequence without critical failure'
      }
    },
    {
      id: 'comms',
      title: 'Comms & Avionics',
      icon: '📡',
      summary: 'Stay connected - dual comm paths, relay capability via orbiters.',
      details: {
        mass: '30–80 kg',
        power: '50–300 W',
        setup: 'Dual comm paths, relay capability via orbiters',
        test: 'Telemetry windows, packet-loss & latency checks'
      }
    },
    {
      id: 'recycling',
      title: 'Waste-to-Resource / Maker Station',
      icon: '♻️',
      summary: 'Turn trash into parts - recycle plastics to filament, extract salts from brine for binder feedstock.',
      details: {
        mass: '150–400 kg',
        power: '300–1,200 W depending on throughput',
        processes: [
          { material: 'Plastics', output: 'Filament for 3D printing, fuel, chemical precursors' },
          { material: 'Metals', output: 'Support rods, bolts, screws, structural plates' },
          { material: 'Glass', output: 'Protective plates, labware, shielding' }
        ],
        test: 'Lab run showing kg→filament conversion and binder yield'
      }
    }
  ];

  return (
    <div className="systems-page">
      <div className="page-content">
        <h1 className="page-title">Core Systems</h1>
        
        <div className="systems-intro">
          <p>
            Artemis+ integrates 10 critical systems for sustainable lunar habitation. Each system is designed 
            with redundancy, maintainability, and mission-critical performance in mind.
          </p>
        </div>

        <div className="systems-grid">
          {systems.map((system) => (
            <div key={system.id} className="system-card">
              <div className="system-header" onClick={() => toggleSystem(system.id)}>
                <div className="system-icon">{system.icon}</div>
                <div className="system-title-section">
                  <h3 className="system-title">{system.title}</h3>
                  <p className="system-summary">{system.summary}</p>
                </div>
                <div className="expand-icon">
                  {expandedSystem === system.id ? '−' : '+'}
                </div>
              </div>
              
              {expandedSystem === system.id && (
                <div className="system-details">
                  <div className="detail-grid">
                    {Object.entries(system.details).map(([key, value]) => (
                      <div key={key} className="detail-item">
                        <h4 className="detail-label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h4>
                        {Array.isArray(value) ? (
                          <div className="detail-list">
                            {value.map((item, index) => (
                              <div key={index} className="list-item">
                                {typeof item === 'object' ? (
                                  <div className="object-item">
                                    {Object.entries(item).map(([prop, val]) => (
                                      <span key={prop} className="property">
                                        <strong>{prop}:</strong> {val}
                                      </span>
                                    ))}
                                  </div>
                                ) : (
                                  <span>{item}</span>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : typeof value === 'object' && value !== null ? (
                          <div className="detail-object">
                            {Object.entries(value).map(([prop, val]) => (
                              <div key={prop} className="object-property">
                                <strong>{prop}:</strong> {val}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="detail-value">{value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="failure-modes">
          <h2>Top Failure Modes & Quick Fixes</h2>
          <div className="failure-grid">
            <div className="failure-item">
              <h4>Power Loss</h4>
              <p>Go to safe mode — shut greenhouse & exercise, run emergency life support on battery + stored O₂.</p>
            </div>
            <div className="failure-item">
              <h4>WRR Fail</h4>
              <p>Switch to potable reserve, ration, hot-flush membranes.</p>
            </div>
            <div className="failure-item">
              <h4>CO₂ Scrubber Fail</h4>
              <p>Switch to backup scrubber, increase plant O₂ duty, reduce strenuous activity.</p>
            </div>
            <div className="failure-item">
              <h4>Crop Collapse</h4>
              <p>Use emergency rations, re-seed quarantine racks.</p>
            </div>
            <div className="failure-item">
              <h4>Suit/Airlock Fail</h4>
              <p>Cancel EVAs, repair or swap suits, inspect seals.</p>
            </div>
            <div className="failure-item">
              <h4>Comms Outage</h4>
              <p>Buffer telemetry and try relays; keep mission logs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
