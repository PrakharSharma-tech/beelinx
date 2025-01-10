import React from "react";
import styles from "./ScrollSection.module.css";

const ScrollSection = () => {
  const content = [
    {
      title: "FinSwitch",
      description: "FinSwitch is a robust platform designed to connect various banks, financial institutions, merchants, and consumers, creating a fluid and efficient ecosystem for financial transactions. It offers multi-bank connectivity, real-time transaction processing, and comprehensive reporting and analytics, ensuring seamless operations across the network. With enhanced security protocols and smooth integration with existing systems, FinSwitch provides a secure and reliable infrastructure for various use cases, including financial transaction processing, merchant payments, and cross-bank transfers. This all-in-one solution streamlines financial operations, making transactions faster, safer, and more efficient for all parties involved. ",
      buttonText: "Learn More",
    },
    {
      title: "FinTegra",
      description: "FinTegra is a powerful Business Banking Software designed to seamlessly integrate with existing systems and third-party applications, enabling financial institutions to create tailored solutions that align with their unique business objectives. With customizable banking modules and integration capabilities with accounting software, CRM systems, and third-party payment gateways, FinTegra offers real-time access to financial data while ensuring advanced security. Its scalable and flexible architecture makes it suitable for a wide range of use cases, including business account management, financial data analytics, and customer relationship management. This platform empowers financial institutions to streamline operations, enhance decision-making, and improve customer experiences.",
      buttonText: "Explore More",
    },
    {
      title: "FinGate",
      description: " FinGate is an advanced API Micro-gateway solution that enables organizations to fully leverage the power of microservices with efficiency and precision. It simplifies API management and ensures smooth communication between microservices, providing secure, real-time monitoring, and analytics. With features like easy deployment, scalability, high availability, and fault tolerance, FinGate offers a robust platform for managing complex API ecosystems. Its flexible architecture is perfect for use cases such as microservices deployment, API security management, and real-time service orchestration, empowering businesses to optimize performance, enhance security, and scale operations seamlessly.",
      buttonText: "Get Started",
    },
    {
      title: "FinAMP",
      description: " FinAMP is a powerful API Management portal that provides a comprehensive suite of tools to streamline the entire API lifecycle, enhance developer collaboration, and drive digital transformation initiatives. It offers robust features like API lifecycle management, a dedicated developer portal with detailed documentation, usage analytics, and real-time monitoring. With advanced security and access control measures, as well as seamless integration with CI/CD pipelines, FinAMP ensures secure, efficient, and scalable API management. Whether it's API development, fostering developer collaboration, or monitoring API performance, FinAMP helps organizations optimize their digital operations and accelerate innovation.",
      buttonText: "Get Started",
    },
    {
      title: "SwiftPay",
      description: " SwiftPay is an innovative mobile application designed for seamless person-to-merchant (P2M) payments, powered by UPI technology. It enhances payment processes by offering instant UPI transactions, secure and encrypted payments, and a user-friendly interface for a smooth customer experience. With real-time payment notifications and easy integration with loyalty programs, SwiftPay makes payments faster and more convenient for both merchants and customers. Whether facilitating merchant payments, streamlining customer transactions, or integrating loyalty rewards, SwiftPay is the perfect solution for businesses seeking to improve payment efficiency and customer satisfaction.",
      buttonText: "Get Started",
    },
    {
      title: "FinCore",
      description: "FinCore is a comprehensive Core Banking System that serves as the centralized hub for all essential banking activities. From account management and transaction processing to customer relationship management and regulatory compliance, FinCore is the core platform around which a bank's operations are built. It offers centralized account management, efficient transaction processing, robust CRM capabilities, and seamless regulatory compliance reporting. With its scalable and resilient infrastructure, FinCore ensures that banks can efficiently manage their core operations while meeting regulatory standards. It is ideal for use cases such as core banking operations, regulatory reporting, and customer account management, providing a reliable foundation for modern banking needs.",
      buttonText: "Get Started",
    },
    {
      title: "FinReco",
      description: " FinReco is an advanced Reconciliation Tool designed to simplify and automate the reconciliation process, helping businesses effortlessly reconcile transactions, identify discrepancies, and maintain accurate financial records. With automated reconciliation processes, real-time transaction tracking, and powerful discrepancy detection and resolution features, FinReco ensures accuracy and efficiency in financial operations. It integrates seamlessly with accounting systems and provides detailed reporting and analytics for better financial oversight. Whether it's financial reconciliation, managing discrepancies, or tracking transactions, FinReco empowers businesses to streamline their processes and maintain error-free financial records with ease.",
      buttonText: "Get Started",
    },
    {
      title: "FinNext",
      description: "FinNext is an innovative Open Banking Platform that offers a standardized framework for API development and integration. By enabling seamless collaboration between financial institutions and third-party developers, FinNext unlocks new opportunities for creativity and innovation in the financial sector. It provides a secure environment for third-party integrations, real-time data sharing, and developer resources to ensure smooth collaboration. With compliance to open banking standards, FinNext empowers organizations to implement open banking solutions, integrate third-party APIs, and share real-time financial data with confidence, all while driving digital transformation and enhancing financial services.",
      buttonText: "Get Started",
    },
    {
      title: "FinTor",
      description: " FinTor is an advanced API simulator designed to streamline and accelerate the testing of APIs. It allows you to validate API functionality and performance before deployment, ensuring that integrations and operations run smoothly in real-world environments. With realistic API simulations, performance testing, and comprehensive test scenarios, FinTor provides the tools needed to ensure your API performs as expected. It integrates seamlessly with development tools and offers detailed test reports and analytics to give you deep insights. Whether it’s API functionality testing, performance benchmarking, or pre-deployment validation, FinTor helps ensure your APIs are ready for flawless integration.",
      buttonText: "Get Started",
    },
 
  ];

  return (
    <div style={{backgroundColor:"#f5f5f5",position:"relative",marginTop:"-24px" }}>
      <h2 style={{textAlign:"center", fontSize:"30px", paddingTop: 40, backgroundColor:"#f5f5f5"}}>Product Suite</h2>
      <p style={{textAlign:"center", fontSize:"20px", paddingBottom: 40 , paddingTop:20,backgroundColor:"#f5f5f5"}}>Innovative Financial Solutions for Seamless Integration, Efficiency, and Growth.</p>
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

export default ScrollSection;
