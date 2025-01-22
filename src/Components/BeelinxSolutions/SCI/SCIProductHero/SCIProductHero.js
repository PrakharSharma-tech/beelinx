import React from "react";
import "./SCIProductHero.css"

const SCIProductHero = () => {
  return (
    <div>
    <div className="Beelinx-container">
      <div className="Beelinx-content">
        <h1>Software Customization and Integration</h1>
        <p>
        Companies may require customization or integration of existing software solutions to meet their specific needs. A software development company can offer these services, tailoring the software to fit the client's requirements and integrating it with their existing systems. These services can be charged on a project basis or hourly rate.        </p>
        <div className="Beelinx-buttons">
          <button className="try-button">Try Beelinx for free</button>
          <button className="contact-button">Contact us</button>
        </div>
      </div>

      <div className="Beelinx-image">
        <img
          src="ProductHero.png"
          alt="Visualization of project statuses"
          className="project-status-image"
        />
      </div>
    </div>
    <div className="confidence-footer">
        <p style={{ fontSize: "40px", paddingBottom: "40px" }}>
          Trusted by 20,000+ organizations worldwide
        </p>
        <div className="logos">
          <img src="brand1Beelinx.svg" alt="ABB" />
          <img src="brand2Beelinx.svg" alt="AVEVA" />
          <img src="brand3Beelinx.svg" alt="Lyft" />
          <img src="brand4Beelinx.svg" alt="Siemens" />
          <img src="brand5Beelinx.svg" alt="Schneider Electric" />
          <img src="brand6Beelinx.svg" alt="Ogilvy" />
          <img src="brand7Beelinx.svg" alt="T-Mobile" />
        </div>
      </div>
    </div>
  );
};

export default SCIProductHero;
