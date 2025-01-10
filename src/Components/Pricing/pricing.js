import React from "react";
import "./pricing.css";

const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Free",
      subtitle: "For teams getting started",
      price: "$0",
      priceUnit: "/user/month",
      features: [
        "Web, desktop, and mobile apps",
        "Project & task management",
        "Board view",
        "Table view",
        "Active task limitations apply",
        "Compare all features",
        "5-200 users",
        "Project Blueprints",
        "Unlimited request forms",
        "Unlimited dashboards",
        "Approvals & guest approvals",
        "Custom item types",
        "Compare all features",
        "Enterprise plan features plus:",
        "Beelinx Datatable (10,000 records)",
        "Quickbooks and Power BI integrations",
        "Budgeting and billable hours",
        "15 GB storage per user",
        "Compare all features",
        "15 GB storage per user",
        "Compare all features",
      ],
      buttonText: "Get started",
      note: "No credit card required",
      badge: "",
    },
    {
      title: "Team",
      subtitle: "For small teams",
      price: "$10",
      priceUnit: "/user/month",
      features: [
        "2-15 users",
        "Folders structure & nested projects",
        "Unlimited projects, tasks & subtasks",
        "Dashboard (1 per account)",
        "Unlimited custom fields",
        "Automations (50 actions/user/month)",
        "Compare all features",
        "5-200 users",
        "Project Blueprints",
        "Unlimited request forms",
        "Unlimited dashboards",
        "Approvals & guest approvals",
        "Custom item types",
        "Compare all features",
        "Enterprise plan features plus:",
        "Beelinx Datatable (10,000 records)",
        "Quickbooks and Power BI integrations",
        "Budgeting and billable hours",
        "15 GB storage per user",
        "Compare all features",
        
      ],
      buttonText: "Try for free",
      note: "No credit card required",
      badge: "Quick Start",
    },
    {
      title: "Business",
      subtitle: "For all teams across an organization",
      price: "$24.80",
      priceUnit: "/user/month",
      features: [
        "5-200 users",
        "Project Blueprints",
        "Unlimited request forms",
        "Unlimited dashboards",
        "Approvals & guest approvals",
        "Custom item types",
        "Compare all features",
        "5-200 users",
        "Project Blueprints",
        "Unlimited request forms",
        "Unlimited dashboards",
        "Approvals & guest approvals",
        "Custom item types",
        "Compare all features",
        "Enterprise plan features plus:",
        "Beelinx Datatable (10,000 records)",
        "Quickbooks and Power BI integrations",
        "Budgeting and billable hours",
        "15 GB storage per user",
        "Compare all features",
        "15 GB storage per user",
        "Compare all features",
      ],
      buttonText: "Try for free",
      note: "No credit card required",
      badge: "Most Popular",
    },
    {
      title: "Enterprise",
      subtitle: "For large teams",
      price: "Contact us",
      priceUnit: "",
      features: [
        "SAML-based SSO",
        "Two-Factor Authentication (2FA)",
        "Custom access roles",
        "Advanced resource & capacity planning",
        "Job roles",
        "15 GB storage per user",
        "Compare all features",
        "5-200 users",
        "Project Blueprints",
        "Unlimited request forms",
        "Unlimited dashboards",
        "Approvals & guest approvals",
        "Custom item types",
        "Compare all features",
        "Enterprise plan features plus:",
        "Beelinx Datatable (10,000 records)",
        "Quickbooks and Power BI integrations",
        "Budgeting and billable hours",
        "15 GB storage per user",
        "Compare all features",
      ],
      buttonText: "Try for free",
      note: "No credit card required",
      badge: "",
    },
    {
      title: "Pinnacle",
      subtitle: "For teams with complex work needs",
      price: "Contact us",
      priceUnit: "",
      features: [
        "Enterprise plan features plus:",
        "Beelinx Datatable (10,000 records)",
        "Quickbooks and Power BI integrations",
        "Budgeting and billable hours",
        "15 GB storage per user",
        "Compare all features",
        "Enterprise plan features plus:",
        "Beelinx Datatable (10,000 records)",
        "Quickbooks and Power BI integrations",
        "Budgeting and billable hours",
        "15 GB storage per user",
        "Compare all features",
        "Enterprise plan features plus:",
        "Beelinx Datatable (10,000 records)",
        "Quickbooks and Power BI integrations",
        "Budgeting and billable hours",
        "15 GB storage per user",
        "Compare all features",

      ],
      buttonText: "Try for free",
      note: "No credit card required",
      badge: "Most Enhanced",
    },
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h1>Plans for Every Team</h1>
        <p>Free 14-day trial • No credit card required • Cancel anytime</p>
        <button className="cta-button">Try Beelinx for free</button>
      </div>

      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.badge ? "highlighted" : ""}`}>
            {plan.badge && <div className="badge">{plan.badge}</div>}
            <h3>{plan.title}</h3>
            <p className="plan-subtitle">{plan.subtitle}</p>
            <div className="price">
              <span>{plan.price}</span>
              {plan.priceUnit && <span>{plan.priceUnit}</span>}
            </div>
            <button className="cta-button">{plan.buttonText}</button>
            <p className="note">{plan.note}</p>
            <ul className="features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="cta-button-pricing">Try Beelinx for free</button>
          </div>
        ))}
      </div>

      <div className="pricing-footer">
      <div className="background-styled">
      <h4 style={{color:" #1c1c1e"}}>Compare features across our plans</h4>
      <a style={{color:" #1c1c1e"}} href="#" className="footer-link">
        Take a closer look
      </a>
      </div>
      <p >
        The pricing outlined herein is valid only as to new purchases occurring on or after October 25, 2022, and is not offered and does not apply to any prior purchases. Beelinx reserves the right to adjust its packaging and pricing at any time.
        <br />
        <br />
        Amount shown is price per month and billed on an annual per user basis.
      </p>
    </div>
    </section>
  );
};

export default PricingSection;
