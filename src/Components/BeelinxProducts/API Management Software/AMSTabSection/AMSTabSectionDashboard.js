import React, { useState } from "react";
import "./AMSTabSectionDashboard.css";

const AMSTabSectionDashboard = () => {
  const tabs = [
    {
        id: 1,
        title: "OKRs",
        description: (
          <React.Fragment>
            <h3 style={{color:"black"}}>Highly visual, data-rich project dashboards</h3>
           <p style={{color:"black"}} > Get a detailed overview of project and team progress with Beelinx’s new project dashboards.

</p>
          </React.Fragment>
        ),
        image: "/ViewsBeelinx.png", // Replace with your image path
        link: "#views",
      },
      
    {
      id: 2,
      title: "Budgeting",
      description:(
        <React.Fragment>
          <h3 style={{color:"black"}}>Achieve company objectives</h3>
          <p style={{color:"black"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </React.Fragment>
      ),
      image: "BeelinxDashboard.png", // Replace with your image path
      link: "#automation-ai",
    },
    {
      id: 3,
      title: "Automation",
      description:
      (
        <React.Fragment>
          <h3 style={{color:"black"}}>Achieve company objectives</h3>
          <p style={{color:"black"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </React.Fragment>
      ),      image: "mobile apps.png", // Replace with your image path
      link: "#mobile-apps",
    },
    {
      id: 4,
      title: "Requests",
      description:
      (
        <React.Fragment>
          <h3 style={{color:"black"}}>Achieve company objectives</h3>
          <p style={{color:"black"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </React.Fragment>
      ),      image: "BeelinxDashboard.png", // Replace with your image path
      link: "#dashboard",
    },
    {
      id: 5,
      title: "Analytics",
      description:
      (
        <React.Fragment>
          <h3 style={{color:"black"}}>Achieve company objectives</h3>
          <p style={{color:"black"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </React.Fragment>
      ),      image: "/ViewsBeelinx.png", // Replace with your image path
      link: "#proofing",
    },
   
  ];

  const [activeTab, setActiveTab] = useState(1);

  return (
    <div style={{backgroundColor:"white"}}  id="features">
      <h2 style={{ textAlign: "center", padding: 30 , fontSize:"30px" , color:"black"}}>
      Enterprise-ready pre-built workflows
      </h2>
      <p style={{ textAlign: "center", paddingBottom: 30 , color:"black"}}>
      Use pre-built or customizable workflows that support your wall-to-wall processes. You can configure them as needed to maximize your team’s productivity.
      </p>
      <div className="tab-section">
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <div key={tab.id} className="content">
                  <div className="text-content">
                   
                    <p style={{fontSize:"30px"}}>{tab.description}</p>
                    {/* <a
                      href={tab.link}
                      className="learn-more-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more
                    </a> */}
                  </div>
                  <div className="image-content">
                    <img src={tab.image} alt={tab.title} />
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default AMSTabSectionDashboard;
