import React from "react";
import "./LongCards.css";

const LongCards = () => {
  const pricingPlans = [
    
    {
      title: "Team",
      subtitle: "For small teams",
      price: "$10",
      priceUnit: "/user/month",
      features: [
        
        
      ],
      buttonText: "Contact Us",
      note: "No credit card required",
      badge: "",
    },
    {
      title: "Business",
      subtitle: "For all teams across an organization",
      price: "$24.80",
      priceUnit: "/user/month",
      features: [
        
      ],
      buttonText: "Contact Us",
      note: "No credit card required",
      badge: "Best For You",
    },
    {
      title: "Enterprise",
      subtitle: "For large teams",
      price: "Contact us",
      priceUnit: "",
      features: [
        
      ],
      buttonText: "Contact Us",
      note: "No credit card required",
      badge: "",
    },
    {
      title: "Pinnacle",
      subtitle: "For teams with complex work needs",
      price: "Contact us",
      priceUnit: "",
      features: [
       
      ],
      buttonText: "Contact Us",
      note: "No credit card required",
      badge: "",
    },

  ];

  return (
    <section className="pricing-section-LC">
      <div className="pricing-header-LC">
        <h1>The best Beelinx solution for your team
        is Business plan</h1>
        <p>Try it right now or schedule some time to talk with one of our experts to see how Beelinx can help your team.e</p>
        <button className="cta-button-LC">Try Beelinx for free</button>
      </div>

      <div className="pricing-cards-LC">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.badge ? "highlighted" : ""}`}>
            {plan.badge && <div className="badge-LC">{plan.badge}</div>}
            <h3>{plan.title}</h3>
            <p className="plan-subtitle-LC">{plan.subtitle}</p>
            <div className="price-LC">
              <span>{plan.price}</span>
              {plan.priceUnit && <span>{plan.priceUnit}</span>}
            </div>
            <button className="cta-button-LC">{plan.buttonText}</button>
           
            
            <button className="cta-button-LC">Try Beelinx for free</button>
            <p className="note">{plan.note}</p>
          </div>
        ))}
      </div>

      <div className="pricing-footer-LC">
     
      <p >
      The pricing outlined herein is valid only as to new purchases occurring on or after October 25, 2022, and is not offered and does not apply to any prior purchases. Beelinx reserves the right to adjust its packaging and pricing at any time.

Amount shown is price per month and billed on an annual per user basis.
      </p>
    </div>
    </section>
  );
};

export default LongCards;
