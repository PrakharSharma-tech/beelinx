import React, { useState } from 'react';
import './TemplatePageSection.css';

export const TemplatePageSection = () => {
  const stories = [
    { title: "How Window Nation's ", paragraph :"Walmart Canada Automates Processes & Proves Project Value With Beelinx",category: 'Retail', img: '/technologyfilter5.png', industry: 'Retail' },
    { title: "How Window Nation's ",paragraph :"Walmart Canada Automates Processes & Proves Project Value With Beelinx", category: 'Retail', img: '/technologyfilter4.png', industry: 'Retail' },
    { title: "How Window Nation's ",paragraph :"Walmart Canada Automates Processes & Proves Project Value With Beelinx", category: 'Technology', img: '/siemensSmartFilter.png', industry: 'Technology' },
    { title: "How Window Nation's ",paragraph :"Walmart Canada Automates Processes & Proves Project Value With Beelinx", category: 'Professional Services', img: '/technologyfilter5.png', industry: 'Professional Services' },
    { title: "How Window Nation's ",paragraph :"Walmart Canada Automates Processes & Proves Project Value With Beelinx", category: 'Technology', img: '/technologyfilter3.png', industry: 'Technology' },
    { title: "How Window Nation's ",paragraph :"Walmart Canada Automates Processes & Proves Project Value With Beelinx", category: 'Healthcare', img: '/technologyfilter5.png', industry: 'Healthcare' },
    { title: "How Window Nation's ",paragraph :"Walmart Canada Automates Processes & Proves Project Value With Beelinx", category: 'Retail', img: '/technologyfilter3.png', industry: 'Retail' },
    { title: "How Window Nation's ",paragraph :"Walmart Canada Automates Processes & Proves Project Value With Beelinx", category: 'Retail', img: '/technologyfilter4.png', industry: 'Retail' },
    { title: "How Window Nation's ",paragraph :"Walmart Canada Automates Processes & Proves Project Value With Beelinx", category: 'Technology', img: 'technologyfilter3.png', industry: 'Technology' },
    { title: "How Window Nation's ",paragraph :"Walmart Canada Automates Processes & Proves Project Value With Beelinx", category: 'Professional Services', img: 'technologyfilter5.png', industry: 'Professional Services' },
    { title: "How Window Nation's ",paragraph :"Walmart Canada Automates Processes & Proves Project Value With Beelinx", category: 'Technology', img: '/technologyfilter5.png', industry: 'Technology' },
    { title: "How Window Nation's ",paragraph :"Walmart Canada Automates Processes & Proves Project Value With Beelinx", category: 'Healthcare', img: '/technologyfilter4.png', industry: 'Healthcare' }, { title: "How Window Nation's creative department leverages Beelinx's AI features", category: 'Retail', img: 'technologyfilter3.png', industry: 'Retail' },
    { title: "How Window Nation's ",paragraph :"Walmart Canada Automates Processes & Proves Project Value With Beelinx", category: 'Retail', img: '/technologyfilter3.png', industry: 'Retail' },
    { title: "How Window Nation's ",paragraph :"Walmart Canada Automates Processes & Proves Project Value With Beelinx", category: 'Technology', img: '/technologyfilter3.png', industry: 'Technology' },
    { title: "How Window Nation's ",paragraph :"Walmart Canada Automates Processes & Proves Project Value With Beelinx", category: 'Professional Services', img: '/technologyfilter5.png', industry: 'Professional Services' },
    { title: "How Window Nation's ",paragraph :"Walmart Canada Automates Processes & Proves Project Value With Beelinx", category: 'Technology', img: '/technologyfilter4.png', industry: 'Technology' },
    { title: "How Window Nation's ",paragraph :"Walmart Canada Automates Processes & Proves Project Value With Beelinx", category: 'Healthcare', img: '/technologyfilter3.png', industry: 'Healthcare' },
  ];

  const [selectedIndustries, setSelectedIndustries] = useState([]);

  const industries = ['Retail', 'Technology', 'Healthcare', 'Professional Services Retail', 'Technology', 'Healthcare', 'Professional Services'];

  const handleFilterChange = (industry) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry)
        ? prev.filter((item) => item !== industry)
        : [...prev, industry]
    );
  };

  const filteredStories =
    selectedIndustries.length === 0
      ? stories
      : stories.filter((story) => selectedIndustries.includes(story.industry));

  return (
    <div className="stories-container">
      <div className="stories-layout">
        {/* Filter Section */}
        <div style={{height:"500px"}} className="filter-section">
          <h3>Filter according to need</h3>
          <h4>Teams</h4>
          <ul>
            {industries.map((industry, index) => (
              <li key={index} className="filter-item">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedIndustries.includes(industry)}
                    onChange={() => handleFilterChange(industry)}
                  />
                  {industry}
                </label>
              </li>
            ))}
          </ul>
          <h4>Template type</h4>
          <ul>
            {industries.map((industry, index) => (
              <li key={index} className="filter-item">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedIndustries.includes(industry)}
                    onChange={() => handleFilterChange(industry)}
                  />
                  {industry}
                </label>
              </li>
            ))}
          </ul>

          
          
        </div>

        {/* Stories Grid */}
        <div className="stories-grid">
          {filteredStories.map((story, index) => (
            <div key={index} className="story-card">
              <img src={story.img} alt={story.title} className="story-image" />
              <div className="story-content">
                <div className="story-category">{story.category}</div>
                <div className="story-title">{story.title}</div>
                <div style={{padding:"10px"}}>{story.paragraph}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
