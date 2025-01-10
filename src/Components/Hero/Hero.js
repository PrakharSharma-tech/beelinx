import React from "react";
import "./Hero.css"; // Import styles
import BeelinxHero from "./hero-animation-homepage-600-1.svg"; // Import the image

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Beelinx </h1>
        <p>
        "At Beelinx, we are dedicated to revolutionizing the financial technology landscape with our innovative solutions. Our mission is to drive growth, efficiency, and digital transformation for businesses of all sizes."
        </p>
        <div className="hero-buttons">
          <button className="cta-button">Get Started Today</button>
          {/* <button className="secondary-button">Discover Beelinx in 3 minutes</button> */}
        </div>
      </div>
      <div className="hero-image">
        <img src={BeelinxHero} alt="Placeholder Image" />
      </div>
    </section>
  );
};

export default Hero;
