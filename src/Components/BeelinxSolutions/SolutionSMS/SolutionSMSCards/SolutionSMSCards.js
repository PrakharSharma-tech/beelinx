// React Component
import React from "react";
import "./SolutionSMSCards.css";

const SolutionSMSCards = () => {
  const features = [
    {
      type: "USE CASE",
      title: "Automate your workday",
      description: "Create custom workflows that are powered by automation. Streamline your processes for faster project delivery.",
      linkText: "Read more →",
    },
    {
      type: "FEATURE",
      title: "Build one-click Gantt charts",
      description: "Visualize your plans, priorities, and progress with adjustable Gantt charts you can build in seconds.",
      linkText: "Read more →",
    },
    {
      type: "FEATURE",
      title: "Use custom Kanban boards",
      description: "Get a crystal clear picture of your teams’ workload, and use team-specific statuses to show progress.",
      linkText: "Read more →",
    },
    {
      type: "USE CASE",
      title: "Maximize your portfolio",
      description: "Keep tabs on performance across projects. Use analytics to make smarter decisions and boost results.",
      linkText: "Read more →",
      highlight: true,
    },
    {
      type: "DEPLOYMENT SERVICES",
      title: "Get the support you need",
      description: "Our expert consulting and training ensures your team always stays on track.",
      linkText: "Read more →",
    },
    {
      type: "SECURITY",
      title: "Protect your data",
      description: "Beelinx’s enterprise-grade security keeps your product details private and secure.",
      linkText: "Read more →",
    },
  ];

  return (
    <div className="features-container2">
      <h1 className="features-header2">Discover Beelinx’s other features</h1>
      <div className="features-grid2">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-card2 ${feature.highlight ? "highlight" : ""}`}
            style={{width:"450px"}}
          >
            <p className="feature-type2">{feature.type}</p>
            <h3 className="feature-title2">{feature.title}</h3>
            <p className="feature-description2">{feature.description}</p>
            <a href="#" className="feature-link2">
              {feature.linkText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionSMSCards;
