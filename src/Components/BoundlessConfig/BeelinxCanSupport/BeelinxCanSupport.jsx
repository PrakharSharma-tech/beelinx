import React from "react";
import "./BeelinxCanSupport.css";

const BeelinxCanSupport = () => {
  return (
    <div>
    <div className="hero-section">
      <div className="hero-content">
        <h1>
        Learn More About Beelinx's Managed Services
        </h1>
        <p>Request a callback from Beelinx to explore how our managed services can benefit your business.



</p>
        <div className="hero-buttons">
          <button className="try-button">Try Beelinx for free</button>
          <button className="contact-button">Request</button>
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
    
  </div>
  );
};

export default BeelinxCanSupport;
