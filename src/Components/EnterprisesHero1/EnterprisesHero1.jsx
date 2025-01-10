import React from "react";
import "./EnterpriseHero1.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>
          Beelinx for enterprise. <br />
          <span>One connected platform that scales.</span>
        </h1>
        <ul>
          <li>✅ Secure org-wide collaboration</li>
          <li>✅ Attain 360° visibility and alignment</li>
          <li>✅ Cut wasted effort and inefficiency</li>
          <li>✅ Drive maximum business outcomes</li>
        </ul>
        <div className="hero-buttons">
          <button className="try-button">Try Beelinx for free</button>
          <button className="contact-button">Contact sales</button>
        </div>
      </div>
      <div className="hero-image">
        {/* Primary Image */}
        <img
          src="EnterpriseHero2.png"
          alt="Enterprise collaboration"
          className="main-image"
        />
        {/* Secondary Image */}
        <img
          src="EnterprisesHero.svg"
          alt="Additional insights"
          className="overlay-image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
