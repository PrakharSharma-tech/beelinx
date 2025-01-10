import React from 'react';
import './TemplateHero.css';

export const TemplateHero = () => {
  const categories = [
    { name: 'Marketing', icon: '📣' },
    { name: 'Project Management', icon: '📁' },
    { name: 'Creative', icon: '🖼️' },
    { name: 'Agile', icon: '📈' },
    { name: 'Operations', icon: '📊' },
    { name: 'IT & Engineering', icon: '⚙️' },
    { name: 'Professional Services', icon: '🔒' },
  ];

  return (
    <section className="templates-section">
      {/* Heading */}
      <h2 className="templates-title">Beelinx Templates</h2>
      <p className="templates-subtitle">
        Beelinx’s templates make managing projects easier than ever. Dive into our categories to simplify complex processes and save time.
      </p>

      {/* Button */}
      <button className="templates-button">Try our templates</button>

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
