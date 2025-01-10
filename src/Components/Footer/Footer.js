import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Top - Links */}
        <div className="footer-top">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#features">Home</a></li>
              <li><a href="#pricing">API Stack</a></li>
              <li><a href="#integrations">Product Suite</a></li>
              <li><a href="#templates">Managed Services</a></li>
              <li><a href="#security">Partners</a></li>
              <li><a href="#features">About Us</a></li>
              <li><a href="#pricing">Careers</a></li>
              <li><a href="#integrations">Media</a></li>
              <li><a href="#templates">Terms of Use</a></li>
              <li><a href="#security">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#help-center">Blog</a></li>
              <li><a href="#blog">Knowledge Base</a></li>
              <li><a href="#ebooks">Customer Stories</a></li>
              <li><a href="#webinars">Webinars</a></li>
              <li><a href="#status">Status</a></li>
              <li><a href="#help-center">Help Center</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#ebooks">Ebooks</a></li>
              <li><a href="#webinars">Webinars</a></li>
              <li><a href="#status">Status</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#partners">Partners</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#partners">Partners</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li><a href="#support">Phone-</a></li>
              <li><a href="#sales">+91 10012662622</a></li>
              <li><a href="#support">Email-</a></li>
              <li><a href="#sales">support@beelinx.in</a></li>
              <li><a href="#support">Physical</a></li>
              <li><a href="#sales">Address-</a></li>
              <li><a href="#support">B-91,</a></li>
              <li><a href="#sales">Sector 66</a></li>
              <li><a href="#support">Noida , UP</a></li>
              
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <p>© {new Date().getFullYear()} Beelinx, Inc. All rights reserved.</p>
            <ul>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#cookie-policy">Cookie Policy</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
