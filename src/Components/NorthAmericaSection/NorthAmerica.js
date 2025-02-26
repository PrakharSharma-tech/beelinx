import React from "react";
import "./NorthAmerica.css";

const NorthAmericaSection = () => {
  return (
    <div className="contact-section">
      {/* Left Column */}
      <div className="left-column">
        {/* North America */}
        <div className="region">
          <h3>Phone Number</h3>
          <ul>
            <li>
              <strong>Phone no. 1:</strong> +1 650 353 5424 | +1 415 539 2655
            </li>
            <li>
              <strong>Phone no. 2:</strong> +1 650 353 5424 | +1 415 539 2655
            </li>
          </ul>
        </div>

        {/* Pacific Region */}
        <div className="region">
          <h3>Email ID</h3>
          <ul>
            <li>
              <strong>Email ID:</strong> Beelinx@gmail.com
            </li>
          </ul>
        </div>

        {/* Latin America */}
        <div className="region">
          <h3>Address</h3>
          <ul>
            <li>
              <strong>Office Address:</strong> B-91, Sector 63,Noida
            </li>
            
          </ul>
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column">
        {/* Europe */}
        <div className="region">
          <h3>Other</h3>
          <ul>
            {/* <li><strong>Belgium:</strong> +32 78 481084</li>
            <li><strong>Sweden:</strong> +46 8 580 976 10</li>
            <li><strong>France:</strong> +33 9 71 07 20 11</li>
            <li><strong>Germany:</strong> +49 3221 1122 375</li>
            <li><strong>Ireland:</strong> +353 1 761 4798</li>
            <li><strong>Italy:</strong> +39 02 9475 5355</li>
            <li><strong>Netherlands:</strong> +31 10 300 6502</li>
            <li><strong>Portugal:</strong> +351 308 802 093</li>
            <li><strong>Spain:</strong> +34 911 23 71 10</li>
            <li><strong>United Kingdom:</strong> +44 808 164 0240</li> */}
            {/* <li>For technical support, visit our support portal where you can find FAQs, troubleshooting guides, and submit support tickets.</li>
          <li><a href="#">Suport Portal</a></li> */}
          <li>Business Hours:</li>
          <li>Hours of Operation</li>
          <li>Our business hours are:</li>
          <li>Monday to Friday: 9:00 AM - 6:00 PM</li>
          <li>Saturday and Sunday: Closed</li>
          {/* <li>Our Social Media:</li>
          <li><div style={{marginTop:"20px"}} className="footer-social"><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a><a href="https://www.twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></div></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NorthAmericaSection;
