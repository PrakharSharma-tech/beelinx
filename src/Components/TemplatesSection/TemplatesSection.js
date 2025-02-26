import React from "react";
import "./TemplatesSection.css";

const TemplatesSection = () => {
  const templates = [
    { name: "API Management", icon: "📣" },
    { name: "Transaction Reconciliation", icon: "🗂️" },
    { name: " Chargeback Management", icon: "🎨" },
    { name: "CRM Software", icon: "📈" },
    { name: "Retail POS Software", icon: "📊" },
    { name: " Payin Management", icon: "⚙️" },
    { name: "Payout Management", icon: "👨‍💼" },
    { name: " Loan Management", icon: "📣" },
    { name: "ERP Software", icon: "🗂️" },
    { name: "Hospital Management", icon: "🎨" },
    { name: "School Management", icon: "📈" },
    { name: "Cooperative Society Management", icon: "📊" },
   
  ];

  return (
    <section className="templates-section">
      <h2 className="title">Get Started with our Products</h2>
      <p className="description">
      Get to work faster than ever and save time by launching your projects or campaigns in seconds with Beelinx's fully adaptable range of pre-built products.
      </p>
      <div className="templates-container">
        {templates.map((template, index) => (
          <div key={index} className="template-item">
            {/* <span className="icon">{template.icon}</span> */}
            <span className="name">{template.name}</span>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default TemplatesSection;
