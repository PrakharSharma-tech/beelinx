import React, { useState } from 'react';
import './CSSection.css';

export const CustomerStories = () => {
  const stories = [
    { title: "Customer Details [Enables Bank to partner with aggregators to enable user journeys for customers]", category: 'Retail', img: '/technologyfilter5.png', industry: 'Retail' },
    { title: "Consumers Accounts [Enables Bank to partner with aggregators to enable user journeys for customers]", category: 'Retail', img: '/technologyfilter4.png', industry: 'Retail' },
    { title: "Account Inquiry [Provides account details, balances and information about transactions.]", category: 'Technology', img: '/siemensSmartFilter.png', industry: 'Technology' },
    { title: "Cheque [Open Banking APIs allows Third Parties to offer Banking Services to Bank's retail or corporate...]", category: 'Professional Services', img: '/technologyfilter5.png', industry: 'Professional Services' },
    { title: "Loan [Provides account details, balances and information about transactions.]", category: 'Technology', img: '/technologyfilter3.png', industry: 'Technology' },
    { title: "Credit Card Customer Service Request [The API Banking channel offers Jordan Kuwait bank account....]", category: 'Healthcare', img: '/technologyfilter5.png', industry: 'Healthcare' },
    { title: "Debit Card Customer Service Request [The API Banking channel offers Jordan Kuwait bank account...]", category: 'Retail', img: '/technologyfilter3.png', industry: 'Retail' },
    { title: "Locate Us [Offers quick access to ATM and branch network details.]", category: 'Retail', img: '/technologyfilter4.png', industry: 'Retail' },
    // { title: "Siemens Smart Infrastructure and Beelinx: Standardizing Processes and Automating Project Delivery", category: 'Technology', img: 'technologyfilter3.png', industry: 'Technology' },
    // { title: "Granicus's Shift to a Single Work Management Platform With Beelinx", category: 'Professional Services', img: 'technologyfilter5.png', industry: 'Professional Services' },
    // { title: "BigCommerce Streamlines Systems to Scale Services", category: 'Technology', img: '/technologyfilter5.png', industry: 'Technology' },
    // { title: "Synoes Builds a Workplace of the Future With Beelinx", category: 'Healthcare', img: '/technologyfilter4.png', industry: 'Healthcare' }, { title: "How Window Nation's creative department leverages Beelinx's AI features", category: 'Retail', img: 'technologyfilter3.png', industry: 'Retail' },
    // { title: "Walmart Canada Automates Processes & Proves Project Value With Beelinx", category: 'Retail', img: '/technologyfilter3.png', industry: 'Retail' },
    // { title: "Siemens Smart Infrastructure and Beelinx: Standardizing Processes and Automating Project Delivery", category: 'Technology', img: '/technologyfilter3.png', industry: 'Technology' },
    // { title: "Granicus's Shift to a Single Work Management Platform With Beelinx", category: 'Professional Services', img: '/technologyfilter5.png', industry: 'Professional Services' },
    // { title: "BigCommerce Streamlines Systems to Scale Services", category: 'Technology', img: '/technologyfilter4.png', industry: 'Technology' },
    // { title: "Synoes Builds a Workplace of the Future With Beelinx", category: 'Healthcare', img: '/technologyfilter3.png', industry: 'Healthcare' },
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
        <div className="filter-section">
          <h3>Filter by Industry</h3>
          <h4>Industries</h4>
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
          <h4>Department</h4>
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

          <h4>Why Beelinx?</h4>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
