import React from 'react';

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
      </div>
    </div>
  );
};
