import React from "react";
import styled from "styled-components";

// Styled components
const AnalyticsSection = styled.section`
  background-color: #f2f7f6;
  color: #2d3e50;
  text-align: center;
  padding: 50px 20px;
  font-family: Arial, sans-serif;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
`;

const AnalyticsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 2fr));
  gap: 80px;
  padding: -10px;

  /* Mobile Responsiveness (max-width: 480px) */
  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* One column grid for mobile */
    gap: 10px; /* Smaller gap between cards on mobile */
    padding: -10px;
  }

  /* Tablet Responsiveness (max-width: 768px) */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns grid on tablets */
    gap: 10px; /* Adjust gap for tablets */
  }
`;

const AnalyticsCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 50px;
  text-align: left;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  /* Mobile Responsiveness (max-width: 480px) */
  @media (max-width: 480px) {
    padding: 20px; /* Reduce padding on mobile */
  }

  /* Tablet Responsiveness (max-width: 768px) */
  @media (max-width: 768px) {
    padding: 30px; /* Adjust padding on tablet */
  }
`;

const RoleHeading = styled.h4`
  font-size: 0.9rem;
  color: #00a99d;
  font-weight: 600;
  margin: 10px 0;
  text-transform: uppercase;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #2d3e50;
`;

const AnalyticsImage = styled.img`
  width: 150px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;

  /* Mobile Responsiveness (max-width: 480px) */
  @media (max-width: 480px) {
    width: 120px; /* Smaller image size for mobile */
    height: 80px;
  }

  /* Tablet Responsiveness (max-width: 768px) */
  @media (max-width: 768px) {
    width: 130px; /* Slightly smaller image size for tablets */
    height: 90px;
  }
`;

// React component
const ERPNextGen = () => {
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
    <AnalyticsSection>
      <SectionTitle>Next-gen analytics at every level</SectionTitle>
      <SectionDescription>
        Whether you need an individual, team, or executive project dashboard,
        Beelinx supports use cases for your team.
      </SectionDescription>
      <AnalyticsCards>
        {analyticsData.map((item, index) => (
          <AnalyticsCard key={index}>
            <AnalyticsImage src={item.image} alt={item.role} />
            <RoleHeading>{item.role}</RoleHeading>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
          </AnalyticsCard>
        ))}
      </AnalyticsCards>
    </AnalyticsSection>
  );
};

export default ERPNextGen;
