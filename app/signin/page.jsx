"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { FaLock, FaUser, FaVoicemail } from "react-icons/fa";

const Signin = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function logout() {
    await signOut();
    router.push("/");
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields.");
    }
    const savingPromise = new Promise(async (resolve, reject) => {
      try {
        setLoading(true);
        const res = await fetch("/api/auth/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success === false) {
          reject();
        }
        setLoading(false);
        if (res.ok) {
          resolve();
          router.push("/login");
        }
      } catch (error) {
        reject();
        setLoading(false);
      }
      await toast.promise(savingPromise, {
        loading: "Saving...",
        success: "Signin Successfully!",
        error: "Error",
      });
    });
  };
  return (
    <div class="big-container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form" onSubmit={handleSubmit}>
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i>
                <FaUser />
              </i>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Username"
                id="name"
              />
            </div>
            <div class="input-field">
              <i>
                <FaVoicemail />
              </i>
              <input
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div class="input-field">
              <i>
                <FaLock />
              </i>
              <input
                onChange={handleChange}
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn solid">
              {loading ? (
                <>
                  <span>Loading...</span>
                </>
              ) : (
                "Sign In"
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
            <Link href="/">I have a account?</Link>
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
              Sign In
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
