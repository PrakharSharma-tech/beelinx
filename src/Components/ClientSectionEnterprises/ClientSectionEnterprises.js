import React from 'react';
import './Clients.css';

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

const IntegrationsSectionEnterprises = () => {
  const duplicatedLogos = [...logos, ...logos]; // Duplicate logos for seamless scrolling

  return (
    <div style={{backgroundColor:"white"}}   className="integrations-section">
      <h2 style={{color:"#121330"}}>Consolidate your tech stack and workflows</h2>
      <p style={{color:"#121330"}}>
      Easily integrate your workflows by connecting over 400 cloud and on-premise apps to Beelinx centralized work management platform. Enable scale through data consolidation from disparate tools via API.      </p>
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
      <button style={{backgroundColor: '#00D877',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop:"40px"}}>Try Beelinx for free</button>
    </div>
  );
};

export default IntegrationsSectionEnterprises;
