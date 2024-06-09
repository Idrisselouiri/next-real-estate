import React from "react";
import {
  IoCarSportOutline,
  IoFitnessOutline,
  IoShieldCheckmarkOutline,
  IoLibraryOutline,
  IoBedOutline,
  IoHomeOutline,
  IoFootballOutline,
} from "react-icons/io5";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <p className="section-subtitle">Our Aminities</p>

        <h2 className="h2 section-title">Building Aminities</h2>

        <ul className="features-list">
          <li>
            <a href="#" className="features-card">
              <div className="card-icon">
                <i>
                  <IoCarSportOutline />
                </i>
              </div>

              <h3 className="card-title">Parking Space</h3>

              <div className="card-btn">
                <i>
                  <FaArrowRight />
                </i>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features-card">
              <div className="card-icon">
                <i>
                  <MdOutlineWaterDrop />
                </i>
              </div>

              <h3 className="card-title">Swimming Pool</h3>

              <div className="card-btn">
                <i>
                  <FaArrowRight />
                </i>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features-card">
              <div className="card-icon">
                <ion-icon name="shield-checkmark-outline"></ion-icon>
                <i>
                  <IoShieldCheckmarkOutline />
                </i>
              </div>

              <h3 className="card-title">Private Security</h3>

              <div className="card-btn">
                <i>
                  <FaArrowRight />
                </i>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features-card">
              <div className="card-icon">
                <i>
                  <IoFitnessOutline />
                </i>
              </div>

              <h3 className="card-title">Medical Center</h3>

              <div className="card-btn">
                <i>
                  <FaArrowRight />
                </i>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features-card">
              <div className="card-icon">
                <i>
                  <IoLibraryOutline />
                </i>
              </div>

              <h3 className="card-title">Library Area</h3>

              <div className="card-btn">
                <i>
                  <FaArrowRight />
                </i>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features-card">
              <div className="card-icon">
                <i>
                  <IoBedOutline />
                </i>
              </div>

              <h3 className="card-title">King Size Beds</h3>

              <div className="card-btn">
                <i>
                  <FaArrowRight />
                </i>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features-card">
              <div className="card-icon">
                <i>
                  <IoHomeOutline />
                </i>
              </div>

              <h3 className="card-title">Smart Homes</h3>

              <div className="card-btn">
                <i>
                  <FaArrowRight />
                </i>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features-card">
              <div className="card-icon">
                <i>
                  <IoFootballOutline />
                </i>
              </div>

              <h3 className="card-title">Kid’s Playland</h3>

              <div className="card-btn">
                <i>
                  <FaArrowRight />
                </i>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
