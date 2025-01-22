import React from "react";
import "./AMSGetBetterResult.css"; // Import corresponding CSS

const AMSGetBetterResult = () => {
  return (
    <div style={{backgroundColor:"white" , height:"500px", justifyContent:"center", alignContent:"center"}}>
       <div style={{margin:"30px"}}>
        <a href="#" className="feature-link">
                More Customer stories →
              </a>
              </div>
    <section className="tap-into-future-section">
        
      <div className="content-container">
        <h2 className="section-title">Get in Touch with Our Experts</h2>
        <p className="section-description">
        Request a callback and discover how our solutions can transform your business and drive growth.      </p>
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

export default AMSGetBetterResult;
