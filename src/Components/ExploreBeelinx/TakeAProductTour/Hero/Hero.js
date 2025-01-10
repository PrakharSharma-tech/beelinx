import React from "react";
import "./Hero.css";

const HeroSection = () => {
  return (
    <div style= {{backgroundColor:"#eff6f5", marginTop:"0"}}>
    <section  className="hero-section-tour">
      <div className="hero-container-tour">
        {/* Left image placeholder */}
        <img
          src="shorten the journey1.png"
          alt="Left Design"
          className="hero-image-tour left"
        />

        {/* Main content */}
        <div className="hero-content-tour">
          <h1 className="hero-title-tour">
          Empower with <span className="brand">Beelinx</span> API Solutions




          </h1>

          <div className="hero-input-container-tour">
            <input
              type="email"
              placeholder="Enter your business email"
              className="hero-input-tour"
            />
            <button className="hero-button-tour">Start my free trial</button>
          </div>
        </div>

        {/* Right image placeholder */}
        <img
          src="shorten the journey2.png"
          alt="Right Design"
          className="hero-image-tour right"
        />
      </div>
    </section>
    <div style= {{backgroundColor:"#eff6f5", marginTop:"0"}} className="confidence-footer">
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
  <div className="dashboard-video">
        <video controls>
          <source src="BeelinxDashboardvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
  </div>
  );
};

export default HeroSection;
