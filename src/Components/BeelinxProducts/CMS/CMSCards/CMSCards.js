import React from "react";
import "./CMSCards.css";

const CMSCardDashboard = () => {
  return (
    <div className="platform-section">
      <div className="platform-header">
        <h2 className="platform-title">API Management Software</h2>
        <p className="platform-description">
        A powerful platform designed to manage, monitor, and secure APIs throughout their lifecycle, enabling seamless 
integration and innovation.       </p>
      </div>
      <div className="platform-features">
        <div style={{backgroundColor:"white"}}   className="feature">
          <img
            src="MeetThePlatform1.svg"
            alt="Work your way"
            className="feature-icon3"
          />
          <h3 className="feature-title">Work your way</h3>
          <p className="feature-description">
            Create your dream workspace with customizable views that suit your
            team. Switch views depending on project needs and add widgets that
            allow you to visualize every element.
          </p>
        </div>
        <div  style={{backgroundColor:"white"}} className="feature">
          <img
            src="MeetThePlatform1.svg"
            alt="Design custom processes"
            className="feature-icon3"
            
          />
          <h3 className="feature-title">Design custom processes</h3>
          <p className="feature-description">
            Every team works differently. In Beelinx, teams can design unique
            processes and workflows that work for them — and collaborate across
            teams and departments to achieve full organizational alignment.
          </p>
        </div>
        <div style={{backgroundColor:"white"}} className="feature">
          <img
            src="MeetThePlatform1.svg"
            alt="Scale as you grow"
            className="feature-icon3"
          />
          <h3 className="feature-title">Scale as you grow</h3>
          <p className="feature-description">
            The more your organization grows, the more powerful Beelinx is.
            Supporting complex workflows is where we shine. Gain visibility
            across tasks and projects, boosting productivity across your org.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CMSCardDashboard;
