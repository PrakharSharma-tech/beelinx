import React from "react";
import "./CPSProductHero.css"

const CPSProductHero = () => {
  return (
    <div>
    <div className="Beelinx-container">
      <div className="Beelinx-content">
        <h1>Consulting Professional Services</h1>
        <p>
        Companies may seek the expertise of software development companies for various purposes, such as software architecture design, project management, quality assurance, or technology selection. Consulting services can be offered on a project basis or hourly rate, allowing the software development company to monetize their knowledge and experience.        </p>
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

export default CPSProductHero;
