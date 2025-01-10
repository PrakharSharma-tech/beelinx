import React from "react";
import "./Split-Banner3v2-tour.css";

const BeelinxBannerTour3 = () => {
  return (
    <div>
        <h2 style={{fontSize:"40px"}}>3.Miscellaneous</h2>
<p style={{fontSize:"30px"}}>Beelinx’s Miscellaneous APIs enhance payment experiences by ensuring security and transaction accuracy.</p>
    <div className="Beelinx-banner3-tour">
      {/* Left Section */}
      <div className="content3-tour">
        
        <div className="templates-section3-tour">
          <h2>Penny Drop</h2>
          <p>
          Beelinx’s Penny Drop API verifies bank account validity by making a small deposit to confirm the account holder’s details and ensure transaction accuracy. This process helps reduce the risk of fraud and chargebacks by validating beneficiary accounts and new user accounts.
          </p>
          <p>
          Beelinx’s Penny Drop API offers a secure and reliable solution for account verification, improving transaction integrity and reducing financial risks.
          </p>
        </div>
      </div>

      {/* Right Section with Video */}
      <div className="video-preview3-tour">
        <h3>Beelinx Miscellaneous Overview</h3>
        <div className="video-container3-tour">
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

export default BeelinxBannerTour3;
