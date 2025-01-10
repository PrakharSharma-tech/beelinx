import React from "react";
import "./ConfidenceSection.css";

const ConfidenceSection = () => {
  return (
    <div>
    <div className="confidence-section">
      <div className="confidence-content">
        <h2>Make Decisions with Confidence</h2>
        <p>
          Interested in how much Beelinx can help you save each month? Use our ROI
          calculator to uncover where your productive hours are being lost and
          how Beelinx can help you get them back. Based on the usage trends of
          active Beelinx users, it’s clear Beelinx reduces time spent:
        </p>
        <div className="confidence-stats">
          <div className="stat">
            <h3>-30%</h3>
            <p>on emailing</p>
          </div>
          <div className="stat">
            <h3>-50%</h3>
            <p>on meetings</p>
          </div>
          <div className="stat">
            <h3>-50%</h3>
            <p>on reporting</p>
          </div>
          <div className="stat">
            <h3>-50%</h3>
            <p>on searching for information</p>
          </div>
          <div className="stat">
            <h3>-70%</h3>
            <p>on requesting status updates</p>
          </div>
        </div>
        <div className="confidence-buttons">
          <button className="primary-button">Calculate your ROI</button>
          <button className="secondary-button">Try Beelinx for free</button>
        </div>
      </div>
      </div>
      <div className="confidence-footer">
        <p style={{fontSize:"40px", paddingBottom:"40px"}}>Trusted by 20,000+ organizations worldwide</p>
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

export default ConfidenceSection;
