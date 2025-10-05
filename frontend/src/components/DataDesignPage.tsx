import React, { useState } from 'react';

export const DataDesignPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="data-design-page">
      <div className="page-content">
        <h1 className="page-title">Data & Design</h1>

        {/* Data Section */}
        <div className="section">
          <h2>Technical Parameters</h2>
          <div className="technical-parameters-table">
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
        </div>

        {/* Design Philosophy Section */}
        <div className="section">
          <h2>Design Philosophy</h2>
          <div className="design-content">
            <div className="design-section">
              <h3>Modular Architecture</h3>
              <p>
                Our lunar habitats are designed with modularity at their core, allowing for 
                flexible expansion and adaptation as mission requirements evolve.
              </p>
            </div>

            <div className="design-section">
              <h3>Sustainable Systems</h3>
              <p>
                Every system is designed for maximum efficiency and minimal waste, creating 
                a truly sustainable environment for long-term lunar habitation.
              </p>
            </div>

            <div className="design-section">
              <h3>Human-Centered Design</h3>
              <p>
                We prioritize the psychological and physical well-being of inhabitants, 
                creating spaces that feel like home while maximizing functionality.
              </p>
            </div>

            <div className="design-section">
              <h3>Technology Integration</h3>
              <p>
                Advanced AI systems work seamlessly with human operators to manage complex 
                life support and resource management systems.
              </p>
            </div>
          </div>
        </div>

        {/* Visualizations Section */}
        <div className="section">
          <h2>Project Visualizations</h2>
          <div className="images-grid">
            <div className="image-item">
              <img 
                src="/images/Battery.png" 
                alt="Battery System" 
                onClick={() => openImageModal("/images/Battery.png")}
                className="clickable-image"
              />
              <h3>Battery System</h3>
              <p>Advanced energy storage solution for lunar habitat power management</p>
            </div>
            <div className="image-item">
              <img 
                src="/images/Rover.png" 
                alt="Lunar Rover" 
                onClick={() => openImageModal("/images/Rover.png")}
                className="clickable-image"
              />
              <h3>Lunar Rover</h3>
              <p>Mobile exploration vehicle for surface operations and resource collection</p>
            </div>
            <div className="image-item">
              <img 
                src="/images/Regolith trans..png" 
                alt="Regolith Processing" 
                onClick={() => openImageModal("/images/Regolith trans..png")}
                className="clickable-image"
              />
              <h3>Regolith Processing</h3>
              <p>In-situ resource utilization system for lunar material processing</p>
            </div>
            <div className="image-item">
              <img 
                src="/images/Screenshot 2025-10-04 131959.png" 
                alt="System Overview" 
                onClick={() => openImageModal("/images/Screenshot 2025-10-04 131959.png")}
                className="clickable-image"
              />
              <h3>System Overview</h3>
              <p>Comprehensive view of the lunar habitat infrastructure and systems</p>
            </div>
            <div className="image-item">
              <img 
                src="/images/Habitat house.png" 
                alt="Habitat House" 
                onClick={() => openImageModal("/images/Habitat house.png")}
                className="clickable-image"
              />
              <h3>Habitat House</h3>
              <p>Primary living quarters designed for crew comfort and safety</p>
            </div>
            <div className="image-item">
              <img 
                src="/images/G,house.png" 
                alt="Greenhouse" 
                onClick={() => openImageModal("/images/G,house.png")}
                className="clickable-image"
              />
              <h3>Greenhouse</h3>
              <p>Controlled environment agriculture for sustainable food production</p>
            </div>
            <div className="image-item">
              <img 
                src="/images/Brick wall.png" 
                alt="Structural Elements" 
                onClick={() => openImageModal("/images/Brick wall.png")}
                className="clickable-image"
              />
              <h3>Structural Elements</h3>
              <p>Reinforced construction materials for lunar environment protection</p>
            </div>
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
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeImageModal}>
              ×
            </button>
            <img src={selectedImage} alt="Full size" className="image-modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};
