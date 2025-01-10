import React from "react";
import "./VideoSectionEnterprises.css";

const DiscoverBeelinxSection = () => {
  return (
    <div  id="overview"  className="discover-Beelinx-section">
      <h2>Discover Beelinx for enterprise in 3 minutes:</h2>
      <div className="features-container">
        {/* <div className="feature-card">
          <img src="/path/to/icon1.png" alt="Unify PM processes" className="feature-icon" />
          <p>Unify PM processes</p>
        </div>
        <div className="feature-card">
          <img src="/path/to/icon2.png" alt="Establish clear visibility" className="feature-icon" />
          <p>Establish clear visibility</p>
        </div>
        <div className="feature-card">
          <img src="/path/to/icon3.png" alt="Drive faster outcomes" className="feature-icon" />
          <p>Drive faster outcomes</p>
        </div> */}
      </div>
      <div className="video-container">
        <video
          src="Enterpries Video.mp4"
          alt="Video thumbnail"
          className="video-thumbnail"
        />
        
      </div>
    </div>
  );
};

export default DiscoverBeelinxSection;
