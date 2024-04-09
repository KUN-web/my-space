import React from "react";

export default function Header() {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <img src="logo.png" alt="Logo" className="logo" />
        <div className="content">
          <h1>Welcome to Birthday Reminder</h1>
          <p>Your one-stop solution for managing staff birthdays</p>
        </div>
      </div>
    </div>
  );
}
