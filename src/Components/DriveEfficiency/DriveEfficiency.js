import React from "react";
import styles from "./DriveEfficiency.module.css";

const DriveEfficiency = () => {
  const content = [
    {
      title: "API Stack",
      description: "Our comprehensive API Stack is designed to empower businesses with seamless integration and advanced automation, offering a reliable solution for secure and efficient financial transactions. This robust suite of APIs covers a wide range of services, ensuring fast and hassle-free operations across various payment and collection needs. The Payments module supports multiple modes, including IMPS, NEFT, RTGS, and UPI, enabling businesses to process transactions with speed and accuracy. For Collections, the API Stack simplifies the process by leveraging UPI and Virtual Account Numbers (VAN) to streamline fund collection. Additionally, the Miscellaneous services, such as Penny Drop and VPA Verification, add another layer of utility and security, allowing businesses to verify accounts and ensure smooth onboarding processes. Together, these features make the API Stack a comprehensive, secure, and efficient solution for modern financial operations.",
      buttonText: "Learn More",
    },
    {
      title: "Product Suite",
      description: "Discover Beelinx's robust Product Suite, thoughtfully designed to address the diverse and evolving needs of modern businesses. Each product in our suite is crafted to drive innovation, enhance efficiency, and enable seamless scalability, ensuring businesses stay ahead in a competitive landscape. FinSwitch serves as a comprehensive transaction platform, streamlining payment processing with precision and reliability. FinTegra offers a feature-rich business banking software solution, empowering organizations to manage their financial operations effectively. For API-driven ecosystems, FinGate provides an advanced micro-gateway solution, while FinAMP acts as a powerful API management portal for seamless control and monitoring. Our SwiftPay mobile payment app ensures secure and convenient transactions on the go, and FinCore, a cutting-edge core banking system, delivers a robust foundation for financial institutions. To simplify financial processes, FinReco provides an efficient reconciliation tool, while FinNext opens the doors to the future with a sophisticated open banking platform. Completing this suite is FinTor, an innovative API simulator that facilitates seamless testing and integration. Together, these solutions make Beelinx the ultimate partner for businesses aiming to innovate and excel in the financial domain.",
      buttonText: "Explore More",
    },
    {
      title: "Managed Services",
      description: "Leverage Beelinx's Managed Services to ensure your business operates with unmatched efficiency and reliability. Our comprehensive suite of services is designed to address the unique challenges of modern enterprises, providing tailored solutions that drive growth and operational excellence. With Business Consulting, we help organizations strategize and implement effective frameworks to achieve their goals. Our API Development services deliver cutting-edge APIs customized to meet specific business requirements, while API Management ensures seamless operation and optimal performance of these integrations. The Integration Tool Kit simplifies complex processes, enabling smooth connectivity between systems and enhancing interoperability. To support your operations, our Technical Services provide expert assistance, ensuring swift resolution of challenges and consistent performance. Together, these managed services from Beelinx offer a robust foundation for businesses to thrive in a dynamic and technology-driven environment.",
      buttonText: "Get Started",
    },
    {
      title: "Partners",
      description: "Beelinx’s strategic partnerships with leading banking and technology companies enable us to deliver innovative, reliable, and impactful solutions that meet the evolving needs of our clients. By collaborating with top Banking Partners, we enhance our offerings with deep industry expertise, robust financial solutions, and a customer-centric approach that drives success across sectors. Simultaneously, our alliances with Technology Partners empower us to leverage cutting-edge advancements, ensuring our solutions remain at the forefront of innovation and performance. Together, these partnerships drive digital transformation, streamline operations, and create unparalleled value for our clients, making Beelinx a trusted partner in achieving business excellence in today’s fast-paced digital landscape.",
      buttonText: "Get Started",
    },
    {
      title: "Resources",
      description: "Access a wealth of valuable information through Beelinx's comprehensive Resource Center, designed to help you maximize the potential of our products and services. Our Blog keeps you informed with the latest articles and insights on fintech, cutting-edge technology, and emerging industry trends, providing the knowledge you need to stay ahead. The Knowledge Base offers an extensive collection of detailed guides, step-by-step how-to articles, and troubleshooting tips, ensuring you can use our products with ease and confidence. Additionally, our Customer Stories showcase real-world success through compelling case studies and testimonials, highlighting how businesses have achieved remarkable results with Beelinx. Together, these resources provide the tools and inspiration to empower your journey toward innovation and success.",
      buttonText: "Get Started",
    },
   
  ];

  return (
    <div style={{backgroundColor:"#f5f5f5",position:"relative",marginTop:"-24px" }}>
      <h2 style={{textAlign:"center", fontSize:"30px", paddingTop: 40, backgroundColor:"#f5f5f5"}}>Empowering Businesses with Knowledge and Innovation</h2>
      <p style={{textAlign:"center", fontSize:"20px", paddingBottom: 40 , paddingTop:20,backgroundColor:"#f5f5f5"}}>Explore Beelinx’s Resource Center for Insights, Guidance, and Success Stories</p>
    <section className={styles.driveEfficiencySection}>
      {/* Static Video */}
      <div className={styles.staticVideoContainer}>
        <video
          src="/Beelinx_features_demo.mp4" // Correct path to public folder
          className={styles.staticVideo}
          autoPlay
          loop
          muted
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Scrolling Content */}
      <div className={styles.contentContainer}>
        {content.map((item, index) => (
          <div className={styles.contentBlock} key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className={styles.button}>{item.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default DriveEfficiency;
