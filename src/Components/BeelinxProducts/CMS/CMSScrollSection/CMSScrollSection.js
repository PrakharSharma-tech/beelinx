import React from "react";
import styles from "./CMSScrollSection.module.css";

const CMSScrollSection = () => {
  const content = [
    {
      title: "Real-Time Alerts",
      description: "Real-Time Alerts provide businesses with instant notifications for new disputes, ensuring that issues are addressed promptly and efficiently. This feature is designed to minimize delays in resolution by delivering immediate updates whenever a dispute arises, enabling teams to take quick, informed action. By integrating seamlessly with existing systems and workflows, real-time alerts ensure that relevant stakeholders are informed without manual intervention, reducing the risk of overlooked issues. These alerts can be customized to suit specific business requirements, including setting priority levels, routing notifications to designated teams, or providing detailed dispute information for faster resolution. This proactive approach helps businesses maintain smooth operations, enhance customer satisfaction, and reduce financial losses associated with unresolved disputes. Industries such as finance, e-commerce, and logistics, where disputes can impact trust and revenue, particularly benefit from this capability. With real-time alerts, organizations can streamline their dispute management processes, improve response times, and uphold service quality, ensuring they remain agile and responsive in a competitive market environment.",
      buttonText: "Learn More",
    },
    {
      title: "Automated",
      description: "Automated response templates are essential tools for creating consistent, efficient, and accurate communication in various workflows. These templates are designed to streamline communication by providing predefined responses to commonly encountered situations. They help organizations maintain a standardized tone and format in their interactions with customers, clients, or internal teams. The process of generating response templates typically involves identifying recurring scenarios or queries, and then crafting responses that address these situations comprehensively. Evidence for the effectiveness of automated response templates can be seen in their ability to reduce response time, ensure uniformity across messages, and improve overall customer satisfaction. Additionally, they assist in minimizing human error by providing a reliable framework for generating responses without needing to start from scratch each time. Moreover, response templates are particularly beneficial in environments where high volumes of communication are necessary, such as customer support, sales, and technical assistance teams. The templates can be easily integrated with automation tools, enabling them to be used seamlessly in automated workflows. By leveraging response templates, organizations can ensure that their communication is both prompt and accurate, improving the efficiency of their operations while also enhancing the customer experience.",
      buttonText: "Explore More",
    },
    {
      title: "Transaction Insights",
      description: " Analyzing transaction details to understand chargeback causes is a crucial process in identifying patterns or issues that contribute to chargebacks and implementing strategies to reduce them. Chargebacks occur when a customer disputes a transaction with their bank or credit card issuer, resulting in the reversal of funds from the merchant's account. To effectively analyze transaction details, it's important to scrutinize various factors, such as the transaction amount, date, time, payment method, and customer information. In many cases, chargebacks arise due to issues like fraudulent transactions, customer dissatisfaction, or misunderstandings about the product or service purchased. By examining transaction data, including purchase history and customer interactions, merchants can pinpoint the specific triggers of chargebacks, such as unauthorized transactions, product quality issues, or shipping delays. Additionally, reviewing chargeback codes, which are used by banks to categorize disputes, provides further insight into the root cause. Identifying trends or commonalities among chargebacks can help merchants implement preventive measures, such as improving the clarity of product descriptions, ensuring secure payment processing, offering better customer support, and refining refund policies. By consistently analyzing transaction details and understanding the reasons behind chargebacks, businesses can reduce financial losses, enhance customer satisfaction, and improve their overall operational efficiency.",
      buttonText: "Get Started",
    },
    {
      title: " Chargeback Prevention",
      description: "Chargeback prevention is a critical aspect of safeguarding businesses from financial losses and maintaining a healthy relationship with customers. One effective strategy for chargeback prevention is the integration of fraud detection systems that can identify suspicious activities before they lead to disputes. These systems use advanced algorithms and machine learning techniques to monitor transactions in real-time, flagging patterns that deviate from normal behavior. For instance, the detection of unusual purchasing frequencies, large orders from high-risk locations, or mismatched customer information can signal potential fraud. By analyzing historical data, fraud detection systems can also identify repeat offenders and high-risk payment methods, enabling businesses to take proactive measures to block fraudulent transactions before they are processed. Additionally, these systems often include automated alerts and notifications that notify merchants of potentially suspicious activities, allowing for a quick response and further investigation. Integrating fraud detection systems with the payment gateway provides a seamless, real-time defense mechanism that can significantly reduce the likelihood of chargebacks resulting from unauthorized transactions. By leveraging these tools, businesses can also enhance customer trust by demonstrating their commitment to security and fraud prevention. Furthermore, when combined with other chargeback prevention strategies, such as clear billing descriptors, strong customer service, and transparent refund policies, fraud detection systems form a comprehensive approach to minimizing the impact of chargebacks and protecting revenue. Through the continuous monitoring and improvement of fraud detection measures, businesses can stay ahead of emerging threats and ensure a smoother, more secure transaction experience for their customers.",
      buttonText: "Get Started",
    },
    {
      title: "Compliance Assurance",
      description: " Maintaining detailed audit trails for regulatory purposes is a fundamental practice for ensuring compliance with industry standards, legal requirements, and internal policies. An audit trail provides a chronological record of all activities and transactions within a system, offering transparency and accountability for actions taken by users, administrators, and systems. These records are vital in industries such as finance, healthcare, and e-commerce, where regulatory bodies require companies to demonstrate proper data handling, security measures, and adherence to laws such as GDPR, HIPAA, or PCI DSS. By keeping detailed logs of all interactions, including login attempts, data modifications, user activities, and financial transactions, organizations can trace the origin and flow of information, which helps detect potential fraud, misconduct, or errors. Audit trails also play a critical role in providing evidence during audits, investigations, or litigation, as they offer an indisputable record of events. Furthermore, detailed audit logs enable businesses to identify patterns of non-compliance or vulnerabilities in their systems, allowing them to take corrective actions to mitigate risks. Automated systems can be used to generate these logs, ensuring accuracy, efficiency, and ease of retrieval, while encryption and access control mechanisms safeguard the integrity and confidentiality of the data. Having a robust audit trail system not only supports compliance efforts but also strengthens organizational security, improves operational transparency, and enhances trust with stakeholders by demonstrating a commitment to ethical practices and regulatory adherence. Regular reviews and updates to audit trails ensure that they remain accurate, comprehensive, and aligned with evolving regulations, protecting both the company and its customers from potential legal and financial consequences.",
      buttonText: "Get Started",
    },
    {
      title: " AI-Driven Insights",
      description: "Predicting chargeback risks and recommending preventive actions is an essential strategy for businesses to minimize financial losses and maintain customer trust. By analyzing transaction data, historical chargeback patterns, and various risk indicators, businesses can identify transactions that are likely to lead to chargebacks before they occur. Predictive models powered by machine learning and artificial intelligence can analyze large volumes of data, detecting patterns and anomalies that suggest a higher likelihood of disputes. These models take into account factors such as transaction frequency, customer behavior, geographical location, payment method, and product type, among others. For instance, chargebacks are often more likely to occur when a customer feels unsatisfied with a product, experiences shipping delays, or falls victim to fraudulent activity. By predicting these risks, businesses can take proactive measures to reduce their impact. Recommended preventive actions may include strengthening fraud detection systems to block suspicious transactions, providing clearer product descriptions and terms of service to reduce misunderstandings, implementing stricter verification processes for high-risk transactions, and improving customer service to resolve disputes before they escalate into chargebacks. Additionally, businesses can offer incentives such as loyalty programs, discounts, or personalized support to foster stronger relationships with customers, thereby reducing the likelihood of disputes. By continuously monitoring chargeback trends, refining predictive models, and implementing tailored preventive actions, businesses can effectively manage chargeback risks, reduce operational costs, and enhance customer satisfaction. Furthermore, this proactive approach helps protect the company’s reputation by addressing potential issues before they escalate into larger problems.",
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

export default CMSScrollSection;
