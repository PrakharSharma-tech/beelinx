import React from "react";
import styles from "./POSScrollSection.module.css";

const POSScrollSection = () => {
  const content = [
    {
      title: "Sales Transaction",
      description: "Processing sales quickly with barcode scanning, cash, credit, or mobile payments is essential for enhancing the efficiency and convenience of transactions, whether in physical stores, online, or in any other point-of-sale environment. Barcode scanning simplifies the checkout process by allowing items to be quickly identified and priced, reducing the need for manual entry and minimizing the chances of human error. This accelerates the sales process, allowing staff to serve more customers in less time, which is especially crucial during peak hours. When combined with a range of payment options, such as cash, credit cards, and mobile payments, businesses can offer customers a seamless and flexible experience that suits their preferred payment methods. Mobile payment systems, such as Apple Pay, Google Wallet, or other contactless payment solutions, allow for even faster transactions, eliminating the need for physical cash or card swipes and enhancing security by encrypting payment details. The integration of these payment methods into a centralized point-of-sale system ensures that all transactions are processed accurately and securely in real time, providing both the customer and the business with instant confirmation of the sale. Furthermore, a system that accommodates multiple payment types can cater to a wider range of customer preferences, which in turn improves customer satisfaction and encourages repeat business. In addition to improving the speed and convenience of sales, barcode scanning and multiple payment options streamline inventory management, as sales data can be automatically updated in the system, reducing the chances of stock discrepancies. This efficiency enables businesses to operate at a higher capacity, improve cash flow, and enhance the overall customer experience, while ensuring that payments are processed securely and with minimal delays. By implementing modern sales and payment technologies, businesses can stay competitive, meet customer expectations, and create an optimized, frictionless purchasing process that encourages loyalty and drives revenue.",
      buttonText: "Learn More",
    },
    {
      title: " Inventory Management",
      description: "Tracking stock levels in real time and automating stock replenishment are crucial strategies for businesses looking to optimize inventory management, reduce costs, and improve operational efficiency. By utilizing inventory management systems that provide live updates on stock levels, businesses can have immediate visibility into their inventory, ensuring they always know what’s available and what needs to be restocked. This real-time tracking eliminates the risk of overstocking or stockouts, both of which can lead to lost sales, customer dissatisfaction, and increased operational costs. With automated stock replenishment systems, businesses can set predetermined thresholds for inventory levels, triggering automatic reorders when stock reaches a certain level. This ensures that products are consistently available without the need for manual intervention, allowing businesses to focus on other aspects of operations. The system can also take into account factors like sales velocity, seasonality, and trends, helping to forecast demand and adjust replenishment strategies accordingly. For example, during high-demand periods, such as holiday seasons or special promotions, the system can increase the reorder frequency or adjust quantities to prevent shortages. Additionally, integrating stock tracking and replenishment with supplier networks streamlines the supply chain, reducing lead times and enhancing the responsiveness of inventory management. With this level of automation, businesses can ensure that they maintain optimal stock levels, minimize the risk of excess inventory, and avoid costly rush orders. Furthermore, real-time tracking and automation can lead to better decision-making, as data on inventory turnover, product performance, and trends can be analyzed to inform future purchasing decisions. Overall, real-time stock tracking and automated replenishment not only improve operational efficiency and cost-effectiveness but also enhance the customer experience by ensuring that products are consistently available when needed, ultimately supporting long-term business growth and profitability.",
      buttonText: "Explore More",
    },
    {
      title: "Loyalty Management",
      description: " Book cataloging, borrowing, and return tracking are essential components of an efficient library management system, enabling smooth operations and ensuring that resources are available for all patrons when needed. The process begins with cataloging, where each book is systematically entered into a database with key information such as title, author, genre, ISBN, and unique identification codes. This information is often paired with detailed metadata, such as book summaries, publisher details, and availability status, making it easier for librarians and users to search for and locate materials. With an organized cataloging system in place, patrons can quickly find the books they are looking for, either through physical shelving or an online library catalog. The borrowing process follows, where patrons check out books by scanning their unique library card or account information, allowing the system to record who is borrowing the book, the due date, and any applicable fines or conditions. This tracking system ensures that books are returned on time, and it helps prevent losses or theft by maintaining an accurate record of all items in circulation. When a book is returned, the system automatically updates its status, making it available for other patrons to borrow. In addition, the system can track overdue items, sending reminders or alerts to borrowers and calculating any late fees. A robust library management system may also include features such as reserving books, renewing borrowed items, and managing hold requests. By automating these processes, libraries not only improve operational efficiency but also provide a better experience for patrons, as they can seamlessly borrow, return, and reserve books based on their needs. Additionally, this comprehensive tracking system aids in inventory management, allowing libraries to maintain an up-to-date and accurate collection, monitor trends in borrowing patterns, and make informed decisions about purchasing new materials. Ultimately, effective book cataloging, borrowing, and return tracking ensure that libraries run smoothly, resources are efficiently utilized, and patrons have easy access to the materials they need, fostering a positive environment for learning and community engagement.",
      buttonText: "Get Started",
    },
    {
      title: "Multi-Channel ",
      description: "Managing both in-store and online sales from a single platform is an essential approach for businesses seeking to streamline their operations, enhance customer experience, and optimize inventory management. By integrating both sales channels into a unified system, businesses can ensure a seamless shopping experience for customers, whether they are shopping in-store or online. A single platform allows for real-time synchronization of inventory, ensuring that product availability is accurately reflected across both channels. This eliminates the risk of selling out-of-stock items or overselling inventory, which could lead to customer dissatisfaction and lost revenue. Furthermore, with integrated sales data, businesses can gain valuable insights into customer behavior, purchasing patterns, and sales trends, allowing for more targeted marketing efforts and personalized experiences. In-store staff can also access online sales data to assist customers with product inquiries, check stock availability, or even facilitate order fulfillment for items that are not available in-store. For online sales, the platform can support multiple payment methods, order tracking, and easy returns, while in-store, it can enable streamlined checkout processes and the ability to place special orders for customers. Additionally, businesses can offer features like click-and-collect, where customers purchase online and pick up their items in-store, or create promotional strategies that work across both channels. The single platform also simplifies the management of customer profiles, loyalty programs, and communication, ensuring that customers are recognized across both touchpoints and can easily access their purchase history, track orders, or redeem rewards. By centralizing sales management, businesses can improve operational efficiency, reduce manual tasks, and provide a more consistent and cohesive brand experience for customers. Ultimately, managing both in-store and online sales from a single platform not only drives sales but also enhances customer loyalty, satisfaction, and retention, positioning businesses to thrive in an increasingly omnichannel retail environment.",
      buttonText: "Get Started",
    },
    {
      title: "Mobile POS",
      description: "Enabling sales associates to process transactions on the floor using mobile devices is a powerful strategy that enhances customer service, increases operational efficiency, and drives sales in retail environments. By equipping sales associates with mobile point-of-sale (POS) systems, businesses allow associates to assist customers more effectively and provide a personalized shopping experience without the need to go back to a central cash register. With mobile devices, sales associates can check stock availability in real-time, offer product recommendations based on customer preferences, and complete transactions on the spot, reducing wait times and improving overall customer satisfaction. These devices can also be used to scan barcodes for faster checkout, access customer purchase histories to tailor offers, and even process multiple forms of payment such as credit cards, mobile wallets, or loyalty points, ensuring a smooth and convenient payment process for customers. In addition, mobile POS systems allow for greater flexibility and mobility on the sales floor, enabling associates to engage with customers directly, offer assistance, and close sales wherever they are in the store, improving the shopping experience by eliminating the need for customers to wait in line or seek out a cashier. This not only speeds up the sales process but also empowers associates to take more ownership of the customer journey, leading to increased upselling and cross-selling opportunities. Furthermore, mobile devices can be integrated with inventory management systems, allowing associates to perform tasks such as checking stock levels, placing orders, or even fulfilling online orders directly from the sales floor, creating a more seamless integration between in-store and online operations. Overall, enabling sales associates to process transactions using mobile devices creates a more efficient, flexible, and customer-centric retail environment, fostering greater engagement, enhancing the customer experience, and driving sales performance.",
      buttonText: "Get Started",
    },
    {
      title: " Accounting & ERP",
      description: "Seamlessly integrating with accounting and ERP (Enterprise Resource Planning) tools for easy financial tracking is a crucial strategy for businesses looking to streamline their financial management, improve accuracy, and enhance overall operational efficiency. By connecting sales, inventory, and financial data with accounting and ERP systems, businesses can automate the flow of information across different departments, reducing manual entry and the risk of errors. This integration ensures that every transaction, whether it's a sale, purchase, or return, is automatically recorded in the accounting system, providing real-time visibility into the company’s financial health. For example, when a sale is made, the inventory and sales data are updated immediately, and the financial records reflect the revenue generated, allowing businesses to track cash flow, profit margins, and expenses without delay. This synchronization also simplifies the preparation of financial statements, tax reporting, and audits, as all the necessary data is readily available and consistent across the organization. Furthermore, integrated accounting and ERP tools enable businesses to monitor key financial metrics, such as accounts payable and receivable, asset management, and payroll, with greater ease and accuracy. These systems can also generate custom reports and forecasts, giving decision-makers the insights needed to make informed, data-driven decisions. Additionally, businesses can streamline procurement and inventory management processes, as purchases made through the ERP system can be automatically linked to accounts payable, improving cash flow management and reducing stock discrepancies. With a seamless integration, businesses eliminate the need for manual reconciliation between different systems, saving time, reducing operational costs, and ensuring that all financial transactions are accounted for correctly. Ultimately, integrating accounting and ERP tools for financial tracking enhances transparency, enables more accurate financial planning, and supports growth by providing a unified, real-time view of the organization’s financial performance across all departments.",
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

export default POSScrollSection;
