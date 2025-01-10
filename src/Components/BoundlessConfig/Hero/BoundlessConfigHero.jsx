import React from "react";
import "./BoundlessConfigHero.css";

const BoundlessConfigHeroSection = () => {
  return (
    <div>
    <div className="hero-section">
      <div className="hero-content">
        <h1>
        Streamline Your Business with Beelinx Managed Services
        </h1>
        <p>Beelinx’s managed services ensure seamless operations, from consulting to API development and support, driving digital transformation.</p>
        <div className="hero-buttons">
          <button className="try-button">Try Beelinx for free</button>
          <button className="contact-button">Contact sales</button>
        </div>
      </div>
      <div className="hero-image">
        {/* Primary Image */}
        <img
          src="hero-boundlessconfig.png"
          alt="Enterprise collaboration"
          className="main-image"
        />
        {/* Secondary Image */}
        
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

export default BoundlessConfigHeroSection;
