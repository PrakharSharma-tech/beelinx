import React, { useState } from 'react';
import './TemplatePageSection.css';

export const TemplatePageSection = () => {
  const stories = [
    { title: " API Management Software", paragraph :"A powerful platform designed to manage, monitor, and secure APIs throughout their lifecycle, enabling seamless integration and innovation.",category: 'Retail', img: '/technologyfilter5.png', industry: 'Retail' },
    { title: "Transaction Reconciliation Software ",paragraph :"A robust tool designed to automate the process of matching transactions across systems, ensuring accuracy and financial integrity.", category: 'Retail', img: '/technologyfilter4.png', industry: 'Retail' },
    { title: " Chargeback Management Software",paragraph :"A specialized platform that helps businesses efficiently manage, track, and resolve chargeback disputes to protect revenue and maintain customer satisfaction.", category: 'Technology', img: '/siemensSmartFilter.png', industry: 'Technology' },
    { title: "CRM Software",paragraph :" A customer relationship management (CRM) system is designed to help businesses manage and analyze customer interactions throughout the customer lifecycle, enhancing relationships and driving growth.", category: 'Professional Services', img: '/technologyfilter5.png', industry: 'Professional Services' },
    { title: "Retail POS Software",paragraph :" A Point of Sale (POS) system that allows retailers to process transactions, manage inventory, and track sales performance in real-time, enhancing the overall customer experience.", category: 'Technology', img: '/technologyfilter3.png', industry: 'Technology' },
    { title: "Payin Management Software ",paragraph :" A robust solution that helps businesses manage and track incoming payments efficiently, ensuring seamless collection, reconciliation, and reporting.", category: 'Healthcare', img: '/technologyfilter5.png', industry: 'Healthcare' },
    { title: " Payout Management Software",paragraph :" A powerful platform designed to manage, track, and process payments to vendors, employees, and other stakeholders with efficiency, accuracy, and security.", category: 'Retail', img: '/technologyfilter3.png', industry: 'Retail' },
    { title: "Loan Management Software",paragraph :"A digital solution designed to streamline the end-to-end loan lifecycle, from application and approval to disbursement and repayment tracking.", category: 'Retail', img: '/technologyfilter4.png', industry: 'Retail' },
    { title: " ERP Software",paragraph :"Enterprise Resource Planning (ERP) software centralizes and integrates core business processes into one unified system.", category: 'Technology', img: 'technologyfilter3.png', industry: 'Technology' },
    { title: "Hospital Management Software",paragraph :"A centralized platform designed to streamline and automate hospital operations, enhancing patient care and operational efficiency.", category: 'Professional Services', img: 'technologyfilter5.png', industry: 'Professional Services' },
    { title: " School Management Software ",paragraph :" A centralized platform designed to streamline and automate administrative, academic, and communication processes for schools.", category: 'Technology', img: '/technologyfilter5.png', industry: 'Technology' },
    { title: "Cooperative Society Management Software",paragraph :" A comprehensive solution designed to streamline and digitize the operations of cooperative societies.", category: 'Healthcare', img: '/technologyfilter4.png', industry: 'Healthcare' }, { title: "How Window Nation's creative department leverages Beelinx's AI features", category: 'Retail', img: 'technologyfilter3.png', industry: 'Retail' },
    
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
