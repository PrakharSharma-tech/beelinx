import React from "react";
import "./EnterprisesCards.css";
const EnterprisesCards = () => {
  const features = [
    {
      title: "Innovative Culture",
      description:
        "At Beelinx, we foster a culture of innovation where creativity and collaboration thrive. You'll work with passionate individuals shaping the future of fintech, making a meaningful impact in a fast-paced, forward-thinking environment.",
      linkText: "Contact sales",
      linkHref: "#",
      icon: "cardsEnterprises1.png", // Replace with your actual icon path
    },
    {
      title: "Impactful Work",
      description:
        "Your contributions matter. Whether you're developing groundbreaking software, designing intuitive user experiences, or implementing data-driven strategies, you'll play a crucial role in shaping the future of finance.",
      linkText: "Learn more",
      linkHref: "#",
      icon: "CardsEnterprises2.png", // Replace with your actual icon path
    },
    {
      title: "Continuous Learning",
      description:
        "In fintech, change is constant. That's why we prioritize learning and development, providing opportunities for ongoing training and skill enhancement. Grow your expertise and stay ahead of the curve in this rapidly evolving industry.",
      linkText: "Learn more",
      linkHref: "#",
      icon: "CardsEnterprises3.png", // Replace with your actual icon path
    },
  ];

  return (
    <section className="Beelinx-section" id="solutions">
      <div className="container">
        <h2 className="section-title">Why Beelinx?</h2>
        <p className="section-subtitle">
        Why beelinx is the ideal place to grow your career, push the boundaries of innovation, and make a lasting impact on the future of fintech
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">
                {feature.description.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <a href={feature.linkHref} className="feature-link">
                {feature.linkText} →
              </a>
              <img src={feature.icon} alt={feature.title} className="feature-icon-EnterprisesCards" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterprisesCards;
