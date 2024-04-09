import React from "react";

export default function Features() {
  return (
    <div className="features-section">
      <h2>Features</h2>
      <div className="features-card-container">
        <div className="feature-card">
          <i className="fas fa-birthday-cake"></i>
          <h3>Upcoming Birthdays</h3>
          <p>Receive notifications for upcoming staff birthdays.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-user-circle"></i>
          <h3>Staff Profiles</h3>
          <p>Customize your staff profile with ease.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-bell"></i>
          <h3>Real-Time Notifications</h3>
          <p>Get notified instantly about important events.</p>
        </div>
      </div>
    </div>
  );
}
