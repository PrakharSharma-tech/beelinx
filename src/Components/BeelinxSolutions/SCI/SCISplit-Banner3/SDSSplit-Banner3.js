import React from "react";
import "./SCISplit-Banner3.css";

const SCISplitBanner3 = () => {
  return (
    <div>
       
    <div className="Beelinx-banner5">
      {/* Left Section */}
      <div className="content5">
        
        <div className="templates-section5">
          <h2>Partner 3: [Bank Name]</h2>
          <p>
          As a pioneer in digital banking, [Bank Name] partners with us to deliver innovative, scalable banking solutions that meet the evolving needs of the modern financial landscape. Our collaboration ensures that clients benefit from cutting-edge financial technology, backed by a deep commitment to innovation and customer satisfaction. Together, we focus on developing advanced digital banking solutions that not only enhance the user experience but also drive continuous improvement across all touchpoints.
          </p>
          <p>
          Our joint efforts include establishing innovation labs and workshops to foster creativity, explore new ideas, and develop next-generation products. Through these initiatives, we aim to revolutionize digital transformation projects, improve user interfaces, and consistently deliver groundbreaking solutions that shape the future of banking. This partnership is a testament to our shared vision of delivering superior financial products and services that empower businesses and consumers alike.
          </p>
        </div>
      </div>

      {/* Right Section with Video */}
      <div className="video-preview5">
        <h3>Beelinx Overview</h3>
        <div className="video-container5">
          {/* Replace the URL below with your desired video URL */}
          <iframe
            src="Product-Split-Banner1.mp4"
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

export default SCISplitBanner3;
