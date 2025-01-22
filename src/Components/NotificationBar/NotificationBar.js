import React from 'react';
import './NotificationBar.css'; // Import the CSS file

const NotificationBar = () => {
  return (
    <div className="notification-bar">
       {/* Replace with your icon */}
      <span className="notification-text">
        Beelinx signs agreement to acquire Klaxoon, a leading visual collaboration platform.{" "}
        <a href="#" className="notification-link">Learn more.</a>
      </span>
    </div>
  );
};

export default NotificationBar;
