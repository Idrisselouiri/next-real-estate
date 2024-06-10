"use client";

import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaHamburger,
  FaInstagram,
  FaLinkedinIn,
  FaLocationArrow,
  FaUser,
} from "react-icons/fa";
import { IoIosClose, IoMdMenu } from "react-icons/io";

import { CiMail } from "react-icons/ci";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();
  return (
    <header className="header" data-header>
      <div className="overlay" data-overlay></div>

      <div className="header-top">
        <div className="container">
          <ul className="header-top-list">
            <li>
              <a href="mailto:info@homeverse.com" className="header-top-link">
                <i>
                  <CiMail />
                </i>
                <p>info@homeverse.com</p>
              </a>
            </li>

            <li>
              <a href="#" className="header-top-link">
                <i>
                  <FaLocationArrow />
                </i>
                <address>15/A, Nest Tower, NYC</address>
              </a>
            </li>
          </ul>

          <div className="wrapper">
            <ul className="header-top-social-list">
              <li>
                <a href="#" className="header-top-social-link">
                  <FaFacebook />
                </a>
              </li>

              <li>
                <a href="#" className="header-top-social-link">
                  <FaInstagram />
                </a>
              </li>

              <li>
                <a href="#" className="header-top-social-link">
                  <FaLinkedinIn />
                </a>
              </li>

              <li>
                <a href="#" className="header-top-social-link">
                  <FaGithub />
                </a>
              </li>
            </ul>

            <button className="header-top-btn">Add Listing</button>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <a href="#" className="logo">
            <img
              src="https://github.com/codewithsadee/homeverse/blob/master/assets/images/logo.png?raw=true"
              alt="Homeverse logo"
            />
          </a>

          <nav className="navbar" data-navbar>
            <div className="navbar-top">
              <a href="#" className="logo">
                <img src="./assets/images/logo.png" alt="Homeverse logo" />
              </a>

              <button
                className="nav-close-btn"
                data-nav-close-btn
                aria-label="Close Menu"
              >
                <i>
                  <IoIosClose />
                </i>
              </button>
            </div>

            <div className="navbar-bottom">
              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link" data-nav-link>
                    Home
                  </a>
                </li>

                <li>
                  <a href="#about" className="navbar-link" data-nav-link>
                    About
                  </a>
                </li>

                <li>
                  <a href="#service" className="navbar-link" data-nav-link>
                    Service
                  </a>
                </li>

                <li>
                  <a href="#property" className="navbar-link" data-nav-link>
                    Property
                  </a>
                </li>

                <li>
                  <a href="#blog" className="navbar-link" data-nav-link>
                    Blog
                  </a>
                </li>

                <li>
                  <a href="#contact" className="navbar-link" data-nav-link>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="header-bottom-actions">
            {session ? (
              <Link href={"/profile"}>
                <button aria-label="Profile">{session.user.name}</button>
              </Link>
            ) : (
              <button
                className="header-bottom-actions-btn"
                aria-label="Profile"
              >
                <i>
                  <FaUser />
                </i>
                <span>Profile</span>
              </button>
            )}

            <button
              class="header-bottom-actions-btn"
              data-nav-open-btn
              aria-label="Open Menu"
            >
              <i>
                <IoMdMenu />
              </i>

              <span>Menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
