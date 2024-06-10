"use client";

import React, { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import { FaLock, FaVoicemail } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields.");
    }
    setLoading(true);
    const savingPromise = new Promise(async (resolve, reject) => {
      await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        callbackUrl: "/",
      });
      await toast.promise(savingPromise, {
        loading: "Saving...",
        success: "Login Successfully!",
        error: "Error",
      });
      resolve();
      setLoading(false);
    });
  };
  return (
    <div class="big-container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form" onSubmit={handleSubmit}>
            <h2 class="title">Log in</h2>

            <div class="input-field">
              <i>
                <FaVoicemail />
              </i>
              <input
                type="text"
                id="email"
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div class="input-field">
              <i>
                <FaLock />
              </i>
              <input
                type="password"
                id="password"
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn solid">
              {loading ? (
                <>
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Log In"
              )}
            </button>
            <button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              type="button"
              class="btn solid"
            >
              <i>
                <FaGoogle />
              </i>
              Sign In With Google
            </button>
            <Link href="/signin">I have a account?</Link>
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

export default Login;
