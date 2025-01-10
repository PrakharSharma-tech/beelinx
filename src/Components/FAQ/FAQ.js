import React, { useState } from 'react';

const faqData = [
  { question: 'What are the different types of licenses?', answer: 'Beelinx offers various license types tailored to individual and team needs, including Free, Professional, Business, and Enterprise plans.' },
  { question: 'What happens when my trial has expired?', answer: 'Once your trial expires, your account will be downgraded to the Free plan unless you subscribe to a paid plan.' },
  { question: 'How do I purchase a subscription?', answer: 'You can purchase a subscription directly from the Beelinx pricing page by selecting a plan and following the checkout process.' },
  { question: 'Can I pay in my local currency and what kind of taxes apply?', answer: 'Yes, Beelinx supports payments in various currencies. Taxes will depend on your local laws and regulations.' },
  { question: 'Where will my data be hosted?', answer: 'Your data will be hosted securely on Beelinx’s servers, adhering to industry standards and regional compliance requirements.' },
  { question: 'Does Beelinx have an on-premise solution or is it just cloud-based?', answer: 'Beelinx is primarily a cloud-based solution and does not offer an on-premise version at this time.' },
  { question: 'What does Beelinx do to ensure GDPR compliance?', answer: 'Beelinx is fully GDPR-compliant, with measures to protect user data and provide transparency in its data handling processes.' },
  { question: 'What is a Professional Services deployment add-on?', answer: 'The Professional Services deployment add-on provides tailored support to help you implement Beelinx efficiently within your organization.' },
  { question: 'From what team size do you recommend adding a Professional Services deployment to my solution?', answer: 'Professional Services are recommended for teams with over 20 users to ensure smooth implementation and onboarding.' },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#F0F7FA' }}>
      <h1 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 'bold', color: '#1D1D1D', marginBottom: '40px' }}>
        FAQ
      </h1>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#F0F7FA', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',marginBottom: '20px' }}>
        {faqData.map((item, index) => (
          <div key={index} style={{ marginBottom: '20px', borderRadius: '8px', overflow: 'hidden' }}>
          <button
            onClick={() => toggleAccordion(index)}
            style={{
              width: '100%',
              textAlign: 'left',
              padding: '20px',
              fontSize: '18px',
              fontWeight: 'bold',
              backgroundColor: 'white',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>{item.question}</span>
            <span style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>
          </button>
          {activeIndex === index && (
            <div style={{ padding: '16px', fontSize: '16px', color: '#555', backgroundColor: '#F0F7FA' }}>
              {item.answer}
            </div>
          )}
        </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
