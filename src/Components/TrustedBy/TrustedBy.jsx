import React from "react";
import "./TrustedBy.css";

const TrustedBySection = () => {
  return (
    <div className="trusted-by-section">
      <h2>Trusted by 20,000+ organizations worldwide</h2>
      <div className="trusted-cards">
        <div className="card">
          <img src="/path/to/sony-logo.png" alt="Sony Pictures" className="logo" />
          <h3>90%</h3>
          <p>reduction in emails</p>
        </div>
        <div className="card">
          <img src="/path/to/arvig-logo.png" alt="Arvig" className="logo" />
          <h3>250%</h3>
          <p>increase in project capacity</p>
        </div>
        <div className="card">
          <img src="/path/to/bigcommerce-logo.png" alt="BigCommerce" className="logo" />
          <h3>50%</h3>
          <p>less reporting time</p>
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;
