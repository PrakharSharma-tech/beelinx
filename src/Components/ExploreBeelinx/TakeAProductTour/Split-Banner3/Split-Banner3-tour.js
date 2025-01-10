import React from "react";
import "./Split-Banner3-tour.css";

const SplitBanner3Tour = () => {
  return (
    <div>
       
    <div className="Beelinx-banner5-tour">
      {/* Left Section */}
      <div className="content5-tour">
        
        <div className="templates-section5-tour">
          <h2>Create repeatable templates for recurring projects</h2>
          <p>
            Define blueprints for each step in your development process to
            quickly replicate recurring work items, saving time by eliminating
            the need to manually create new projects in Beelinx.
          </p>
          <p>
            Make sure the right people are looped in during the right stages of
            the process and provide visibility to all key stakeholders.
          </p>
        </div>
      </div>

      {/* Right Section with Video */}
      <div className="video-preview5-tour">
        <h3>Beelinx Product Overview</h3>
        <div className="video-container5-tour">
          {/* Replace the URL below with your desired video URL */}
          <iframe
            src="Product-Split-banner1.mp4"
            title="Product Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SplitBanner3Tour;
