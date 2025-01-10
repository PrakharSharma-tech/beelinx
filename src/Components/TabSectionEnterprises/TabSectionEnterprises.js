import React, { useState } from "react";
import "./TabSectionEnterprises.css";

const TabSection2 = () => {
  const tabs = [
    {
        id: 1,
        title: "Expertise",
        description: (
          <React.Fragment>
            <h3 style={{color:"black"}}>Expertise</h3>
           <p style={{color:"black"}} >With years of experience and a proven track record of success, we have the expertise to tackle even the most complex technology challenges. Our team consists of industry experts who are passionate about what they do and are dedicated to delivering the best possible outcomes for our clients</p>
          </React.Fragment>
        ),
        image: "/ViewsBeelinx.png", // Replace with your image path
        link: "#views",
      },
      
    {
      id: 2,
      title: "Innovation",
      description:(
        <React.Fragment>
          <h3 style={{color:"black"}}>Innovation</h3>
          <p style={{color:"black"}}>We are passionate about innovation and are constantly exploring new technologies and methodologies to deliver cutting-edge solutions that drive business growth. Our commitment to innovation ensures that our clients benefit from the latest advancements in technology</p>
        </React.Fragment>
      ),
      image: "BeelinxDashboard.png", // Replace with your image path
      link: "#automation-ai",
    },
    {
      id: 3,
      title: "Client-Centric Approach",
      description:
      (
        <React.Fragment>
          <h3 style={{color:"black"}}>Client-Centric Approach</h3>
          <p style={{color:"black"}}>Our clients are at the heart of everything we do. We are committed to building long-term partnerships based on trust, transparency, and mutual success. Our client-centric approach ensures that we understand our clients' needs and deliver solutions that provide real value</p>
        </React.Fragment>
      ),      image: "mobile apps.png", // Replace with your image path
      link: "#mobile-apps",
    },
    {
      id: 4,
      title: "Quality Assurance",
      description:
      (
        <React.Fragment>
          <h3 style={{color:"black"}}>Quality Assurance</h3>
          <p style={{color:"black"}}>Quality is our top priority. We adhere to the highest standards of quality assurance to ensure that our solutions are reliable, secure, and perform at the highest level. Our rigorous testing and quality control processes guarantee that our clients receive the best possible products and services</p>
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
      What Sets Us Apart
      </h2>
      <p style={{ textAlign: "center", paddingBottom: 30 , color:"black", fontSize:"30px"}}>
      What sets us apart: unmatched expertise, driven innovation, client-centric approach, and commitment to uncompromising quality.
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

export default TabSection2;
