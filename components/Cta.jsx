import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Cta = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-card">
          <div className="card-content">
            <h2 className="h2 card-title">Looking for a dream home?</h2>

            <p className="card-text">
              We can help you realize your dream of a new home
            </p>
          </div>

          <button className="btn cta-btn">
            <span>Explore Properties</span>
            <i>
              <FaArrowRight />
            </i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
