"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { FaLock, FaUser, FaVoicemail } from "react-icons/fa";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const Signin = () => {
  const session = useSession();
  const { status } = session;
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [userId, setUserId] = useState(null);
  const [profileFetched, setProfileFetched] = useState(false);
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [imageFileUploading, setImageFileUploading] = useState(false);
  const [updateUserError, setUpdateUserError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showListingsError, setShowListingsError] = useState(false);
  const [userListings, setUserListings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const filePickerRef = useRef();
  const router = useRouter();
  async function logout() {
    await signOut();
    router.push("/");
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };
  return (
    <div class="big-container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Profile</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={filePickerRef}
              hidden
            />
            <div
              className="profile-picture"
              onClick={() => filePickerRef.current.click()}
            >
              <img
                src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt="user"
              />
            </div>
            <div class="input-field">
              <i>
                <FaUser />
              </i>
              <input type="text" placeholder="Username" id="name" />
            </div>
            <div class="input-field">
              <i>
                <FaVoicemail />
              </i>
              <input id="email" type="email" placeholder="Email" />
            </div>
            <div class="input-field">
              <i>
                <FaLock />
              </i>
              <input id="password" type="password" placeholder="Password" />
            </div>
            <button type="submit" class="btn solid">
              Update
            </button>
            <Link href={"CreateListing"} class="btn solid">
              Create Lisitng
            </Link>
            <div className="box">
              <button>Delete</button>
              <button>Sign Out</button>
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
