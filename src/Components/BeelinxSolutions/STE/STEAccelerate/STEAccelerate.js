// React Component
import React from "react";
import "./STEAccelerate.css";

const STEAccelerate = () => {
  return (
    <div className="product-template-container">
      <div className="header-section">
        <h1>Accelerate your launches with pre-built product templates</h1>
        <p>Our trusted product management software templates will simplify your journey to market.</p>
      </div>
      <div className="template-cards">
        <div className="card">
          <h3>Streamline your product launches</h3>
          <p>
            Align all the teams involved and prevent common delays for on-time delivery to market.
          </p>
          <a href="#" className="template-link">Start with this template →</a>
        </div>
        <div className="card">
          <h3>Help teams become fully Agile</h3>
          <p>
            Create the products your customers want. Plan, prioritize, and execute projects flawlessly.
          </p>
          <a href="#" className="template-link">Start with this template →</a>
        </div>
        <div className="card">
          <h3>Centralize and streamline feedback and feature requests</h3>
          <p>
            Easily gather all the information you need to complete requests and automatically assign them to the right person.
          </p>
          <a href="#" className="template-link">Start with this template →</a>
        </div>
      </div>
    </div>
  );
};

export default STEAccelerate;
