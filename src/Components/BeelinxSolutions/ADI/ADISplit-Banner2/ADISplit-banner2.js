import React from "react";
import "./ADISplit-Banner2.css";

const ADISplitBanner2 = () => {
  return (
    <div>
      
    <div className="Beelinx-banner4">
      {/* Left Section */}
      <div className="video-preview4">
        <h3>Beelinx Overview</h3>
        <div className="video-container4">
          {/* Replace the URL below with your desired video URL */}
          <iframe
            src="SplitBanner-video2.mp4"
            title="Product Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="content4">
        
        <div className="templates-section4">
          <h2>Partner 2: [Bank Name]</h2>
          <p>
          [Bank Name] brings decades of experience and a strong focus on customer-centric financial solutions. Their ability to adapt and innovate has made them a key player in the banking industry, and our partnership leverages this strength to deliver a wide range of advanced financial services. Together, we focus on enhancing efficiency and driving business growth by providing innovative tools and services.
          </p>
          <p>
          Key contributions to this collaboration include seamless API integration and support, real-time access to financial data, the development of co-branded financial products, and a comprehensive training and support framework. These initiatives enable us to implement real-time data solutions, improve customer service through streamlined operations, and offer groundbreaking financial products that meet the demands of today’s fast-paced market.
          </p>
        </div>
      </div>

      {/* Right Section with Video */}
      
    </div>
    </div>
  );
};

export default ADISplitBanner2;
