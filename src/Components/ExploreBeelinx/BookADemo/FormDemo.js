import React from "react";
import "./FormDemo.css";

const DemoForm = () => {
  return (
    <div>
      <h2 style={{fontSize:"40px"}}>Request Your Sales Demo</h2>
          <p className="form-subtext">
            Meanwhile, see why Beelinx is the most versatile work management
            platform.
          </p>
    <section className="sales-demo-section">
      
      <div className="sales-demo-container">
        {/* Left Side: Video Placeholder */}
        <div className="video-container-formdemo">
          <div className="video-overlay">
            <button className="play-button">
              <span>&#9654;</span> {/* Play icon */}
            </button>
            <p className="register-text">Register to watch</p>
            <div className="arrow">&#8594;</div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="form-container">
          
          <form>
            <input type="text" placeholder="Full name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" required />

            <label>What department do you work in?</label>
            <select>
              <option>Select Here</option>
              <option>IT</option>
              <option>Marketing</option>
              <option>Sales</option>
            </select>

            <label>What is your job level?</label>
            <select>
              <option>Select Here</option>
              <option>Entry Level</option>
              <option>Manager</option>
              <option>Director</option>
              <option>Executive</option>
            </select>

            <p className="privacy-text">
              By completing and submitting the form, I acknowledge Beelinx's{" "}
              <a href="#" className="privacy-link">
                Privacy Policy
              </a>
            </p>

            <button type="submit" className="submit-button">
              Submit and watch
            </button>
          </form>
        </div>
      </div>
    </section>
    <div style= {{backgroundColor:"#eff6f5", marginTop:"0"}} className="confidence-footer">
    <p style={{ fontSize: "40px", paddingBottom: "40px" }}>
      Trusted by 20,000+ organizations worldwide
    </p>
    <div className="logos">
      <img src="brand1Beelinx.svg" alt="ABB" />
      <img src="brand2Beelinx.svg" alt="AVEVA" />
      <img src="brand3Beelinx.svg" alt="Lyft" />
      <img src="brand4Beelinx.svg" alt="Siemens" />
      <img src="brand5Beelinx.svg" alt="Schneider Electric" />
      <img src="brand6Beelinx.svg" alt="Ogilvy" />
      <img src="brand7Beelinx.svg" alt="T-Mobile" />
    </div>
  </div>
    </div>
  );
};

export default DemoForm;
