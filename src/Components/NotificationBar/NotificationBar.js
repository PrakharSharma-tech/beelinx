import React from 'react';
import './NotificationBar.css'; // Import the CSS file

const NotificationBar = () => {
  return (
    <div className="notification-bar">
       {/* Replace with your icon */}
      <span className="notification-text">
      Create innovative products with Robust, Secure and Scalable state of the art APIs.{" "}
        <a href="#" className="notification-link">Learn more.</a>
      </span>
    </div>
  );
};

export default NotificationBar;
