import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styled components
const AccordionSectionWrapper = styled.section`
  background-color: #f8f9fc;
  padding: 50px 20px;
  font-family: Arial, sans-serif;
  text-align: center;
`;

const AccordionContainer = styled.div`
  .accordion-container h2 {
    font-size: 2rem;
    font-weight: 600;
    color: #2d3e50;
    margin-bottom: 60px;
    padding: 0;
  }
`;

const AccordionAndImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  height: 650px;

  @media (max-width: 768px) {
    flex-direction: column ; /* Stack accordion and image vertically */
    gap: 20px;
    height: auto;
  }
`;

const Accordion = styled.div`
  flex: 1 1 300px;
  max-width: 400px;
`;

const AccordionItem = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  border-left: 4px solid #00a99d;

  &.active {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-left: 4px solid #00a99d;
  }
`;

const AccordionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3e50;
`;

const AccordionContent = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #555;
  margin-top: 10px;
  font-size: 1rem;

  &.show {
    max-height: 300px; /* Adjust to accommodate content */
  }
`;

const ImageContainer = styled.div`
  flex: 1 1 800px;
  max-width: 800px;
  text-align: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    order: 2;
    margin-top: 20px; /* Ensure space between accordion and image */
    flex-basis: 100%;
    max-width: 100%;
  }

  img {
    width: 100%;
    max-width: 700px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const CtaButtons = styled.div`
  margin-top: 30px;
`;

const CtaButton = styled.button`
  background-color: #00a99d;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  margin: 0 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007a74;
  }

  &.secondary {
    background-color: transparent;
    color: #00a99d;
    border: 1px solid #00a99d;

    &:hover {
      background-color: #f0fdfd;
    }
  }
`;

const AccordionSection = () => {
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
    <AccordionSectionWrapper>
      <AccordionContainer>
        <h2>Empowering Digital Transformation through Strategic Technology Partnerships</h2>
        <AccordionAndImage>
          <Accordion>
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                className={activeIndex === index ? "active" : ""}
                onClick={() => setActiveIndex(index)}
              >
                <AccordionTitle>{item.title}</AccordionTitle>
                <AccordionContent className={activeIndex === index ? "show" : ""}>
                  <p>{item.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <ImageContainer>
            <img
              src={accordionData[activeIndex].image}
              alt={`Accordion ${activeIndex}`}
            />
          </ImageContainer>
        </AccordionAndImage>
        <CtaButtons>
          <CtaButton className="cta-button-AccordianSection">Try Beelinx for free</CtaButton>
          <CtaButton className="secondary">Contact us</CtaButton>
        </CtaButtons>
      </AccordionContainer>
    </AccordionSectionWrapper>
  );
};

export default AccordionSection;
