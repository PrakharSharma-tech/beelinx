import React from "react";
import OverviewSection from "../VideoSectionEnterprises/VideoSectionEnterprises";
import FeaturesSection from "../TabSectionEnterprises/TabSectionEnterprises";
import BenefitsSection from "../EndtoEndEnterprise/EndtoEndEnterprise";
import SolutionsSection from "../EnterprisesCards/EnterprisesCards";
import "./AnchorSection.css"; // Create or update the CSS file for styling


const AnchorSection = () => {
    
    
        const handleSmoothScroll = (e, targetId) => {
          e.preventDefault(); // Prevent default anchor behavior
          const targetElement = document.getElementById(targetId);
      
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth", // Enable smooth scrolling
              block: "start",
            });
          }
        };
  return (
    <div className="anchor-section">
      {/* Anchor navigation menu */}
      <nav className="anchor-nav">
        <ul>
          <li><a href="#overview" onClick={(e) => handleSmoothScroll(e, "overview")}>Overview</a></li>
          <li><a href="#features"onClick={(e) => handleSmoothScroll(e, "features")}>Features</a></li>
          <li><a href="#benefits"onClick={(e) => handleSmoothScroll(e, "benefits")}>Benefits</a></li>
          <li><a href="#solutions"onClick={(e) => handleSmoothScroll(e, "solutions")}>Solutions</a></li>
        </ul>
      </nav>

      {/* Include each section component */}
      
    </div>
  );
};

export default AnchorSection;
