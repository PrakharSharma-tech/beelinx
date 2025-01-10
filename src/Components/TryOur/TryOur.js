import React from 'react';

const TryBeelinxSection = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#F8FAFC', height:"450px" , justifyContent:"center"}}>
      {/* Heading Section */}
      <h1 style={{ fontSize: '40px', fontWeight: 'bold', color: '#1D1D1D', marginBottom: '16px', textAlign:"center"}}>
        Try our powerful work management software today for free
      </h1>
      <p style={{ fontSize: '18px', color: '#555', marginBottom: '32px' }}>
        Sign up for a free two-week trial of Beelinx today — no credit card required.
      </p>

      {/* Input and Button Section */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '40px' }}>
        <input
          type="email"
          placeholder="Enter your business email"
          style={{
            width: '300px',
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #D1D5DB',
            fontSize: '16px',
            marginRight: '8px',
          }}
        />
        <button
          style={{
            backgroundColor: '#00C853',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Get started
        </button>
      </div>

      {/* Badges Section */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap',paddingTop:"50px" }}>
        {[
          { src: '/pricing-badge.svg', alt: 'Leader Small Business Winter 2024' },
          { src: '/pricing-badge.svg', alt: 'Leader Mid-Market Winter 2024' },
          { src: '/pricing-badge.svg', alt: 'Leader Enterprise Winter 2024' },
          { src: '/pricing-badge2.svg', alt: 'Most Implementable Fall 2023' },
          { src: '/pricing-badge3.svg', alt: 'Best Relationship Fall 2023' },
          { src: '/pricing-badge.svg', alt: 'Users Love Us' },
        ].map((badge, index) => (
          <img
            key={index}
            src={badge.src}
            alt={badge.alt}
            style={{
              width: '100px',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TryBeelinxSection;
