import React from 'react';

const AddOnFeatures = () => {
  const features = [
    {
      title: 'Beelinx Integrate',
      description: 'Create custom integrations and automations with 400+ cloud and on-premises applications.',
      icon: '/pricing-iconBeelinx.svg',
      link: '#',
    },
    {
      title: 'Beelinx Two-Way Sync',
      description: 'Enable technical teams with a two-way sync with their favorite tools including Jira and Github.',
      icon: '/pricing-iconBeelinx.svg',
      link: '#',
    },
    {
      title: 'Beelinx Lock',
      description: 'Own and manage keys to your encrypted data to get data access control and audit capabilities.',
      icon: '/pricing-iconBeelinx.svg',
      link: '#',
    },
    {
      title: 'Beelinx Datahub',
      description: 'Connect your data to the way you work. Create a central source of information to power your workflows.',
      icon: '/pricing-iconBeelinx.svg',
      link: '#',
    },
  ];

  return (
    <section style={{ backgroundColor: '#F0F8F8', padding: '80px 40px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ color: '#1D1D1D', fontWeight: 'bold', marginBottom: '8px' }}>Add-on Features</h2>
        <p style={{ color: '#555', fontSize: '16px' }}>
          An add-on is a set of premium features that you can add to your Beelinx account for an additional fee. Enhance your plan to unlock more value for your team.
        </p>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(480px,480px))',
          gap: '100px',
           paddingLeft:'250px'
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '50px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <img
                src={feature.icon}
                alt={feature.title}
                style={{ width: '40px', height: '40px', marginRight: '16px' }}
              />
              <h3 style={{ color: '#1D1D1D', fontWeight: 'bold', fontSize: '30px', margin: 0 }}>
                {feature.title}
              </h3>
            </div>
            <p style={{ color: '#555', fontSize: '14px', marginBottom: '16px' }}>{feature.description}</p>
            <a
              href={feature.link}
              style={{
                color: '#1D72E8',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AddOnFeatures;
