import React from "react";
import "./TapIntoFuture.css"; // Import corresponding CSS

const TapIntoFutureSection = () => {
  return (
    <div style={{backgroundColor:"white" , height:"500px", justifyContent:"center", alignContent:"center"}}>
       <div style={{margin:"30px"}}>
       // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="#" className="feature-link">
                More Customer stories →
              </a>
              </div>
    <section className="tap-into-future-section">
        
      <div className="content-container">
        <h2 className="section-title">Contact Our Media Team</h2>
        <p className="section-description">
        For media inquiries, interviews, or additional information, please contact our media team. We look forward to assisting you.
        </p>
        <div className="button-group">
          <a href="#try-Beelinx" className="cta-button primary">
            Try Beelinx for free
          </a>
          <a href="#contact-sales" className="cta-button secondary">
            Contact sales
          </a>
        </div>
      </div>
    </section>
    </div>
  );
};

export default TapIntoFutureSection;
