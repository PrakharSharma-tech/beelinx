import React from "react";
import "./Split-Banner2-tour.css";

const SplitBanner2Tour = () => {
  return (
    <div>
      
    <div className="Beelinx-banner4-tour">
      {/* Left Section */}
      <div className="video-preview4-tour">
        <h3>Beelinx Collection Overview</h3>
        <div className="video-container4-tour">
          {/* Replace the URL below with your desired video URL */}
          <iframe
            src="SplitBanner-video2.mp4"
            title="Product Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="content4-tour">
        
        <div className="templates-section4-tour">
          <h2>Virtual Account Numbers (VAN)</h2>
          <p>
          Beelinx’s Virtual Account Numbers (VAN) API enables businesses to generate unique virtual accounts for each payer, simplifying the reconciliation process and ensuring accurate payment tracking.
          </p>
          <p>
          With real-time payment tracking, secure transactions, and easy integration, Beelinx’s VAN API is ideal for use cases such as school fee collections, loan repayments, and e-commerce payments, providing a reliable solution for efficient payment management.
          </p>
        </div>
      </div>

      {/* Right Section with Video */}
      
    </div>
    </div>
  );
};

export default SplitBanner2Tour;
