import React from 'react';
import './Clients-Tour.css';

const logos = [
  { name: 'Slack', src: 'Logos/slack.svg' },
  { name: 'Microsoft', src: 'Logos/microsoft.svg' },
  { name: 'Google', src: 'Logos/google.svg' },
  { name: 'Slack', src: 'Logos/slack.svg' },
  { name: 'Microsoft', src: 'Logos/microsoft.svg' },
  { name: 'Google', src: 'Logos/google.svg' },
  { name: 'Hubspot', src: 'Logos/hubspot.svg' },
  { name: 'Salesforce', src: 'Logos/salesforce.svg' },
  { name: 'Salesforce', src: 'Logos/salesforce.svg' },
  { name: 'Hubspot', src: 'Logos/hubspot.svg' },
  // { name: 'Zoom', src: 'path/to/zoom-logo.png' },
  // { name: 'Tableau', src: 'path/to/tableau-logo.png' },
  // { name: 'MS Teams', src: 'path/to/teams-logo.png' },
  { name: 'Slack', src: 'Logos/slack.svg' },
  { name: 'Hubspot', src: 'Logos/hubspot.svg' },
  { name: 'Microsoft', src: 'Logos/microsoft.svg' },
  { name: 'Google', src: 'Logos/google.svg' },
  { name: 'Hubspot', src: 'Logos/hubspot.svg' },
  { name: 'Slack', src: 'Logos/slack.svg' },
  { name: 'Jira', src: 'Logos/jira.svg' },
  { name: 'MediaVelet', src: 'Logos/mediavelet.svg' },
  { name: 'netsuite', src: 'Logos/netsuite.svg' },
  { name: 'Hubspot', src: 'Logos/hubspot.svg' },
  { name: 'Microsoft', src: 'Logos/microsoft.svg' },
  { name: 'Google', src: 'Logos/google.svg' },{ name: 'Slack', src: 'Logos/slack.svg' },
  { name: 'Hubspot', src: 'Logos/hubspot.svg' },
  { name: 'Microsoft', src: 'Logos/microsoft.svg' },
  { name: 'Jira', src: 'Logos/jira.svg' },
  { name: 'MediaVelet', src: 'Logos/mediavelet.svg' },
  { name: 'Google', src: 'Logos/google.svg' },{ name: 'Slack', src: 'Logos/slack.svg' },
  { name: 'Microsoft', src: 'Logos/microsoft.svg' },
  { name: 'Hubspot', src: 'Logos/hubspot.svg' },
  { name: 'netsuite', src: 'Logos/netsuite.svg' },
  { name: 'Google', src: 'Logos/google.png' },{ name: 'Slack', src: 'Logos/slack.svg' },
  { name: 'Microsoft', src: 'Logos/microsoft.svg' },
  { name: 'Hubspot', src: 'Logos/hubspot.svg' },
  { name: 'Google', src: 'Logos/google.svg' },{ name: 'Slack', src: 'Logos/slack.svg' },
  { name: 'Microsoft', src: 'Logos/microsoft.svg' },
  { name: 'Hubspot', src: 'Logos/hubspot.svg' },
  { name: 'Google', src: 'Logos/google.svg' },
  { name: 'Slack', src: 'Logos/slack.svg' },
  { name: 'Jira', src: 'Logos/jira.svg' },
  { name: 'MediaVelet', src: 'Logos/mediavelet.svg' },
  { name: 'Okta', src: 'Logos/Okta.svg' },
  { name: 'Microsoft', src: 'Logos/microsoft.svg' },
  { name: 'Google', src: 'Logos/google.png' },{ name: 'Slack', src: 'Logos/slack.svg' },
  { name: 'Microsoft', src: 'Logos/microsoft.svg' },
  { name: 'Jira', src: 'Logos/jira.svg' },
  { name: 'MediaVelet', src: 'Logos/mediavelet.svg' },
  { name: 'Okta', src: 'Logos/Okta.svg' },
  { name: 'Jira', src: 'Logos/jira.svg' },
  { name: 'MediaVelet', src: 'Logos/mediavelet.svg' },
  { name: 'Google', src: 'Logos/google.svg' },{ name: 'Slack', src: 'Logos/slack.svg' },
  { name: 'Microsoft', src: 'Logos/microsoft.svg' },
  { name: 'Jira', src: 'Logos/jira.svg' },
  { name: 'MediaVelet', src: 'Logos/mediavelet.svg' },
  { name: 'netsuite', src: 'Logos/netsuite.svg' },
  { name: 'Hubspot', src: 'Logos/hubspot.svg' },
  { name: 'Okta', src: 'Logos/Okta.svg' },
  { name: 'Google', src: 'Logos/google.svg' },
  { name: 'Jira', src: 'Logos/jira.svg' },
  { name: 'MediaVelet', src: 'Logos/mediavelet.svg' },
  { name: 'Slack', src: 'Logos/slack.svg' },
  { name: 'Okta', src: 'Logos/Okta.svg' },
  { name: 'netsuite', src: 'Logos/netsuite.svg' },
  { name: 'Jira', src: 'Logos/jira.svg' },
  { name: 'MediaVelet', src: 'Logos/mediavelet.svg' },
  { name: 'Google', src: 'Logos/google.svg' },{ name: 'Slack', src: 'Logos/slack.svg' },
  { name: 'Microsoft', src: 'Logos/microsoft.svg' },
  { name: 'Okta', src: 'Logos/Okta.svg' },
  { name: 'netsuite', src: 'Logos/netsuite.svg' },
];

const IntegrationsSection = () => {
  const duplicatedLogos = [...logos, ...logos]; // Duplicate logos for seamless scrolling

  return (
    <div className="integrations-section">
      <h2>Integrate and automate</h2>
      <p>
      Your team likely uses dozens of apps, each with their own quirks. Beelinx Integrate enables you to make your chosen apps work how you want, letting you achieve levels of productivity and automation you never thought possible.
      </p>
      <div className="logo-container">
        <div className="logo-row top-row">
          {duplicatedLogos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.name} style={{width:"40px"}}      className="logo" />
          ))}
        </div>
        <div className="logo-row middle-row">
          {duplicatedLogos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.name} style={{width:"40px"}} className="logo" />
          ))}
        </div>
        <div className="logo-row bottom-row">
          {duplicatedLogos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.name} style={{width:"40px"}} className="logo" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationsSection;
