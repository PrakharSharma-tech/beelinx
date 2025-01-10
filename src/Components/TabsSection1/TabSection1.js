import React, { useState } from "react";
import "./TabSection1.css";

const TabSection = () => {
  const tabs = [
    {
      id: 1,
      title: "Business Consulting",
      description:
        "Our consulting services help organizations leverage APIs to drive growth, unlock new revenue opportunities, and optimize strategies that align with business goals.",
      image: "/ViewsBeelinx.png", // Replace with your image path
      link: "#views",
    },
    {
      id: 2,
      title: "API Development",
      description:
        "Our API development services offer end-to-end support in designing, building, and deploying secure, scalable APIs that are fully tailored to your unique business needs and goals.",
      image: "BeelinxDashboard.png", // Replace with your image path
      link: "#automation-ai",
    },
    {
      id: 3,
      title: "API Management",
      description:
        "Our API Management Services offer powerful tools to manage, secure, and analyze your APIs, ensuring optimal performance, security, and reliability throughout their lifecycle.",
      image: "mobile apps.png", // Replace with your image path
      link: "#mobile-apps",
    },
    {
      id: 4,
      title: "Integration Tool Kit",
      description:
        "Simplify API integration with our comprehensive tool kit, designed to streamline integration, ensure smooth operation, and enhance overall system functionality and performance.",
      image: "BeelinxDashboard.png", // Replace with your image path
      link: "#dashboard",
    },
    {
      id: 5,
      title: "Technical Services",
      description:
        "Our technical services offer expert support, guidance, and troubleshooting for developers, users, and clients, ensuring smooth API integration and prompt issue resolution.",
      image: "/ViewsBeelinx.png", // Replace with your image path
      link: "#proofing",
    },
    // {
    //   id: 6,
    //   title: "Request Forms",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //   image: "path/to/request-forms-image.png", // Replace with your image path
    //   link: "#request-forms",
    // },
  ];

  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <h2 style={{ textAlign: "center", padding: 30, fontSize:"30px" }}>
        Managed Services
      </h2>
      <p style={{ textAlign: "center", paddingBottom: 30 , alignItems:"center", justifyContent:"center"}}>
      Leverage Beelinx's managed services to ensure your business operates smoothly and efficiently. 
      Our comprehensive managed services cover a wide range of needs, including business consulting, API development, API management, integration toolkits, and technical support, helping you achieve digital transformation and maintain a competitive edge.</p>
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
                    <h3 style={{fontSize:"40px"}}>{tab.title}</h3>
                    <p style={{fontSize:"30px"}}>{tab.description}</p>
                    <a
                      href={tab.link}
                      className="learn-more-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more
                    </a>
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

export default TabSection;
