import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styled components
const AccordionSectionWrapper = styled.section`
  background-color: #f8f9fc;
  padding: 50px 20px;
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: -30px;
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
  height: 800px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack accordion and image vertically */
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
  justify-items: center;

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

const AccordionSectionTour = () => {
  const accordionData = [
    {
      title: "IMPS",
      content:
        "Beelinx’s Immediate Payment Service (IMPS) enables real-time, 24/7 interbank fund transfers via mobile phones. It supports secure P2P and P2M transactions, making it ideal for instant money transfers, utility bill payments, and merchant payments.",
      image: "accordian1 (1).png", // Replace with the actual image path
    },
    {
      title: "NEFT",
      content:
        "Beelinx’s National Electronic Funds Transfer (NEFT) system offers a secure and efficient way to transfer funds nationwide between bank accounts. Supporting both online and offline transactions, NEFT uses batch processing to handle large volume transfers in a standardized, secure format. It is reliable and widely accepted, making it ideal for routine money transfers, credit card bill payments, and business-to-business transactions. Beelinx’s NEFT solution ensures seamless, safe, and efficient financial transfers across the country.",
      image: "accordian2v2.png", // Replace with the actual image path
    },
    {
      title: "RTGS",
      content:
        "Beelinx’s Real-Time Gross Settlement (RTGS) system enables real-time, high-value fund transfers with immediate clearing and settlement. Designed for secure and irrevocable transactions, RTGS is ideal for large-value interbank transactions and urgent fund transfers. Beelinx’s RTGS solution ensures fast, secure, and efficient processing for high-priority business payments, making it the preferred choice for critical financial operations.",
      image: "accordian3v2.png", // Replace with the actual image path
    },
    {
      title: "UPI",
      content:
        "Beelinx’s Unified Payments Interface (UPI) is a revolutionary payment system that allows instant, mobile-based money transfers between bank accounts. It simplifies transactions with a secure, user-friendly interface, supporting both Person-to-Person (P2P) and Person-to-Merchant (P2M) transactions. Beelinx’s UPI solution enables seamless payments for person-to-person transfers, merchant transactions, and bill payments, enhancing the overall user experience and providing a fast, reliable way to handle everyday financial needs.",
      image: "accordian1 (1).png", // Replace with the actual image path
    }
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
        <h2>Api Stack - 1.Payments</h2>
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
          <CtaButton className="cta-button-AccordianSectionTour">Try Beelinx for free</CtaButton>
          <CtaButton className="secondary">Contact us</CtaButton>
        </CtaButtons>
      </AccordionContainer>
    </AccordionSectionWrapper>
  );
};

export default AccordionSectionTour;
