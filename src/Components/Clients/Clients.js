import React from 'react';
import './Clients.css';

const logos = [
  { name: 'IB', src: 'Logos/Indian Bank with white background.png' },
  { name: 'yes Bank', src: 'Logos/Yes-Bank Image white background.png' },
  { name: 'Axis Bank', src: 'Logos/Axis Bank.png' },
  { name: 'Canara Bank', src: 'Logos/canara-bank.png' },
  { name: 'Bank Of Maharashtra', src: 'Logos/Bank of Maharashtra.png' },
  { name: 'RBL', src: 'Logos/RBL-Bank Image.png' },
  { name: 'IB', src: 'Logos/Indian Bank with white background.png' },
  { name: 'yes Bank', src: 'Logos/Yes-Bank Image white background.png' },
  { name: 'Axis Bank', src: 'Logos/Axis Bank.png' },
  { name: 'Canara Bank', src: 'Logos/canara-bank.png' },
  { name: 'Bank Of Maharashtra', src: 'Logos/Bank of Maharashtra.png' },
  { name: 'RBL', src: 'Logos/RBL-Bank Image.png' },
  { name: 'IB', src: 'Logos/Indian Bank with white background.png' },
  { name: 'yes Bank', src: 'Logos/Yes-Bank Image white background.png' },
  { name: 'Axis Bank', src: 'Logos/Axis Bank.png' },
  { name: 'Canara Bank', src: 'Logos/canara-bank.png' },
  { name: 'Bank Of Maharashtra', src: 'Logos/Bank of Maharashtra.png' },
  { name: 'RBL', src: 'Logos/RBL-Bank Image.png' },
  { name: 'IB', src: 'Logos/Indian Bank with white background.png' },
  { name: 'yes Bank', src: 'Logos/Yes-Bank Image white background.png' },
  { name: 'Axis Bank', src: 'Logos/Axis Bank.png' },
  { name: 'Canara Bank', src: 'Logos/canara-bank.png' },
  { name: 'Bank Of Maharashtra', src: 'Logos/Bank of Maharashtra.png' },
  { name: 'RBL', src: 'Logos/RBL-Bank Image.png' },
  { name: 'IB', src: 'Logos/Indian Bank with white background.png' },
  { name: 'yes Bank', src: 'Logos/Yes-Bank Image white background.png' },
  { name: 'Axis Bank', src: 'Logos/Axis Bank.png' },
  { name: 'Canara Bank', src: 'Logos/canara-bank.png' },
  { name: 'Bank Of Maharashtra', src: 'Logos/Bank of Maharashtra.png' },
  { name: 'RBL', src: 'Logos/RBL-Bank Image.png' },
    // { name: 'Hubspot', src: 'Logos/.svg' },
  // { name: 'Salesforce', src: 'Logos/salesforce.svg' },
  // { name: 'Salesforce', src: 'Logos/salesforce.svg' },
  // { name: 'Hubspot', src: 'Logos/hubspot.svg' },
  // { name: 'Zoom', src: 'path/to/zoom-logo.png' },
  // { name: 'Tableau', src: 'path/to/tableau-logo.png' },
  // { name: 'MS Teams', src: 'path/to/teams-logo.png' },
  // { name: 'Slack', src: 'Logos/slack.svg' },
  // { name: 'Hubspot', src: 'Logos/hubspot.svg' },
  // { name: 'Microsoft', src: 'Logos/microsoft.svg' },
  // { name: 'Google', src: 'Logos/google.svg' },
  // { name: 'Hubspot', src: 'Logos/hubspot.svg' },
  // { name: 'Slack', src: 'Logos/slack.svg' },
  // { name: 'Jira', src: 'Logos/jira.svg' },
  // { name: 'MediaVelet', src: 'Logos/mediavelet.svg' },
  // { name: 'netsuite', src: 'Logos/netsuite.svg' },
  // { name: 'Hubspot', src: 'Logos/hubspot.svg' },
  // { name: 'Microsoft', src: 'Logos/microsoft.svg' },
  // { name: 'Google', src: 'Logos/google.svg' },{ name: 'Slack', src: 'Logos/slack.svg' },
  // { name: 'Hubspot', src: 'Logos/hubspot.svg' },
  // { name: 'Microsoft', src: 'Logos/microsoft.svg' },
  // { name: 'Jira', src: 'Logos/jira.svg' },
  // { name: 'MediaVelet', src: 'Logos/mediavelet.svg' },
  // { name: 'Google', src: 'Logos/google.svg' },{ name: 'Slack', src: 'Logos/slack.svg' },
  // { name: 'Microsoft', src: 'Logos/microsoft.svg' },
  // { name: 'Hubspot', src: 'Logos/hubspot.svg' },
  // { name: 'netsuite', src: 'Logos/netsuite.svg' },
  // { name: 'Google', src: 'Logos/google.png' },{ name: 'Slack', src: 'Logos/slack.svg' },
  // { name: 'Microsoft', src: 'Logos/microsoft.svg' },
  // { name: 'Hubspot', src: 'Logos/hubspot.svg' },
  // { name: 'Google', src: 'Logos/google.svg' },{ name: 'Slack', src: 'Logos/slack.svg' },
  // { name: 'Microsoft', src: 'Logos/microsoft.svg' },
  // { name: 'Hubspot', src: 'Logos/hubspot.svg' },
  // { name: 'Google', src: 'Logos/google.svg' },
  // { name: 'Slack', src: 'Logos/slack.svg' },
  // { name: 'Jira', src: 'Logos/jira.svg' },
  // { name: 'MediaVelet', src: 'Logos/mediavelet.svg' },
  // { name: 'Okta', src: 'Logos/Okta.svg' },
  // { name: 'Microsoft', src: 'Logos/microsoft.svg' },
  // { name: 'Google', src: 'Logos/google.png' },{ name: 'Slack', src: 'Logos/slack.svg' },
  // { name: 'Microsoft', src: 'Logos/microsoft.svg' },
  // { name: 'Jira', src: 'Logos/jira.svg' },
  // { name: 'MediaVelet', src: 'Logos/mediavelet.svg' },
  // { name: 'Okta', src: 'Logos/Okta.svg' },
  // { name: 'Jira', src: 'Logos/jira.svg' },
  // { name: 'MediaVelet', src: 'Logos/mediavelet.svg' },
  // { name: 'Google', src: 'Logos/google.svg' },{ name: 'Slack', src: 'Logos/slack.svg' },
  // { name: 'Microsoft', src: 'Logos/microsoft.svg' },
  // { name: 'Jira', src: 'Logos/jira.svg' },
  // { name: 'MediaVelet', src: 'Logos/mediavelet.svg' },
  // { name: 'netsuite', src: 'Logos/netsuite.svg' },
  // { name: 'Hubspot', src: 'Logos/hubspot.svg' },
  // { name: 'Okta', src: 'Logos/Okta.svg' },
  // { name: 'Google', src: 'Logos/google.svg' },
  // { name: 'Jira', src: 'Logos/jira.svg' },
  // { name: 'MediaVelet', src: 'Logos/mediavelet.svg' },
  // { name: 'Slack', src: 'Logos/slack.svg' },
  // { name: 'Okta', src: 'Logos/Okta.svg' },
  // { name: 'netsuite', src: 'Logos/netsuite.svg' },
  // { name: 'Jira', src: 'Logos/jira.svg' },
  // { name: 'MediaVelet', src: 'Logos/mediavelet.svg' },
  // { name: 'Google', src: 'Logos/google.svg' },{ name: 'Slack', src: 'Logos/slack.svg' },
  // { name: 'Microsoft', src: 'Logos/microsoft.svg' },
  // { name: 'Okta', src: 'Logos/Okta.svg' },
  // { name: 'netsuite', src: 'Logos/netsuite.svg' },
];

const IntegrationsSection = () => {
  const duplicatedLogos = [...logos, ...logos]; // Duplicate logos for seamless scrolling

  return (
    <div className="integrations-section">
      <h2>Integrate apps with just a few clicks</h2>
      <p>
        Connect your existing apps and workflows with pre-made integrations available for 400+ popular apps, plus custom integrations for more advanced users.
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
