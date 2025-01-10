import React, { useState, useEffect } from "react";
import "./AccordianSectionTour.css";

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
    <section style={{marginTop:"-30px"}}className="accordion-section">
      <div  className="accordion-container">
        <h2>Api Stack - 1.Payments</h2>
        <div style={{height:"800px"}} className="accordion-and-image">
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
          <div style={{justifyItems:"center"}} className="image-container">
            <img
              src={accordionData[activeIndex].image}
              alt={`Accordion ${activeIndex}`}
            />
          </div>
        </div>
        <div className="cta-buttons">
          <button className="cta-button-AccordianSectionTour">Try Beelinx for free</button>
          <button className="cta-button secondary ">Contact us</button>
        </div>
      </div>
    </section>
  );
};

export default AccordionSectionTour;
