import React from "react";
import "./pers.css";

const EnterpriseSolutions = () => {
  const cards = [
    {
      title: "Enterprise-grade security",
      description: [
        "Stay compliant and secure with enterprise-grade security solutions tailored to your business needs.Get expert help anytime with round-the-clock support designed for enterprise clients.Get expert help anytime with round-the-clock support designed for enterprise clients.",
        "Get expert help anytime with round-the-clock support designed for enterprise clients.Get expert help anytime with round-the-clock support designed for enterprise clients.Get expert help anytime with round-the-clock support ",
        
      ],
    },
    {
      title: "24/7 Global support",
      description: [
        "Get expert help anytime with round-the-clock support designed for enterprise clients.Get expert help anytime with round-the-clock support designed for enterprise clients.Get expert help anytime with round-the-clock support designed for enterprise clients.enterprise clients  ",
        "Get expert help anytime with round-the-clock support designed for enterprise clients.Get expert help anytime with round-the-clock support designed for enterprise clients.Get expert help anytime with round-the-clock support designed for enterprise clients.",
      ],
    },
    {
      title: "Deep customization",
      description: [
        "Tailor the platform to your workflows with advanced customization options for seamless integration.Get expert help anytime with round-the-clock support designed for enterprise clients.Get expert help anytime with round-the-clock support designed for enterprise clients.",
        "Get expert help anytime with round-the-clock support designed for enterprise clients.Get expert help anytime with round-the-clock support designed for enterprise clients.Get expert help anytime with round-the-clock support designed for enterprise clients.",
        
      ],
    },
  ];

  return (
    <section className="enterprise-solutions">
      <h2 className="enterprise-heading">
        Powerful enterprise-ready solutions
      </h2>
      <p style={{ width: "1400px", paddingBottom: "50px", paddingLeft: "80px" }}>
        Beelinx is the all-in-one platform that allows teams to scale smoothly with global support, industry-leading security, and a wealth of resources to help teams tackle complex work.Get expert help anytime with round-the-clock support designed for enterprise clients.support designed for enterprise clients
      </p>
      <div className="enterprise-cards">
        {cards.map((card, index) => (
          <div key={index} className="enterprise-card">
            <h3>{card.title}</h3>
            {card.description.map((paragraph, i) => (
              <p key={i} style={{ marginBottom: "10px" }}>
                {paragraph}
              </p>
            ))}
            <br></br>
            <button className="learn-more-btn">Learn More</button>
          </div>
        ))}
      </div>
      <button className="enterprise-btn">Get started</button>
    </section>
  );
};

export default EnterpriseSolutions;
