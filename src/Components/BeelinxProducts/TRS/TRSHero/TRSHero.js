import React from "react";
import "./TRSHero.css";

const TRSDashboardSection = () => {
  return (
    <section className="dashboard-section">
      <div className="dashboard-header">
        <h2>Transaction Reconciliation Software</h2>
        <p>
        A robust tool designed to automate the process of matching transactions across systems, ensuring accuracy and 
financial integrity.
        </p>
        <div className="button-group">
          <button className="primary-button">Try Beelinx for free</button>
          <button className="secondary-button">Contact us</button>
        </div>
      </div>
      <div className="dashboard-video">
        <video controls>
          <source src="BeelinxDashboardvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="dashboard-footer">
        <p>TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE</p>
        <div className="trusted-logos">
          <img src="Brand1Beelinx.svg" alt="ABB" />
          <img src="brand2Beelinx.svg" alt="AVEVA" />
          <img src="brand3Beelinx.svg" alt="Lyft" />
          <img src="brand4Beelinx.svg" alt="Siemens" />
          <img src="brand5Beelinx.svg" alt="Schneider Electric" />
          <img src="brand6Beelinx.svg" alt="Ogilvy" />
          <img src="brand7Beelinx.svg" alt="T-Mobile" />
        </div>
      </div>
      <div className="paint-stroke">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 200"
    preserveAspectRatio="none"
  >
    <path
      d="M0,160 C120,120 240,40 360,80 C480,120 600,200 720,160 C840,120 960,40 1080,60 C1200,80 1320,160 1440,120 L1440,200 L0,200 Z"
      fill="#0c4b4d"
    />
    <path
      d="M0,180 C100,140 250,100 400,120 C550,140 700,200 850,160 C1000,120 1150,80 1300,100 C1400,120 1440,160 1440,180 L0,180 Z"
      fill="#00a99d"
    />
  </svg>
</div>

    </section>
  );
};

export default TRSDashboardSection;
