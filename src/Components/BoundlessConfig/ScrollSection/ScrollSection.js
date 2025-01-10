import React from "react";
import styles from "./ScrollSection.module.css";

const ScrollSectionBoundlessConfig = () => {
  const content = [
    {
      title: "Business Consulting",
      description: "Beelinx’s business consulting services help organizations strategically leverage APIs to achieve their goals and gain a competitive edge. We assist in identifying opportunities for new revenue streams, enhancing existing ones, and developing robust API strategies aligned with your business objectives. Our key services include business model innovation, ecosystem development, strategic partnerships, and API strategy development. With a focus on use cases such as identifying new revenue opportunities, building developer ecosystems, forming strategic partnerships, and defining effective API strategies, Beelinx helps you unlock the full potential of your business.",
      buttonText: "Learn More",
    },
    {
      title: "API Development",
      description: "Beelinx’s API development services offer end-to-end support in designing, developing, and deploying secure, scalable, and high-performance APIs. Our team of experts collaborates closely with you to create APIs tailored to your unique business needs. We provide key services such as custom API design, secure API development, API testing and validation, and seamless API deployment and integration. Whether you're developing custom APIs, ensuring security, validating performance, or integrating with existing systems, Beelinx ensures your APIs deliver maximum value and efficiency. ",
      buttonText: "Explore More",
    },
    {
      title: "API Management",
      description: " Beelinx’s API Management Services offer a complete suite of tools to manage, secure, and analyze your APIs throughout their entire lifecycle. From design and development to deployment and monitoring, our services ensure that your APIs perform at their best while maintaining top-tier security. We provide key features such as an API gateway, developer portal, security and access control, monitoring and analytics, and comprehensive API lifecycle management. Beelinx helps you efficiently manage API traffic, provide developer resources, secure access, monitor performance, and manage API versions for optimal API functionality. ",
      buttonText: "Get Started",
    },
    {
      title: "Integration Tool Kit",
      description: "Beelinx simplifies API integration with our comprehensive Integration Tool Kit, designed to make integration into existing systems seamless and efficient. Our toolkit includes client libraries or SDKs, code samples, detailed documentation, and testing tools, ensuring smooth operation and enhanced functionality. Beelinx helps facilitate API integration, provides essential development resources, ensures integration accuracy, and supports thorough testing of API integrations for optimal performance.",
      buttonText: "Explore More",
    },
    {
      title: "Technical Services",
      description: " Beelinx’s technical services offer expert assistance, guidance, and troubleshooting for developers, users, and clients working with APIs. Our dedicated support team ensures smooth operations and quick issue resolution. Key services include support channels, technical expertise, issue resolution, best practices and guidance, and performance optimization. Beelinx helps provide technical support, troubleshoot integration issues, offer best practices, and optimize API performance to ensure seamless API usage and integration. ",
      buttonText: "Get Started",
    },
  ];

  return (
    <div style={{backgroundColor:"#f5f5f5",position:"relative",marginTop:"-24px" }}>
      <h2 style={{textAlign:"center", fontSize:"30px", paddingTop: 40, backgroundColor:"#f5f5f5"}}>Beelinx Managed Services</h2>
      <p style={{textAlign:"center", fontSize:"20px", paddingBottom: 40 , paddingTop:20,backgroundColor:"#f5f5f5"}}>From business consulting and API development to integration and support, Beelinx’s managed services ensure seamless operations and a competitive edge.</p>
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

export default ScrollSectionBoundlessConfig;
