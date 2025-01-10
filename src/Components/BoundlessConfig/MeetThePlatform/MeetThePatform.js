import React from "react";
import "./MeetThePlatform.css";

const MeetThePlatform = () => {
  return (
    <div className="platform-section">
      <div className="platform-header">
        <h2 className="platform-title">Join the platform that evolves with you</h2>
        <p className="platform-description">
        Let Beelinx work the way you do—breaking down barriers and fostering true collaboration, without changing your processes.
        </p>
      </div>
      <div className="platform-features">
        <div t   className="feature">
          <img
            src="MeetThePlatform1.svg"
            alt="Work your way"
            className="feature-icon-MeetThePlatform-Beelinx"
          />
          <h3 className="feature-title">Do it your way</h3>
          <p className="feature-description">
          Craft a personalized workspace with views that align with your team's needs. Switch views effortlessly and incorporate widgets to visualize each aspect.
          </p>
        </div>
        <div className="feature">
          <img
            src="MeetThePlatform1.svg"
            alt="Design custom processes"
            className="feature-icon-MeetThePlatform-Beelinx"
          />
          <h3 className="feature-title">Create personalized workflows</h3>
          <p className="feature-description">
          Each team operates differently. Beelinx allows teams to design their own workflows and processes while working together across teams and departments for seamless alignment.
          </p>
        </div>
        <div className="feature">
          <img
            src="MeetThePlatform1.svg"
            alt="Scale as you grow"
            className="feature-icon-MeetThePlatform-Beelinx"
          />
          <h3 className="feature-title">Grow at your own pace</h3>
          <p className="feature-description">
          The larger your organization, the more Beelinx shines. We're built to handle complex workflows, giving you full visibility into tasks and projects to boost productivity across your entire org.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetThePlatform;
