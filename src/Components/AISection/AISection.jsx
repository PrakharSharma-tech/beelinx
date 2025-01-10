import React from 'react';
import './AISection.css';

const AISection = () => {
  return (
    <section className="ai-section">
      <div className="ai-content">
        <h2 className="ai-title">Revolutionize Your Business with Beelinx’s Innovative Solutions</h2>
        <p className="ai-description">
        Take the First Step Toward Success – Contact Us Now to Discover How Beelinx Can Help You Achieve Your Ambitious Goals and Drive Lasting Growth</p>
        <button className="ai-button">Contact Us</button>
      </div>
      <div className="ai-image">
        <div className="ai-graphic">
          <span className="ai-text">AI</span>
          <span className="ai-icon star"></span>
          <span className="ai-icon check"></span>
        </div>
      </div>
    </section>
  );
};

export default AISection;
