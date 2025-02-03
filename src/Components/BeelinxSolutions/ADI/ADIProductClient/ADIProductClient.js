import React from "react";
import styled, { keyframes } from "styled-components";

// Logos array
const logos = [
  { name: "Slack", src: "Logos/slack.svg" },
  { name: "Microsoft", src: "Logos/microsoft.svg" },
  { name: "Google", src: "Logos/google.svg" },
  { name: "Hubspot", src: "Logos/hubspot.svg" },
  { name: "Salesforce", src: "Logos/salesforce.svg" },
  { name: "Jira", src: "Logos/jira.svg" },
  { name: "MediaVelet", src: "Logos/mediavelet.svg" },
  { name: "netsuite", src: "Logos/netsuite.svg" },
  { name: "Okta", src: "Logos/Okta.svg" },
  { name: "Slack", src: "Logos/slack.svg" },
  { name: "Microsoft", src: "Logos/microsoft.svg" },
  { name: "Google", src: "Logos/google.svg" },
  { name: "Hubspot", src: "Logos/hubspot.svg" },
  { name: "Salesforce", src: "Logos/salesforce.svg" },
  { name: "Jira", src: "Logos/jira.svg" },
  { name: "MediaVelet", src: "Logos/mediavelet.svg" },
  { name: "netsuite", src: "Logos/netsuite.svg" },
  { name: "Okta", src: "Logos/Okta.svg" },
  { name: "Slack", src: "Logos/slack.svg" },
  { name: "Microsoft", src: "Logos/microsoft.svg" },
  { name: "Google", src: "Logos/google.svg" },
  { name: "Hubspot", src: "Logos/hubspot.svg" },
  { name: "Salesforce", src: "Logos/salesforce.svg" },
  { name: "Jira", src: "Logos/jira.svg" },
  { name: "MediaVelet", src: "Logos/mediavelet.svg" },
  { name: "netsuite", src: "Logos/netsuite.svg" },
  { name: "Okta", src: "Logos/Okta.svg" },
];

// Duplicate logos for seamless scrolling
const duplicatedLogos = [...logos, ...logos];

// Animation for left-to-right scrolling
const scrollLeft = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;

// Animation for right-to-left scrolling
const scrollRight = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;

// Styled Components
const Section = styled.div`
  background-color: #061e4f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 0px; /* Reduced top padding */
  min-height: 500px;
  overflow: hidden;
`;

const Title = styled.h2`
  color: white;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  color: white;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    max-width: 600px;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
    max-width: 800px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-bottom:20px;
  animation: ${({ reverse }) => (reverse ? scrollRight : scrollLeft)} 20s
    linear infinite;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

const Logo = styled.img`
  width: 100px; /* Increased logo size for mobile */
  height: auto;

  @media (min-width: 768px) {
    width: 80px; /* Increased logo size for tablets */
  }

  @media (min-width: 1024px) {
    width: 100px; /* Increased logo size for desktops */
  }
`;

const ProductClient = () => {
  return (
    <Section>
      <Title>Sync with 400+ other tools</Title>
      <Description>
        Keep your flow uninterrupted – Beelinx’s software for product managers
        offers 400+ integrations that combine your apps in one easy-to-use
        interface. Add product management software to your everyday tools.
      </Description>
      <LogoContainer>
        <LogoRow>
          {duplicatedLogos.map((logo, index) => (
            <Logo key={index} src={logo.src} alt={logo.name} />
          ))}
        </LogoRow>
        <LogoRow reverse>
          {duplicatedLogos.map((logo, index) => (
            <Logo key={index} src={logo.src} alt={logo.name} />
          ))}
        </LogoRow>
        <LogoRow>
          {duplicatedLogos.map((logo, index) => (
            <Logo key={index} src={logo.src} alt={logo.name} />
          ))}
        </LogoRow>
      </LogoContainer>
    </Section>
  );
};

export default ProductClient;
