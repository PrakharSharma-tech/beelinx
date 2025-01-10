import React from "react";
import "./TerminalImageSection.css";

const TerminalImageSection = () => {
  return (
    <div>
    <div className="bottom-section">
      {/* Background Images */}
      <div className="background-image top-left">
        <img src="shorten the journey1.png" alt="Top Left Decoration" />
      </div>
      <div className="background-image bottom-right">
        <img src="shorten the journey2.png" alt="Bottom Right Decoration" />
      </div>

      {/* Content */}
      <div className="content-container2">
        
        <h1 className="title">
        Ready to see Beelinx for yourself?
        </h1>
        <p style={{padding:"20px",content: "\A"}}>We’d love to show you how Beelinx can help your team do more of their best work. Fill out the form and we’ll be in touch within 24 hours.</p>
        <div className="buttons-container">
          <button className="button try-button">Try Beelinx for free</button>
          <button className="button contact-button">Contact us</button>
        </div>
      </div>

    </div>
    <div className="confidence-footer">
    <p style={{ fontSize: "40px", paddingBottom: "40px" }}>
      Trusted by 20,000+ organizations worldwide
    </p>
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

export default TerminalImageSection;
