import React from "react";
import "./BeelinxCanSupport.css";

const BeelinxCanSupport = () => {
  return (
    <div>
    <div className="hero-section-bcs">
      <div className="hero-content-bcs">
        <h1>
        Learn More About Beelinx's Managed Services
        </h1>
        <p>Request a callback from Beelinx to explore how our managed services can benefit your business.



</p>
        <div className="hero-buttons-bcs">
          <button className="try-button-bcs">Try Beelinx for free</button>
          <button className="contact-button-bcs">Request</button>
        </div>
      </div>
      <div className="hero-image-bcs">
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
