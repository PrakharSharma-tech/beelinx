import React from "react";
import "./BottomSection.css";

const BottomSection = () => {
  return (
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
        
        <h3 className="title">
        Unlock business potential with API stack and UAT.
        </h3>
        <div className="buttons-container">
          <button className="button try-button">Start UAT</button>
          <button className="button contact-button">Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
