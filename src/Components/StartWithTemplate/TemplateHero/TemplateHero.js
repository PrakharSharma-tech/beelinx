import React from 'react';
import './TemplateHero.css';

export const TemplateHero = () => {
  const categories = [
    { name: 'Equitas Bank', icon: '📣' },
    { name: 'Yes Bank', icon: '📁' },
    { name: 'Axis Bank', icon: '🖼️' },
    { name: 'Indian Bank', icon: '📈' },
    { name: 'Canara Bank', icon: '📊' },
    // { name: 'IT & Engineering', icon: '⚙️' },
    // { name: 'Professional Services', icon: '🔒' },
  ];

  return (
    <section className="templates-section">
      {/* Heading */}
      <h2 style={{padding:"20px"}}  className="templates-title">Beelinx Technologies Private Limited</h2>
      <p className="templates-subtitle">
      Beelinx Technologies is working in the domain of Open Banking and 
API Banking as Technology Service Provider. It delivers various 
technology services to companies for using APIs to personalize their 
offerings, services and products.

      </p>

      {/* Button */}
      <button className="templates-button">Try our Products</button>
      <h6 style={{fontSize:"30px", padding:"-30px"}}className="templates-title">Our Key Partnership</h6>
      {/* Categories */}
      <div className="templates-categories">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <span className="category-icon">{category.icon}</span>
            <span className="category-name">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
