import React from "react";
import {
  FaBath,
  FaBed,
  FaCamera,
  FaHeart,
  FaPlusCircle,
  FaSquare,
} from "react-icons/fa";
import { IoIosResize } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

const Property = () => {
  return (
    <section className="property" id="property">
      <div className="container">
        <p className="section-subtitle">Properties</p>

        <h2 className="h2 section-title">Featured Listings</h2>

        <ul className="property-list has-scrollbar">
          <li>
            <div className="property-card">
              <figure className="card-banner">
                <a href="#">
                  <img
                    src="https://github.com/codewithsadee/homeverse/blob/master/assets/images/property-1.jpg?raw=true"
                    alt="New Apartment Nice View"
                    className="w-100"
                  />
                </a>

                <div className="card-badge green">For Rent</div>

                <div className="banner-actions">
                  <button className="banner-actions-btn">
                    <IoLocation />
                    <address>Belmont Gardens, Chicago</address>
                  </button>

                  <button className="banner-actions-btn">
                    <FaCamera />
                    <span>4</span>
                  </button>
                </div>
              </figure>

              <div className="card-content">
                <div className="card-price">
                  <strong>$34,900</strong>/Month
                </div>

                <h3 className="h3 card-title">
                  <a href="#">New Apartment Nice View</a>
                </h3>

                <p className="card-text">
                  Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                  Renovated With New Wood
                </p>

                <ul className="card-list">
                  <li className="card-item">
                    <strong>3</strong>
                    <i>
                      <FaBed />
                    </i>
                    <p>Bedrooms</p>
                  </li>

                  <li className="card-item">
                    <strong>2</strong>
                    <i>
                      <FaBath />
                    </i>
                    <span>Bathrooms</span>
                  </li>

                  <li className="card-item">
                    <strong>3450</strong>
                    <i>
                      <FaSquare />
                    </i>
                    <span>Square Ft</span>
                  </li>
                </ul>
              </div>

              <div className="card-footer">
                <div className="card-author">
                  <figure className="author-avatar">
                    <img
                      src="https://github.com/codewithsadee/homeverse/blob/master/assets/images/author.jpg?raw=true"
                      alt="William Seklo"
                      className="w-100"
                    />
                  </figure>

                  <div>
                    <p className="author-name">
                      <a href="#">William Seklo</a>
                    </p>

                    <p className="author-title">Estate Agents</p>
                  </div>
                </div>

                <div className="card-footer-actions">
                  <button className="card-footer-actions-btn">
                    <i>
                      <IoIosResize />
                    </i>
                  </button>

                  <button className="card-footer-actions-btn">
                    <ion-icon name="heart-outline"></ion-icon>
                    <i>
                      <FaHeart />
                    </i>
                  </button>

                  <button className="card-footer-actions-btn">
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <i>
                      <FaPlusCircle />
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="property-card">
              <figure className="card-banner">
                <a href="#">
                  <img
                    src="https://github.com/codewithsadee/homeverse/blob/master/assets/images/property-3.jpg?raw=true"
                    alt="Modern Apartments"
                    className="w-100"
                  />
                </a>

                <div className="card-badge orange">For Sales</div>

                <div className="banner-actions">
                  <button className="banner-actions-btn">
                    <IoLocation />
                    <address>Belmont Gardens, Chicago</address>
                  </button>

                  <button className="banner-actions-btn">
                    <FaCamera />
                    <span>4</span>
                  </button>
                </div>
              </figure>

              <div className="card-content">
                <div className="card-price">
                  <strong>$34,900</strong>/Month
                </div>

                <h3 className="h3 card-title">
                  <a href="#">Modern Apartments</a>
                </h3>

                <p className="card-text">
                  Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                  Renovated With New Wood
                </p>

                <ul className="card-list">
                  <li className="card-item">
                    <strong>3</strong>
                    <i>
                      <FaBed />
                    </i>
                    <span>Bedrooms</span>
                  </li>

                  <li className="card-item">
                    <strong>2</strong>
                    <i>
                      <FaBath />
                    </i>
                    <span>Bathrooms</span>
                  </li>

                  <li className="card-item">
                    <strong>3450</strong>
                    <i>
                      <FaSquare />
                    </i>
                    <span>Square Ft</span>
                  </li>
                </ul>
              </div>

              <div className="card-footer">
                <div className="card-author">
                  <figure className="author-avatar">
                    <img
                      src="https://github.com/codewithsadee/homeverse/blob/master/assets/images/property-4.png?raw=true"
                      alt="William Seklo"
                      className="w-100"
                    />
                  </figure>

                  <div>
                    <p className="author-name">
                      <a href="#">William Seklo</a>
                    </p>

                    <p className="author-title">Estate Agents</p>
                  </div>
                </div>

                <div className="card-footer-actions">
                  <button className="card-footer-actions-btn">
                    <i>
                      <IoIosResize />
                    </i>
                  </button>

                  <button className="card-footer-actions-btn">
                    <ion-icon name="heart-outline"></ion-icon>
                    <i>
                      <FaHeart />
                    </i>
                  </button>

                  <button className="card-footer-actions-btn">
                    <i>
                      <FaPlusCircle />
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="property-card">
              <figure className="card-banner">
                <a href="#">
                  <img
                    src="https://github.com/codewithsadee/homeverse/blob/master/assets/images/property-3.jpg?raw=true"
                    alt="Comfortable Apartment"
                    className="w-100"
                  />
                </a>

                <div className="card-badge green">For Rent</div>

                <div className="banner-actions">
                  <button className="banner-actions-btn">
                    <ion-icon name="location"></ion-icon>

                    <address>Belmont Gardens, Chicago</address>
                  </button>

                  <button className="banner-actions-btn">
                    <ion-icon name="camera"></ion-icon>

                    <span>4</span>
                  </button>

                  <button className="banner-actions-btn">
                    <ion-icon name="film"></ion-icon>

                    <span>2</span>
                  </button>
                </div>
              </figure>

              <div className="card-content">
                <div className="card-price">
                  <strong>$34,900</strong>/Month
                </div>

                <h3 className="h3 card-title">
                  <a href="#">Comfortable Apartment</a>
                </h3>

                <p className="card-text">
                  Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                  Renovated With New Wood
                </p>

                <ul className="card-list">
                  <li className="card-item">
                    <strong>3</strong>

                    <ion-icon name="bed-outline"></ion-icon>

                    <span>Bedrooms</span>
                  </li>

                  <li className="card-item">
                    <strong>2</strong>

                    <ion-icon name="man-outline"></ion-icon>

                    <span>Bathrooms</span>
                  </li>

                  <li className="card-item">
                    <strong>3450</strong>

                    <ion-icon name="square-outline"></ion-icon>

                    <span>Square Ft</span>
                  </li>
                </ul>
              </div>

              <div className="card-footer">
                <div className="card-author">
                  <figure className="author-avatar">
                    <img
                      src="./assets/images/author.jpg"
                      alt="William Seklo"
                      className="w-100"
                    />
                  </figure>

                  <div>
                    <p className="author-name">
                      <a href="#">William Seklo</a>
                    </p>

                    <p className="author-title">Estate Agents</p>
                  </div>
                </div>

                <div className="card-footer-actions">
                  <button className="card-footer-actions-btn">
                    <ion-icon name="resize-outline"></ion-icon>
                  </button>

                  <button className="card-footer-actions-btn">
                    <ion-icon name="heart-outline"></ion-icon>
                  </button>

                  <button className="card-footer-actions-btn">
                    <ion-icon name="add-circle-outline"></ion-icon>
                  </button>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="property-card">
              <figure className="card-banner">
                <a href="#">
                  <img
                    src="./assets/images/property-4.png"
                    alt="Luxury villa in Rego Park"
                    className="w-100"
                  />
                </a>

                <div className="card-badge green">For Rent</div>

                <div className="banner-actions">
                  <button className="banner-actions-btn">
                    <ion-icon name="location"></ion-icon>

                    <address>Belmont Gardens, Chicago</address>
                  </button>

                  <button className="banner-actions-btn">
                    <ion-icon name="camera"></ion-icon>

                    <span>4</span>
                  </button>

                  <button className="banner-actions-btn">
                    <ion-icon name="film"></ion-icon>

                    <span>2</span>
                  </button>
                </div>
              </figure>

              <div className="card-content">
                <div className="card-price">
                  <strong>$34,900</strong>/Month
                </div>

                <h3 className="h3 card-title">
                  <a href="#">Luxury villa in Rego Park</a>
                </h3>

                <p className="card-text">
                  Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                  Renovated With New Wood
                </p>

                <ul className="card-list">
                  <li className="card-item">
                    <strong>3</strong>

                    <ion-icon name="bed-outline"></ion-icon>

                    <span>Bedrooms</span>
                  </li>

                  <li className="card-item">
                    <strong>2</strong>

                    <ion-icon name="man-outline"></ion-icon>

                    <span>Bathrooms</span>
                  </li>

                  <li className="card-item">
                    <strong>3450</strong>

                    <ion-icon name="square-outline"></ion-icon>

                    <span>Square Ft</span>
                  </li>
                </ul>
              </div>

              <div className="card-footer">
                <div className="card-author">
                  <figure className="author-avatar">
                    <img
                      src="https://github.com/codewithsadee/homeverse/blob/master/assets/images/author.jpg?raw=true"
                      alt="William Seklo"
                      className="w-100"
                    />
                  </figure>

                  <div>
                    <p className="author-name">
                      <a href="#">William Seklo</a>
                    </p>

                    <p className="author-title">Estate Agents</p>
                  </div>
                </div>

                <div className="card-footer-actions">
                  <button className="card-footer-actions-btn">
                    <ion-icon name="resize-outline"></ion-icon>
                  </button>

                  <button className="card-footer-actions-btn">
                    <ion-icon name="heart-outline"></ion-icon>
                  </button>

                  <button className="card-footer-actions-btn">
                    <ion-icon name="add-circle-outline"></ion-icon>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Property;
