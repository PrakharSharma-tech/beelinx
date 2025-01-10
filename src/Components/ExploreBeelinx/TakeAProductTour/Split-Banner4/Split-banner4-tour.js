import React from "react";
import "./Split-Banner4-tour.css";

const SplitBanner4Tour = () => {
  return (
    <div>
      
    <div className="Beelinx-banner4-tour">
      {/* Left Section */}
      <div className="video-preview4-tour">
        <h3>Beelinx Miscellaneous Overview</h3>
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
          <h2>VPA Verification</h2>
          <p>
          Beelinx’s Virtual Payment Address (VPA) Verification API ensures the accuracy and security of UPI transactions by validating the ownership and activity of VPAs in real-time. This helps reduce transaction errors, prevent fraud, and enhance the overall security of UPI payments.
          </p>
          <p>
          Beelinx’s VPA Verification API is ideal for verifying customer VPAs, ensuring transaction accuracy, and preventing fraudulent activities, making it a vital tool for secure digital payments.
          </p>
        </div>
      </div>

      {/* Right Section with Video */}
      
    </div>
    </div>
  );
};

export default SplitBanner4Tour;
