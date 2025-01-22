import React from "react";
import "./CPSShortenTheJourney.css";

const CPSShortenTheJourney = () => {
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
        <p className="subtitle">Become a Partner</p>
        <h3 className="title">
        Partner with Beelinx to drive digital transformation.
        </h3>
        <div className="buttons-container">
          <button className="button try-button">Become a Partner</button>
          <button className="button contact-button">Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default CPSShortenTheJourney;
