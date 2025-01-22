import React from "react";
import styles from "./LMSScrollSection.module.css";

const LMSScrollSection = () => {
  const content = [
    {
      title: " Application Management",
      description: "Digital application forms with document upload capabilities provide a seamless and efficient way for businesses and organizations to collect information and necessary documentation from users in a single, streamlined process. These forms enable applicants to fill out required fields online and upload supporting documents, such as identification, financial statements, resumes, or certificates, directly from their devices. This eliminates the need for physical paperwork, reduces processing time, and minimizes the risk of lost or incomplete submissions. Advanced digital forms can incorporate dynamic fields, guiding users through the process with contextual prompts and validations to ensure that all required information is provided accurately. Document upload capabilities enhance functionality by supporting multiple file formats, offering drag-and-drop features, and providing real-time feedback on successful uploads or errors like incorrect file sizes or formats. Additionally, these forms can integrate with secure cloud storage systems, ensuring that uploaded documents are stored safely with encryption and access controls to protect sensitive data. Automated workflows can be triggered upon form submission, routing applications to the appropriate teams for review, approval, or further processing. This not only accelerates the decision-making process but also enhances transparency by providing applicants with real-time status updates on their submissions. Digital application forms are highly customizable, allowing businesses to brand them and adapt their design to suit specific use cases, such as job applications, loan requests, or event registrations. They can also be integrated with customer relationship management (CRM) or enterprise resource planning (ERP) systems, ensuring seamless data synchronization and efficient record-keeping. By leveraging digital application forms with document upload capabilities, businesses can improve user experience, reduce administrative overhead, and ensure faster, more accurate processing of applications, ultimately driving greater efficiency and customer satisfaction.",
      buttonText: "Learn More",
    },
    {
      title: " Approval Workflow",
      description: "A streamlined approval process with rule-based decisioning empowers businesses to handle approvals quickly and efficiently by automating routine decisions based on predefined rules and criteria. This approach eliminates manual intervention for straightforward cases, significantly reducing processing times while ensuring consistency and compliance with organizational policies. Rule-based decisioning allows businesses to establish clear, objective criteria for approvals, such as thresholds for budget approvals, eligibility conditions for applications, or compliance checks for regulatory requirements. When an application or request is submitted, the system evaluates it against these rules in real-time, instantly approving, rejecting, or flagging it for further review if it falls outside predefined parameters. This not only accelerates the approval process but also minimizes errors and subjectivity, ensuring fair and transparent outcomes. For more complex cases requiring human input, the system can route the request to the appropriate decision-maker with all relevant details, reducing the workload on approvers and enabling them to focus on high-priority or exceptional cases. By integrating rule-based decisioning with workflow automation tools, businesses can create end-to-end processes that include notifications, tracking, and reporting, ensuring that all stakeholders remain informed and that approvals are documented for audit purposes. The ability to customize rules based on evolving business needs or regulatory changes adds flexibility to the system, ensuring it remains aligned with organizational objectives over time. This streamlined approach enhances operational efficiency, reduces bottlenecks, and improves user satisfaction by providing faster and more accurate approvals. Ultimately, a streamlined approval process with rule-based decisioning is a critical tool for organizations looking to scale their operations, optimize resource allocation, and maintain high standards of accuracy and compliance.",
      buttonText: "Explore More",
    },
    {
      title: " Disbursement Management",
      description: "Automating fund disbursement to borrower accounts streamlines the lending process by ensuring quick, accurate, and secure transfer of funds without manual intervention. This approach leverages advanced payment systems to handle the entire disbursement workflow, from verifying borrower details to initiating transactions directly to their bank accounts, mobile wallets, or other preferred payment methods. By integrating automation into the disbursement process, lenders can eliminate delays caused by manual reviews or processing, enabling borrowers to access funds almost instantly after approval. The system validates borrower account details, checks compliance with lending policies, and ensures sufficient funds are available before executing the disbursement, reducing the risk of errors or failed transactions. Automated fund disbursement systems can be programmed to accommodate various loan types, such as personal, business, or education loans, with customizable rules for disbursing funds in a lump sum or installments. Additionally, these systems generate real-time notifications to inform borrowers of the transaction status, enhancing transparency and trust. For lenders, automation simplifies operational workflows, minimizes administrative costs, and provides a complete audit trail of disbursement activities, ensuring compliance with regulatory requirements and supporting financial reconciliation. Integration with loan management software and accounting tools ensures that all disbursement data is accurately recorded, enabling seamless tracking and reporting. Automation also enables scalability, allowing lenders to handle high volumes of transactions efficiently while maintaining precision and reliability. By automating fund disbursement to borrower accounts, lenders can improve the borrower experience, enhance operational efficiency, and focus on growing their portfolio with confidence, knowing that the disbursement process is robust, secure, and fully optimized.",
      buttonText: "Get Started",
    },
    {
      title: " Repayment Tracking",
      description: "Monitoring repayment schedules with automated reminders enhances loan management efficiency and borrower compliance by ensuring timely repayment of installments without manual follow-ups. Automated systems track repayment schedules for each borrower, including due dates, amounts, and payment methods, and send timely reminders via email, SMS, or app notifications to borrowers before and on the due date. These reminders provide critical information such as the payment amount, due date, and payment link or instructions, making it convenient for borrowers to fulfill their obligations. By automating this process, lenders can reduce the risk of late payments, defaults, and the associated administrative burden of manually managing repayment communications. The system can also handle personalized messaging, adjusting the tone and content based on borrower behavior, such as gentle reminders for first-time delays or escalations for repeated non-compliance. Additionally, these systems can generate alerts for lenders when payments are missed, enabling swift follow-ups or adjustments to repayment plans if necessary. Integration with payment gateways ensures that borrowers can make payments directly from the reminders, further simplifying the process. Automated repayment monitoring provides lenders with real-time visibility into repayment statuses, generates detailed reports for financial analysis, and maintains a comprehensive audit trail for compliance and record-keeping. Borrowers benefit from improved convenience and reduced risk of penalties due to missed payments, fostering a positive relationship with the lender. This automation not only enhances operational efficiency but also contributes to improved cash flow management, reduced delinquencies, and increased borrower satisfaction, making it an indispensable tool for modern loan management systems.",
      buttonText: "Get Started",
    },
    {
      title: " Multi-Product",
      description: " Managing various loan types, including personal, mortgage, auto, and business loans, requires a comprehensive and flexible system that can cater to the unique requirements of each loan category while ensuring seamless operations, accurate tracking, and compliance with regulations. Personal loans often require quick processing, minimal documentation, and flexible repayment terms, and a management system must be capable of evaluating creditworthiness, disbursing funds swiftly, and tracking repayments over time. Mortgage loans, on the other hand, involve more complex processes, including property appraisals, underwriting, and longer repayment periods. A robust system can manage these tasks by automating the collection of property information, ensuring regulatory compliance, and managing interest rates, payment schedules, and escrow accounts throughout the loan term. Auto loans require specific handling, such as vehicle valuation, insurance requirements, and loan-to-value ratios, and a system must efficiently process approvals, disbursements, and repayment schedules while managing any potential repossession scenarios in the event of non-payment. Business loans often come with unique features such as varying interest rates based on business performance, collateral requirements, and flexible repayment structures. A comprehensive loan management system integrates all these diverse factors, providing tailored workflows for each loan type, from application and approval to disbursement and repayment monitoring. It ensures that the terms for each loan type are met, offering transparency and flexibility for both the borrower and lender. Automated features like real-time loan status tracking, repayment reminders, and dynamic interest rate adjustments based on market conditions further enhance the efficiency of loan management. Integration with accounting, CRM, and payment systems allows businesses to maintain a complete view of their loan portfolio, track performance, generate reports, and ensure financial compliance. By managing various loan types through a unified platform, businesses can streamline operations, improve customer service, and optimize their financial performance, all while ensuring that each loan is handled according to its specific requirements.",
      buttonText: "Get Started",
    },
    {
      title: "  Reporting",
      description: "Generating detailed reports on loan performance, repayments, and delinquencies is crucial for maintaining financial transparency, optimizing loan management processes, and ensuring informed decision-making. A comprehensive reporting system enables lenders to track the performance of individual loans and entire portfolios, providing insights into key metrics such as loan balances, repayment histories, interest accrued, and any associated fees. These reports offer an in-depth view of how loans are performing over time, highlighting trends in borrower behavior, repayment consistency, and overall loan profitability. For repayments, detailed reports can track the status of each payment, including amounts, due dates, payment methods, and any delays or early repayments. This helps identify borrowers who are consistently on schedule and those who may require intervention or adjustments to their repayment plans. Additionally, reports on delinquencies are essential for monitoring overdue loans, identifying borrowers who are at risk of default, and assessing the financial health of the loan portfolio. These reports can categorize delinquencies by the length of time the loan has been overdue, providing early warning signs that enable lenders to take proactive measures such as sending reminders, offering payment restructuring, or escalating collection efforts. Real-time data and automated reporting allow for quick analysis of loan portfolios, enabling businesses to adjust strategies for risk management, collections, and customer relations. Detailed reports can also include visualizations, such as charts and graphs, to provide a clearer understanding of loan trends, repayment patterns, and delinquency rates, making it easier for lenders to identify areas of concern or opportunities for improvement. Furthermore, these reports can be used to ensure compliance with regulatory requirements, support audits, and assist in financial forecasting and planning. By generating accurate, timely, and actionable reports, businesses can improve decision-making, mitigate risks, enhance customer relationships, and ensure that their loan portfolios remain healthy and profitable over time.",
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

export default LMSScrollSection;
