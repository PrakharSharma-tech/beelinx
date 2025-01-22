import React from "react";
import "./SDSProductHero.css"

const SDSProductHero = () => {
  return (
    <div>
    <div className="Beelinx-container">
      <div className="Beelinx-content">
        <h1>Software Development Services</h1>
        <p>
        The primary source of income for a software development company is providing services to clients. This includes developing custom software solutions, building mobile applications, creating web platforms, and providing software consulting services. Clients pay the company for the development work based on the scope of the project, time and materials, or a fixed project price.        </p>
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

export default SDSProductHero;
