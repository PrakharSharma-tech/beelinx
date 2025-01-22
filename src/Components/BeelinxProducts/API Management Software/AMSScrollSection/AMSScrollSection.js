import React from "react";
import styles from "./AMSScrollSection.module.css";

const AMSScrollSection = () => {
  const content = [
    {
      title: "API Development",
      description: " Developing a user-friendly interface for API creation and testing is essential to streamline the development process and ensure ease of use for developers of all experience levels. Such an interface should offer intuitive features that simplify the often complex process of designing, implementing, and testing APIs. This includes a clean, visually organized dashboard where developers can create new endpoints, define request parameters, set authentication methods, and manage responses. An integrated testing environment is crucial, allowing developers to send requests directly from the interface, view real-time responses, and debug issues efficiently. Advanced features such as automated documentation generation, error handling guidance, and version control can further enhance usability and productivity. Additionally, providing support for various API protocols (like REST, GraphQL, or SOAP) and tools for monitoring performance or tracking usage metrics can make the platform versatile and powerful. By focusing on simplicity and accessibility, the interface can reduce the learning curve, foster collaboration among teams, and accelerate API development cycles, ultimately leading to higher-quality software solutions.",
      buttonText: "Learn More",
    },
    {
      title: "API Gateway",
      description: "An API Gateway serves as a critical component in modern application architectures, providing centralized control for routing and managing API traffic effectively. It acts as an intermediary between clients and backend services, streamlining communication and ensuring that API requests are handled efficiently and securely. With its ability to route requests to appropriate endpoints, an API Gateway simplifies the complexities of managing multiple microservices, reducing overhead for developers and system administrators. It also offers powerful features such as load balancing, caching, and rate limiting to optimize performance and ensure scalability. Security is another key advantage, as the gateway can enforce authentication, authorization, and data encryption policies to protect sensitive information. Additionally, it enables API versioning and monitoring, providing insights into traffic patterns, performance metrics, and potential bottlenecks. By offering a unified interface for managing APIs, an API Gateway not only improves operational efficiency but also enhances the reliability and security of the entire system, making it an indispensable tool for modern application ecosystems.",
      buttonText: "Explore More",
    },
    {
      title: "Analytics",
      description: " Analytics plays a vital role in understanding and optimizing the performance of APIs, and real-time dashboards are at the core of effective API monitoring and management. These dashboards provide a comprehensive and dynamic view of API usage and health, enabling businesses to gain actionable insights at a glance. With real-time analytics, developers and administrators can track critical metrics such as request volumes, response times, error rates, and latency across various endpoints. This level of visibility ensures that any potential issues, such as performance bottlenecks or spikes in traffic, can be identified and addressed immediately.Additionally, real-time dashboards allow organizations to monitor user behavior, identify trends, and better understand how their APIs are being utilized. This data can inform strategic decisions, such as optimizing endpoint performance, prioritizing feature development, or scaling resources to meet growing demands. Furthermore, health monitoring tools integrated into these dashboards provide alerts and notifications for system anomalies or failures, ensuring minimal downtime and enhanced reliability.By offering an intuitive and interactive interface, real-time analytics dashboards empower teams to make data-driven decisions and continuously improve the quality and performance of their APIs. Whether for operational insights, troubleshooting, or long-term planning, these dashboards are an indispensable tool for maintaining the health, efficiency, and scalability of an API-driven system.",
      buttonText: "Get Started",
    },
    {
      title: "Security",
      description: "Security is a cornerstone of modern API management, and implementing robust mechanisms like role-based access control (RBAC) and token-based authentication is essential for safeguarding sensitive data and ensuring authorized access. Role-based access control allows administrators to define and enforce granular permissions, assigning specific roles to users or systems based on their responsibilities and access requirements. This ensures that each user or application can interact with the API only within the scope of their assigned role, minimizing the risk of unauthorized access or data breaches.Token-based authentication adds another critical layer of security by verifying the identity of users or systems accessing the API. Through the use of secure tokens, such as JSON Web Tokens (JWTs) or OAuth tokens, APIs can ensure that requests are authenticated and authorized before granting access. Tokens are issued after a successful login or authentication process and are time-bound, reducing the risk of misuse. They also enable stateless communication, which enhances scalability and performance by eliminating the need to maintain session state on the server.Together, RBAC and token-based authentication provide a robust security framework for APIs, protecting them from threats such as unauthorized data access, privilege escalation, and malicious attacks. By combining these measures, organizations can confidently expose their APIs to partners, clients, and internal teams while maintaining strict control over who can access what. This ensures that API security is not only effective but also scalable, enabling businesses to grow without compromising on protection.",
      buttonText: "Get Started",
    },
    {
      title: "Monetization",
      description: " Monetization of APIs has become a critical strategy for businesses looking to unlock new revenue streams from their digital assets. By enabling subscription-based or pay-per-use API models, organizations can offer their services in a flexible, scalable, and consumer-friendly manner. Subscription-based models provide predictable revenue by charging users a recurring fee, typically based on access tiers or usage limits. These tiers can cater to a diverse audience, from small-scale developers to enterprise clients, ensuring that customers pay for only what they need while gaining access to premium features or enhanced support at higher subscription levels.On the other hand, pay-per-use models align closely with the consumption-based economy, where customers are charged based on their actual usage of API resources. This model is particularly attractive for businesses offering APIs with variable demand, such as data processing, analytics, or cloud services. Pay-per-use ensures that clients have complete cost transparency and only pay for the resources they consume, making it an appealing option for startups or organizations with fluctuating workloads.API monetization platforms often include tools for usage tracking, billing, and analytics to help businesses manage and optimize their monetization strategies. They enable companies to set pricing plans, monitor API consumption in real time, and automate the invoicing process. This creates a seamless experience for both the API provider and the consumer, fostering trust and long-term relationships.By implementing these monetization models, businesses can not only recover operational costs but also turn their APIs into profit centers. This approach encourages innovation, as developers are incentivized to create high-value APIs that meet market demands. Additionally, monetization fosters partnerships by allowing external developers to integrate and leverage APIs while contributing to the provider's revenue. With subscription-based and pay-per-use options, businesses can remain competitive and agile in the fast-evolving API economy.",
      buttonText: "Get Started",
    },
    {
      title: " Developer Portal",
      description: "A Developer Portal serves as a centralized, self-service hub where developers can seamlessly explore, test, and consume APIs, empowering them to build innovative solutions efficiently. It acts as a gateway for both internal and external developers to access critical API documentation, interactive testing tools, and resources necessary for successful integration. By providing a user-friendly interface, the portal eliminates traditional barriers to API adoption, ensuring that developers, regardless of skill level, can easily navigate the platform and access the tools they need.Key features of a robust developer portal include comprehensive API documentation that outlines endpoints, request-response structures, and usage examples in clear, concise language. This documentation is often enriched with code samples in various programming languages, enabling developers to get started quickly without extensive research. Additionally, interactive testing tools, such as API sandboxes, allow developers to experiment with API calls directly from the portal, giving them hands-on experience and confidence before integrating the APIs into their applications.The portal also provides features like API key generation, authentication guidelines, and usage analytics, enabling developers to monitor their consumption and optimize their implementations. Many modern developer portals support collaboration by offering forums, FAQs, and community-driven resources, fostering a sense of engagement and support among users. Advanced portals may even include tutorials, SDKs, and integration guides tailored to popular development environments.By offering a self-service approach, developer portals save time and resources for both API providers and consumers. Developers can independently access everything they need to integrate APIs into their projects without relying heavily on support teams, while businesses can focus on scaling their API offerings and building strategic partnerships. A well-designed developer portal is not just a tool—it’s a critical asset that enhances developer experience, accelerates API adoption, and drives innovation by empowering developers to create value with ease.",
      buttonText: "Get Started",
    },
    
 
  ];

  return (
    <div style={{backgroundColor:"#f5f5f5",position:"relative",marginTop:"-24px" }}>
      <h2 style={{textAlign:"center", fontSize:"30px", paddingTop: 40, backgroundColor:"#f5f5f5"}}>Beelinx Products</h2>
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

export default AMSScrollSection;
