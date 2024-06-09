import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLock,
  FaTwitter,
  FaUser,
  FaVoicemail,
} from "react-icons/fa";

const Signin = () => {
  return (
    <div class="big-container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Log in</h2>

            <div class="input-field">
              <i>
                <FaVoicemail />
              </i>
              <input type="text" placeholder="Email" />
            </div>
            <div class="input-field">
              <i>
                <FaLock />
              </i>
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit" class="btn solid">
              Login
            </button>
            <p class="social-text">Or Log in with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i>
                  <FaFacebook />
                </i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter">
                  <FaInstagram />
                </i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google">
                  <FaTwitter />
                </i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in">
                  <FaLinkedin />
                </i>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>

            <button class="btn transparent" id="sign-up-btn">
              Log In
            </button>
          </div>
          <img
            src="https://raw.githubusercontent.com/sefyudem/Sliding-Sign-In-Sign-Up-Form/955c6482aeeb2f0e77c1f3c66354da3bc4d7a72d/img/log.svg"
            class="image"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
