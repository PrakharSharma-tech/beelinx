import React from 'react';

const BeelinxAIComponent = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: '#F6F6FC',
        borderRadius: '8px',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'left',
        margin: '40px auto 90px auto',
        maxWidth: '1200px',
        height: 'auto', // Adjust for content height on mobile
      }}
    >
      {/* Left Section */}
      <div
        style={{
          flex: '1',
          paddingLeft: '20px',
          paddingBottom: '20px',
        }}
      >
        <h2
          style={{
            color: '#1D1D1D',
            fontWeight: 'bold',
            marginBottom: '16px',
            fontSize: '50px',
          }}
        >
          Discover the future of work with{' '}
          <span style={{ color: '#6A5ACD' }}>Beelinx AI</span>
        </h2>
        <p
          style={{
            color: '#333',
            marginBottom: '16px',
            fontSize: '20px',
          }}
        >
          Beelinx’s powerful generative AI is available for all plans — at no
          extra cost.
        </p>
        <ul
          style={{
            color: '#333',
            paddingLeft: '20px',
            marginBottom: '16px',
            fontSize: '20px',
            listStylePosition: 'inside',
          }}
        >
          <li>Generate project plans and campaign</li>
          <li>Check for mistakes and change the tone</li>
          <li>Translate comments into different languages</li>
          <li>Discover action items in your meeting notes</li>
          <li>Summarize conversations to identify key tasks</li>
        </ul>
        <div>
          <button
            style={{
              backgroundColor: '#00C853',
              color: 'white',
              padding: '20px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginRight: '10px',
              marginTop: '20px',
              fontSize: '20px',
            }}
          >
            Try Beelinx for free
          </button>
          <a
            href="#"
            style={{
              color: '#1D72E8',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '20px',
            }}
          >
            Learn more →
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div
        style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src="/Beelinx-pricing-discover.avif"
          alt="Beelinx AI demo"
          style={{
            width: '100%',
            maxWidth: '400px',
            borderRadius: '8px',
          }}
        />
      </div>
    </div>
  );
};

export default BeelinxAIComponent;
