import React from "react";
import "./NextGen.css";

const NextGen = () => {
  const analyticsData = [
    {
      title: "Analyze and report on marketing performance",
      description:
        "See how long approvals take, monitor and compare the success of your campaigns, view overlapping calendar items, and utilize valuable data to track projects and make better efficiency decisions.",
      role: "MARKETERS",
      image: "nextgenProduct1.png", // Replace with actual path to the image
    },
    {
      title: "Simplify client management",
      description:
        "Access real-time project information across your client and project portfolio. Report on capacity, effort, budget, and time tracking metrics in easy-to-read dashboards for heightened productivity.",
      role: "PROFESSIONAL SERVICES TEAMS",
      image: "nextgenProduct2.png", // Replace with actual path to the image
    },
    {
      title: "Get complete project portfolio visibility and control",
      description:
        "See at a high level which team member or task is on/off track and visualize aggregated reports and dashboards for all projects and project teams, whatever stage they’re at.",
      role: "PMO OFFICES",
      image: "nextgenProd.png", // Replace with actual path to the image
    },
    {
      title: "Monitor and accelerate multiple creative projects",
      description:
        "Showcase the information you need using customizable reports and a drillable project status dashboard to track ongoing progress, measure approval time, and count rounds of corrections.",
      role: "CREATIVE AND DESIGN TEAMS",
      image: "nextgenProduct4.png", // Replace with actual path to the image
    },
  ];

  return (
    <section className="analytics-section">
      <h2>Next-gen analytics at every level</h2>
      <p>
        Whether you need an individual, team, or executive project dashboard,
        Beelinx supports use cases for your team.
      </p>
      <div className="analytics-cards">
        {analyticsData.map((item, index) => (
          <div className="analytics-card" key={index}>
            <img src={item.image} alt={item.role} className="analytics-image" />
            <h4>{item.role}</h4>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NextGen;
