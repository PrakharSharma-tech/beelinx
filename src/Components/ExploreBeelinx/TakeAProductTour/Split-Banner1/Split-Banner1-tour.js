import React from "react";
import "./Split-Banner1-tour.css";

const BeelinxBannerTour = () => {
  return (
    <div>
        <h2 style={{fontSize:"40px"}}>2.Collections</h2>
<p style={{fontSize:"30px"}}>Beelinx’s Collections APIs streamline payment collection for timely and accurate receipt of funds.</p>
    <div className="Beelinx-banner3-tour">
      {/* Left Section */}
      <div className="content3-tour">
        
        <div className="templates-section3-tour">
          <h2>UPI(Unified Payments Interface)</h2>
          <p>
          Beelinx’s UPI Collection API enables businesses to seamlessly collect payments through UPI, offering real-time transactions with secure and reliable processing. It integrates easily with existing systems and supports dynamic QR codes and virtual payment addresses for convenient collections.
          </p>
          <p>
          Beelinx’s UPI Collection API is ideal for merchant collections, utility bill payments, and subscription-based service collections, providing an efficient and secure way to manage payments.
          </p>
        </div>
      </div>

      {/* Right Section with Video */}
      <div className="video-preview3-tour">
        <h3>Beelinx Collection Overview</h3>
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

export default BeelinxBannerTour;
