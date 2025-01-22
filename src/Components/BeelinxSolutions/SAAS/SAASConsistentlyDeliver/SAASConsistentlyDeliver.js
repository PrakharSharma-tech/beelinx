import React from "react";
import "./SAASConsistentlyDeliver.css";

const SAASProductFeatures = () => {
  return (
    <div className="features-container">
      <h2 >Consistently deliver successful products</h2>
      <div className="features-list">
        <div className="feature-item">
          <img src="/product-card1.svg" alt="Accelerate" className="feature-icon-consistentlyDeliver" />
          <h3>Accelerate product launches</h3>
          <p>
            Move from concept to launch more efficiently and achieve maximum
            impact with powerful automation, effortless cross-functional
            collaboration, and complete visibility for go-to-market teams.
          </p>
        </div>

        <div className="feature-item">
          <img src="/product-card2.svg" alt="Prioritize" className="feature-icon-consistentlyDeliver" />
          <h3>Prioritize product epics and initiatives</h3>
          <p>
            Ensure your development team is working on the most impactful
            projects by allocating the right resources to push development
            forward.
          </p>
        </div>

        <div className="feature-item">
          <img src="/product-card3.svg" alt="Centralize" className="feature-icon-consistentlyDeliver" />
          <h3>Centralize communication and collaboration</h3>
          <p>
            Provide real-time visibility into the product roadmap and
            product-related decisions for better collaboration between
            cross-functional teams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SAASProductFeatures;