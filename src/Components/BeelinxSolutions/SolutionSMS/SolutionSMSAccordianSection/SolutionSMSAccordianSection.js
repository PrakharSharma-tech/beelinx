import React, { useState, useEffect } from "react";
import "./SolutionSMSAccordianSection.css";

const SolutionSMSAccordionSection = () => {
  const accordionData = [
    {
      title: "Partner 1: [Tech Company Name]",
      content:
        "[Tech Company Name] is a global leader in technology solutions, renowned for innovation and reliability. Through our partnership, we integrate advanced technologies such as AI, machine learning, and cloud computing to enhance performance and scalability. Key contributions include data analytics, joint R&D projects, and AI-driven solutions, enabling us to optimize cloud infrastructure and leverage insights for continuous improvement.",
      image: "accordian1 (1).png", // Replace with the actual image path
    },
    {
      title: "Partner 2: [Tech Company Name]",
      content:
        "With a focus on security and compliance, [Tech Company Name] strengthens our offerings with advanced cybersecurity solutions and regulatory tools. Our partnership ensures that client data is protected through secure API gateways, regular security audits, and comprehensive risk management, helping us maintain compliance and safeguard critical information.",
      image: "accordian2v2.png", // Replace with the actual image path
    },
    {
      title: "Partner 3: [Tech Company Name]",
      content:
        "[Tech Company Name] specializes in digital transformation and innovation, enabling us to deliver cutting-edge solutions that help businesses thrive in the digital age. Our partnership provides expert consulting, innovative software development, user experience design, and comprehensive training, driving successful digital initiatives and enhancing overall business performance.",
      image: "accordian3v2.png", // Replace with the actual image path
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % accordionData.length);
    }, 5000); // Change accordion every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [accordionData.length]);

  return (
    <section className="accordion-section">
      <div className="accordion-container">
        <h2>Empowering Digital Transformation through Strategic Technology Partnerships</h2>
        <div className="accordion-and-image">
          <div className="accordion">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className={`accordion-item ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <h3 className="accordion-title">{item.title}</h3>
                <div
                  className={`accordion-content ${
                    activeIndex === index ? "show" : ""
                  }`}
                >
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="image-container">
            <img
              src={accordionData[activeIndex].image}
              alt={`Accordion ${activeIndex}`}
            />
          </div>
        </div>
        <div className="cta-buttons">
          <button className="cta-button-AccordianSection">Try Beelinx for free</button>
          <button className="cta-button secondary">Contact us</button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSMSAccordionSection;
