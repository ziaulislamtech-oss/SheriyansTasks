import React from "react";
import "./Services.css";

import trainingImg from "../../assets/trainingImg.jfif";
import courtImg from "../../assets/courtImg.jfif";

const Services = () => {
  return (
    <section className="services">
      {/* LEFT CONTENT */}
      <div className="services-left">
        <span className="badge">Services</span>

        <h2>
          Explore our full range of coaching, training, and tennis experiences.
          From first serve to match point — we’ve got the right program for you.
        </h2>

        <button className="primary-btn">
          Explore More <span>↗</span>
        </button>
      </div>

      {/* RIGHT CONTENT */}
      <div className="services-right">
        {/* CARD 1 */}
        <div className="service-card large">
          <img src={trainingImg} alt="Training Programs" />

          <span className="card-badge">Training Programs</span>

          <p>
            Programs designed for <br />
            all ages and abilities.
          </p>

          <button className="arrow-btn">↗</button>
        </div>

        {/* CARD 2 */}
        <div className="service-card small">
          <img src={courtImg} alt="Court Access" />

          <span className="card-badge">Court Access</span>

          <p>Hourly Court Rental</p>

          <div className="nav-buttons">
            <button>←</button>
            <button>→</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
