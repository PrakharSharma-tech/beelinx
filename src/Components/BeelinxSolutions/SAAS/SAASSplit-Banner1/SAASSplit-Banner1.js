import React from "react";
import "./SAASSplit-Banner1.css";

const SAASBeelinxBanner = () => {
  return (
    <div>
        <h2>Partners - Banking </h2>
<p>Our banking partners drive innovation, providing reliable solutions that meet evolving business and consumer needs.</p>
    <div className="Beelinx-banner3">
      {/* Left Section */}
      <div className="content3">
        
        <div className="templates-section3">
          <h2>Partner 1: [Bank Name]</h2>
          <p>
          [Bank Name] is a renowned financial institution with a rich history of innovation and excellence. With a deep commitment to advancing the financial services industry, they bring extensive expertise and a customer-first approach to every partnership. Through our collaboration, we are able to offer cutting-edge banking solutions that cater to the ever-evolving needs of our clients. 
          </p>
          <p>
          This partnership focuses on several key areas, such as joint product development, enhanced security protocols, seamless integration with banking systems, and the co-creation of impactful marketing strategies. By working together, we aim to expand market reach, improve transaction security, and foster continued growth in the financial ecosystem.
          </p>
        </div>
      </div>

      {/* Right Section with Video */}
      <div className="video-preview3">
        <h3>Beelinx Overview</h3>
        <div className="video-container3">
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

export default SAASBeelinxBanner;
