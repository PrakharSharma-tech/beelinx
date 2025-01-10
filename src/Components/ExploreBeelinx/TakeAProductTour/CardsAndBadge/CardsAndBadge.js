import React from "react";
import "./CardsAndBadge.css";

const CardsAndBadge = () => {
  return (
    <section className="customer-results-section">
      {/* Top Section: Customer Results */}
      <div className="results-heading">
        <h2>Explore our customers' results</h2>
      </div>
      <div className="results-container">
        {/* Siemens Card */}
        <div className="result-card">
          <h3 className="result-title siemens">SIEMENS</h3>
          <p className="result-number">14,000</p>
          <p className="result-description">users in 20+ countries</p>
          <a href="#" className="result-link">
            Siemens story &rarr;
          </a>
        </div>

        {/* Sony Pictures Card */}
        <div className="result-card">
          <img
            src="sony-pictures.png"
            alt="Sony Pictures"
            className="result-image"
          />
          <p className="result-number">90%</p>
          <p className="result-description">reduction in emails</p>
          <a href="#" className="result-link">
            Sony Pictures story &rarr;
          </a>
        </div>

        {/* Syneos Health Card */}
        <div className="result-card">
          <h3 className="result-title syneos">
            <span className="syneos-logo">Syneos</span> Health
          </h3>
          <p className="result-number">200+</p>
          <p className="result-description">
            tasks issued in Beelinx every day
          </p>
          <a href="#" className="result-link">
            Syneos Health story &rarr;
          </a>
        </div>
      </div>

      {/* Bottom Section: Awards */}
      <div className="awards-container">
        <img src="pricing-badge.svg" alt="Leader Winter 2024" />
        <img src="pricing-badge2.svg" alt="Momentum Spring 2024" />
        <img src="pricing-badge3.svg" alt="Leader Spring 2024" />
        <img src="pricing-badge.svg" alt="Users Love Us" />
        <img src="pricing-badge2.svg" alt="Top 50 Award" />
        <img src="pricing-badge3.svg" alt="Leader Enterprise Spring" />
        <img src="pricing-badge.svg" alt="Leader Enterprise Winter" />
        <img src="pricing-badge2.svg" alt="Leader Enterprise Fall" />
      </div>
    </section>
  );
};

export default CardsAndBadge;
