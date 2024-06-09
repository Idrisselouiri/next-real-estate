import React from "react";
import { FaHome } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">
            <i>
              <FaHome />
            </i>
            <span>Real Estate Agency</span>
          </p>

          <h2 className="h1 hero-title">Find Your Dream House By Us</h2>

          <p className="hero-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <button className="btn">Make An Enquiry</button>
        </div>

        <figure className="hero-banner">
          <img
            src="https://github.com/codewithsadee/homeverse/blob/master/assets/images/hero-banner.png?raw=true"
            alt="Modern house model"
            className="w-100"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
