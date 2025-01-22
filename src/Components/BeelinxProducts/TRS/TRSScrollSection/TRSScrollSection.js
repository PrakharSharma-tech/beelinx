import React from "react";
import styles from "./TRSScrollSection.module.css";

const TRSScrollSection = () => {
  const content = [
    {
      title: " Automated Matching",
      description: "Automated Matching is a powerful feature designed to streamline the reconciliation process by intelligently matching transactions from multiple sources based on configurable rules. This capability eliminates the manual effort traditionally required to identify and pair corresponding entries across disparate systems, such as bank statements, accounting records, invoices, and payment systems. By leveraging advanced algorithms and user-defined matching criteria, automated matching ensures accuracy, consistency, and efficiency in financial workflows.The system works by analyzing transaction data from various sources, including banks, enterprise resource planning (ERP) systems, and payment gateways, and applying configurable rules to identify matches. These rules can be tailored to fit specific business requirements, such as matching based on transaction amounts, dates, invoice numbers, or unique identifiers. This flexibility allows organizations to adapt the matching process to their operational needs, reducing errors and discrepancies that often arise in manual reconciliation.In addition to improving accuracy, automated matching significantly accelerates the reconciliation process. Transactions that meet the predefined criteria are matched automatically, enabling finance teams to focus their efforts on exceptions or unmatched items. For unmatched transactions, the system can provide intelligent suggestions based on partial matches or historical data, further minimizing manual intervention. Advanced features, such as automated notifications and audit trails, enhance transparency and accountability, making it easier to track and resolve discrepancies.By automating the matching process, organizations can achieve better financial control, reduce operational costs, and improve compliance with regulatory requirements. It also ensures scalability, as the system can handle large transaction volumes with ease, supporting the needs of growing businesses. Automated matching is not just a time-saver—it is a critical component of modern financial operations, empowering organizations to maintain accuracy, efficiency, and confidence in their transaction management processes.",
      buttonText: "Learn More",
    },
    {
      title: "Discrepancy Management",
      description: "Discrepancy Management is an essential feature designed to identify, flag, and resolve mismatches in data automatically, ensuring accuracy and consistency across financial and operational workflows. This capability plays a critical role in processes like transaction reconciliation, inventory management, compliance checks, and more, where even minor discrepancies can lead to significant issues if left unaddressed. By automating the identification and management of mismatches, organizations can maintain high levels of data integrity and operational efficiency.At its core, Discrepancy Management works by comparing data across multiple sources, such as bank statements, invoices, accounting records, or inventory systems, to detect inconsistencies. Whenever mismatches are identified—whether due to differences in amounts, missing entries, duplicate transactions, or timing issues—the system flags them for review. This real-time identification allows teams to address discrepancies promptly, reducing delays and preventing errors from propagating through other processes.The system is equipped with advanced capabilities, such as customizable rules and thresholds, which allow organizations to define what constitutes a discrepancy based on their specific requirements. For instance, minor rounding differences can be ignored, while larger variances or critical mismatches are prioritized for immediate attention. Additionally, intelligent tools such as pattern recognition and machine learning algorithms can provide actionable insights into the root causes of discrepancies, enabling teams to resolve issues efficiently.To streamline resolution, the system often integrates with workflows that allow users to investigate and correct flagged items directly within the platform. Automated notifications and alerts ensure that discrepancies are brought to the attention of relevant stakeholders promptly, while audit trails provide a clear record of the actions taken to resolve mismatches. This transparency fosters accountability and compliance, particularly in industries with stringent regulatory requirements.Discrepancy Management is especially valuable in high-volume environments where manual review is impractical. By automating the process, organizations can minimize human error, reduce the time and effort spent on resolving mismatches, and enhance overall productivity. Furthermore, it helps businesses maintain trust with customers and partners by ensuring that records are accurate and reliable. With Discrepancy Management, organizations can proactively address inconsistencies, maintain financial and operational stability, and build a solid foundation for scalable growth.",
      buttonText: "Explore More",
    },
    {
      title: "Real-Time Reconciliation",
      description: " Real-Time Reconciliation is a transformative process that ensures continuous alignment and verification of financial, operational, or transactional data across multiple systems, significantly minimizing delays and enhancing accuracy. This approach eliminates the inefficiencies of traditional batch reconciliation methods, where mismatches might only be identified after hours or even days. Instead, Real-Time Reconciliation empowers organizations to detect and address discrepancies as they occur, fostering a proactive and responsive operational environment.This process operates by constantly monitoring data streams from various sources—such as bank transactions, accounting systems, inventory records, or payment gateways—and comparing them in real time to ensure consistency. Any deviations or mismatches are immediately flagged, allowing teams to investigate and resolve issues promptly. This near-instant feedback loop reduces the time spent on manual reviews and corrections, streamlining workflows and ensuring that data remains accurate and up-to-date.The benefits of Real-Time Reconciliation extend beyond speed and accuracy. By minimizing delays, organizations can maintain a clearer and more reliable financial picture, which is essential for making informed decisions, managing cash flow effectively, and ensuring compliance with regulatory requirements. For instance, businesses can immediately identify and address duplicate payments, missed transactions, or unauthorized activities, reducing financial risk and enhancing operational efficiency.Advanced Real-Time Reconciliation systems often leverage cutting-edge technologies such as machine learning and artificial intelligence to enhance their capabilities. These systems can automatically categorize and match transactions based on predefined rules, learn from historical data to improve accuracy, and even predict potential discrepancies before they occur. Customizable rules and thresholds allow organizations to tailor the reconciliation process to their specific needs, ensuring flexibility and adaptability across various industries and use cases.Integration with other enterprise systems further amplifies the power of Real-Time Reconciliation. For example, syncing with enterprise resource planning (ERP) platforms, customer relationship management (CRM) systems, and banking APIs enables seamless data exchange, ensuring that all departments have access to the most current and accurate information. This interconnected approach reduces silos, enhances collaboration, and supports a unified operational strategy.Real-Time Reconciliation is especially valuable in fast-paced industries such as e-commerce, banking, and logistics, where high transaction volumes and dynamic operations demand immediate data validation. By automating the reconciliation process and enabling continuous monitoring, organizations can not only save time and resources but also build trust with stakeholders by ensuring transparency and reliability in their operations. Ultimately, Real-Time Reconciliation is a cornerstone of modern, efficient, and scalable business practices, enabling organizations to thrive in a competitive and data-driven world.",
      buttonText: "Get Started",
    },
    {
      title: " Multi-Format",
      description: "Multi-Format Data Import offers a robust solution for integrating data from a wide range of sources and file types, including CSV, XML, JSON, and more. This capability ensures seamless compatibility with diverse platforms, enabling organizations to efficiently handle data exchange with various partners, systems, or applications without manual intervention. By automating the import process, businesses can streamline operations, eliminate time-consuming data transformation tasks, and reduce the likelihood of errors. The feature also includes built-in validation to ensure the accuracy and consistency of incoming data, along with transformation options to align it with internal data schemas or standards. Industries such as finance, logistics, healthcare, and e-commerce, which rely heavily on the smooth flow of information, benefit significantly from this functionality. By enabling the quick and reliable integration of multi-format data, businesses can enhance scalability, improve collaboration with external stakeholders, and make data-driven decisions with greater efficiency. This adaptability positions organizations to thrive in an interconnected and dynamic digital ecosystem.",
      buttonText: "Get Started",
    },
    {
      title: "Customizable Rules ",
      description: "Customizable Rules empower businesses to define, modify, and adapt transaction matching criteria to meet specific operational and strategic needs. This feature offers unparalleled flexibility by allowing users to create tailored rules that align with unique workflows, transaction complexities, or industry-specific regulations. Whether it involves setting thresholds for partial matches, creating tolerance levels for discrepancies, or designing multi-layered validation processes, customizable rules ensure that reconciliation and matching are precise and effective. As business processes evolve, this adaptability allows organizations to update and optimize their rules without disrupting ongoing operations. By automating these configurations, businesses can reduce manual intervention, minimize errors, and improve the speed and accuracy of transaction handling. This capability is particularly valuable in industries such as finance, e-commerce, and logistics, where transactions often vary in structure and volume. With customizable rules, companies can handle diverse scenarios, such as cross-border payments, multi-currency reconciliations, and high-frequency transactions, with ease and confidence. The ability to adapt matching criteria not only enhances operational efficiency but also strengthens compliance, scalability, and customer satisfaction, ensuring that businesses can stay agile in an increasingly complex and dynamic environment.",
      buttonText: "Get Started",
    },
    {
      title: "Fraud Detection",
      description: "Fraud Detection provides businesses with robust tools to identify and mitigate suspicious activities in real-time, safeguarding operations and assets from potential threats. By leveraging advanced algorithms, machine learning models, and behavioral analytics, this feature continuously monitors transactions and user activities for anomalies or patterns indicative of fraud. Real-time alerts ensure that any unusual behavior, such as unauthorized access, abnormal transaction volumes, or deviations from established norms, is flagged immediately, allowing businesses to respond swiftly and effectively. This proactive approach minimizes financial losses, protects sensitive data, and upholds the integrity of the system. Fraud detection systems can be tailored to suit specific industry requirements, enabling organizations to implement customizable rules, thresholds, and workflows for investigation and resolution. The integration of historical data, predictive analytics, and risk scoring enhances accuracy, reducing false positives while ensuring no genuine threat goes unnoticed. Industries such as banking, retail, and e-commerce rely heavily on these systems to maintain customer trust, regulatory compliance, and operational efficiency. With the increasing complexity of digital transactions and the growing sophistication of cybercriminals, real-time fraud detection is an indispensable component of modern risk management strategies",
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

export default TRSScrollSection;
