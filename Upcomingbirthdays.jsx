import React from "react";

export default function Upcomingbirthdays() {
  return (
    <div className="features-section">
      <h2>Upcoming Birthdays</h2>

      <div className="features-card-container">
        <div className="feature-card">
          <img src="person1.jpg" alt="Person 1" />
          <h2>John Doe</h2>
          <p>Software Engineer</p>
          <p>Birthday: January 15th</p>
        </div>

        <div className="feature-card">
          <img src="person2.jpg" alt="Person 2" />
          <h2>Jane Smith</h2>
          <p>Graphic Designer</p>
          <p>Birthday: March 22nd</p>
        </div>

        <div className="feature-card">
          <img src="person3.jpg" alt="Person 3" />
          <h2>Michael Johnson</h2>
          <p>Marketing Manager</p>
          <p>Birthday: July 5th</p>
        </div>
      </div>
    </div>
  );
}
