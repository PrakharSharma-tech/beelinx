import React from 'react';

const FeatureSection = () => {
  return (
    <div style={styles.container}>
      <div style={styles.featureRow}>
        <div style={styles.featureBubble}>Workflow automation and integrations</div>
        <div style={styles.featureBubble}>Admin and security</div>
        <div style={styles.featureBubble}>Resource and capacity planning</div>
      </div>
      <div style={styles.featureRow}>
        <div style={styles.featureBubble}>Unlimited users</div>
        <div style={styles.featureBubble}>Work management and reporting</div>
        <div style={styles.featureBubble}>Collaboration</div>
        <div style={styles.featureBubble}>Work Intelligence®</div>
      </div>
      <button style={styles.button}>See all Beelinx features</button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'white', // Dark background color
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  featureRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '20px',
    gap: '10px', // Add spacing between bubbles
  },
  featureBubble: {
    backgroundColor: '#E9F9F9', // Light bubble background color
    borderRadius: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  button: {
    backgroundColor: '#00D877', // Green button background color
    color: '#fff',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#00C66E', // Slightly darker green for hover
  },
};

export default FeatureSection;
