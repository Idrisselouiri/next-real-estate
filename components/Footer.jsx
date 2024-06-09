import React from "react";
<<<<<<< HEAD
import { PiMapPinLight } from "react-icons/pi";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
=======
>>>>>>> origin/main

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img
                src="https://github.com/codewithsadee/homeverse/blob/master/assets/images/logo-light.png?raw=true"
                alt="Homeverse logo"
              />
            </a>

            <p className="section-text">
              Lorem Ipsum is simply dummy text of the and typesetting industry.
              Lorem Ipsum is dummy text of the printing.
            </p>

            <ul className="contact-list">
              <li>
                <a href="#" className="contact-link">
<<<<<<< HEAD
                  <i>
                    <PiMapPinLight />
                  </i>
=======
                  <ion-icon name="location-outline"></ion-icon>
>>>>>>> origin/main

                  <address>Brooklyn, New York, United States</address>
                </a>
              </li>

              <li>
                <a href="tel:+0123456789" className="contact-link">
<<<<<<< HEAD
                  <i>
                    <LuPhone />
                  </i>
=======
                  <ion-icon name="call-outline"></ion-icon>

>>>>>>> origin/main
                  <span>+0123-456789</span>
                </a>
              </li>

              <li>
                <a href="mailto:contact@homeverse.com" className="contact-link">
<<<<<<< HEAD
                  <i>
                    <CiMail />
                  </i>
=======
                  <ion-icon name="mail-outline"></ion-icon>
>>>>>>> origin/main

                  <span>contact@homeverse.com</span>
                </a>
              </li>
            </ul>

            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
<<<<<<< HEAD
                  <FaFacebook />
=======
                  <ion-icon name="logo-facebook"></ion-icon>
>>>>>>> origin/main
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
<<<<<<< HEAD
                  <FaTwitter />
=======
                  <ion-icon name="logo-twitter"></ion-icon>
>>>>>>> origin/main
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
<<<<<<< HEAD
                  <FaInstagram />
=======
                  <ion-icon name="logo-linkedin"></ion-icon>
>>>>>>> origin/main
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
<<<<<<< HEAD
                  <FaLinkedin />
=======
                  <ion-icon name="logo-youtube"></ion-icon>
>>>>>>> origin/main
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-link-box">
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Company</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Blog
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  All Products
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Locations Map
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  FAQ
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Contact us
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Services</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Order tracking
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Wish List
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Login
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  My account
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Promotional Offers
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Customer Care</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Login
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  My account
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Wish List
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Order tracking
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  FAQ
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2022 <a href="#">codewithsadee</a>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
