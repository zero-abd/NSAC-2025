import React from 'react';
import '../styles/DataPage.css';

export const DataPage: React.FC = () => {
  return (
    <div className="data-page">
      <div className="page-content">
        <h1 className="page-title">Data</h1>

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

        <div className="sources">
          <h2>Sources</h2>
          <ul>
            <li><a href="https://www.nasa.gov" target="_blank" rel="noreferrer">NASA Mission Reports</a></li>
            <li><a href="https://www.esa.int" target="_blank" rel="noreferrer">ESA Technical Documents</a></li>
            <li><a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noreferrer">Crew Metabolism Literature (PubMed)</a></li>
            <li><a href="https://www.osti.gov/" target="_blank" rel="noreferrer">ECLSS / WRR Studies (OSTI)</a></li>
          </ul>
        </div>

        <div className="critical-systems-data">
          <h2>Critical Systems Performance Data</h2>

          <div className="system-section food-nutrition">
            <h3>Food Production & Nutrition Systems</h3>
            <div className="system-description">
              <p>
                Each astronaut receives ~3,000 kcal/day, meeting NASA's recommended intake for health and performance. 
                Diets are balanced with carbohydrates, proteins, fats, and essential micronutrients, with menu variety 
                to prevent fatigue. Crops like wheat, corn, potatoes, and microgreens are grown aeroponically using 
                recycled water, ensuring sustainable food production.
              </p>
              <p>
                Users can easily experiment the conditions of harvesting foods on Moon by doing the Greenhouse Mission 
                of our simulation.
              </p>
            </div>

            <div className="reference-documents">
              <h3><a href="https://docs.google.com/spreadsheets/d/1tDxuhRpVS8bi0BfDlGXndZ4CT7dj8DtnaLu8dr0sybU/edit?gid=227124781#gid=227124781">Review The Data By Clicking Here</a></h3>
              <h4>Used NASA Datasets & Resources</h4>
              <ul>
                <li><a href="https://ntrs.nasa.gov/citations/20220014472" target="_blank" rel="noreferrer">Developing Bioregenerative Food Systems</a></li>
                <li><a href="https://nasa.gov/wp-content/uploads/2023/03/veggie-fact-sheet-508.pdf" target="_blank" rel="noreferrer">Veggie Fact Sheet</a></li>
                <li><a href="https://ntrs.nasa.gov/api/citations/20170007809/downloads/20170007809.pdf" target="_blank" rel="noreferrer">Advanced Plant Habitat (APH) Report</a></li>
                <li><a href="https://ntrs.nasa.gov/search?q=CELSS" target="_blank" rel="noreferrer">CELSS / BIO‑PLEX Archive</a></li>
              </ul>
            </div>
          </div>

          <div className="system-section power-energy">
           
            <h3>Power Distribution & Energy Management</h3>
            <div className="system-description">
              <p>
                The habitat operates on 25–80 kW, with a 33% energy margin to ensure reliability during peak demand. 
                Backup batteries provide stability in case of solar or system interruptions. Power efficiency is maximized 
                through recycling, smart allocation, and redundancy to keep all critical life support systems running.
              </p>
            </div>

            <div className="subsystem-power-table">
               <h3><a href="https://docs.google.com/spreadsheets/d/1h4BSEf-UlEZb1YzTFIdmd3EqQGs0afGdWCcpEqpM-wo/edit?usp=sharing">Review The Data By Clicking Here</a></h3>
              <h4>Subsystem Power Requirements</h4>
              <table className="power-table">
                <thead>
                  <tr>
                    <th>Subsystem</th>
                    <th>Continuous power (W)</th>
                    <th>Peak / transient (W)</th>
                    <th>Duty cycle / notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ECLSS</td>
                    <td>600-900</td>
                    <td>1,200</td>
                    <td>Regeneration cycles</td>
                  </tr>
                  <tr>
                    <td>Water Recovery</td>
                    <td>250-500</td>
                    <td>500-1,000</td>
                    <td>Heating/distillation events</td>
                  </tr>
                  <tr>
                    <td>Greenhouse</td>
                    <td>800-1,200</td>
                    <td>1,500-2,000</td>
                    <td>LED lighting cycles</td>
                  </tr>
                  <tr>
                    <td>Comms & Avionics</td>
                    <td>50-300</td>
                    <td>500-1,000</td>
                    <td>High-gain windows</td>
                  </tr>
                  <tr>
                    <td>Medical/Labs/Tools</td>
                    <td>50-400</td>
                    <td>500</td>
                    <td>Variable equipment use</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="reference-documents">
              <h4>Used NASA Datasets & Resources</h4>
              <ul>
                <li><a href="https://ntrs.nasa.gov/api/citations/20190000472/downloads/20190000472.pdf" target="_blank" rel="noreferrer">Energy Storage for Lunar Surface Exploration</a></li>
                <li><a href="https://ntrs.nasa.gov/citations/20230011212" target="_blank" rel="noreferrer">Thermal Management Challenges for RFC</a></li>
                <li><a href="https://ntrs.nasa.gov/api/citations/20240013588/downloads/Csank_Pr_LunarSurfacePower_APETS_MIT_20240013588.pdf" target="_blank" rel="noreferrer">Electric Power on the Lunar Surface</a></li>
              </ul>
            </div>
          </div>

          <div className="system-section recycling">
            <h3>Recycling System</h3>
            <div className="system-description">
              <p>
                Plastic waste is processed into usable materials through mechanical and thermal recycling. 
                Metals are melted and refabricated for tools, structures, and spare parts. Glass is re-melted 
                or repurposed into shielding and habitat components. Together, these loops cut waste, conserve 
                resources, and boost long-term mission sustainability.
              </p>
            </div>

            <div className="reference-documents">
              <h3><a href="https://docs.google.com/spreadsheets/d/1BsWM-NoRgPnxzoT1WH4UnigwunD2r0tQTyXfSfIH5DI/edit?usp=sharing">Review The Procedures By Clicking Here</a></h3>
              <h3><a href="https://docs.google.com/spreadsheets/d/1N1t-ChSLXOGU_pa83VFh9FlWgZeSYSDVZwDZlaE3NZg/edit?usp=sharing">Review The Data By Clicking Here</a></h3>
              <h4>Used NASA Datasets & Resources</h4>
              <ul>
                <li><a href="https://ntrs.nasa.gov/citations/20210010866" target="_blank" rel="noreferrer">ECLSS Test & Technology Reports</a></li>
                <li><a href="https://ntrs.nasa.gov/citations/20240007391" target="_blank" rel="noreferrer">Integrated Waste Trade Study — Lunar to Deep Space</a></li>
                <li><a href="https://ntrs.nasa.gov/citations/20250003910" target="_blank" rel="noreferrer">Trash or Treasure — Moon-to-Mars Waste Results</a></li>
                <li><a href="https://ntrs.nasa.gov/api/citations/20100033687/downloads/20100033687.pdf" target="_blank" rel="noreferrer">Water Recovery from Waste — Lunar Mission Balance</a></li>
              </ul>
            </div>
          </div>

          <div className="system-section habitat-management">
            <h3>Crew Habitat Management</h3>
            <div className="system-description">
              <p>
                The crew habitat is designed as an integrated living and working space where every zone has 
                a defined purpose—sleeping quarters, galley, hygiene units, medical bay, exercise area, labs, 
                and repair stations. Each compartment is planned with attention to contamination risk, privacy, 
                proximity, and noise, ensuring both safety and comfort. Volumes are optimized by scaling 
                furniture and storage with the number of crew, while fixed systems such as water recovery, 
                CO₂ scrubbers, and power units occupy calculated footprints to keep resources efficient. 
                This balance between human needs and technical demands creates a functional, comfortable, 
                and sustainable habitat that supports long-duration missions.
              </p>
            </div>

            <div className="reference-documents">
               <h3><a href="https://docs.google.com/spreadsheets/d/1AhwtUctjUYt1rHwwD-zcdkD9ylVVK8XhWs1hc_6wGWw/edit?usp=sharing">Review The Procedures By Clicking Here</a></h3>
              <h3><a href="https://docs.google.com/spreadsheets/d/1s7bQwlMGyn-vq7hTxUPfRXRTKNW5f-wBx_-b90FbxC0/edit?usp=sharing">Review The Habitat Equipment Data By Clicking Here</a></h3>
              <h4>Used NASA Datasets & Resources</h4>
              <ul>
                <li><a href="https://data.nist.gov/od/id/mds2-3043" target="_blank" rel="noreferrer">3D Particle Shape & Size (Apollo + JSC‑1A)</a></li>
                <li><a href="https://ntrs.nasa.gov/citations/20205001678" target="_blank" rel="noreferrer">Common Habitat Design</a></li>
                <li><a href="https://ntrs.nasa.gov/citations/20220013669" target="_blank" rel="noreferrer">Lunar Habitat Layout</a></li>
                <li><a href="https://ntrs.nasa.gov/citations/20220000524" target="_blank" rel="noreferrer">Moon‑to‑Mars Habitation</a></li>
                <li><a href="https://science.nasa.gov/lunar-science/data" target="_blank" rel="noreferrer">Lunar Science Data (LDEP)</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
