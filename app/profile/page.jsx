"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaLock, FaUser, FaVoicemail } from "react-icons/fa";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { app } from "../firebase";

const Signin = () => {
  const session = useSession();
  const { status } = session;
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [userId, setUserId] = useState(null);
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
  useEffect(() => {
    if (status === "authenticated") {
      const getUser = async () => {
        const res = await fetch("/api/profile");
        const data = await res.json();
        if (res.ok) {
          setName(data.name);
          setEmail(data.email);
          setImage(data.image);
          setUserId(data._id);
        }
      };
      getUser();
    }
  }, [session, status]);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };
  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);

  const uploadImage = async () => {
    setImageFileUploading(true);
    setImageFileUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setImageFileUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError(
          "Could not upload image (File must be less than 2MB)"
        );
        setImageFileUploadProgress(null);
        setImageFile(null);
        setImageFileUrl(null);
        setImageFileUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
          setImage(downloadURL);
          setImageFileUploading(false);
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdateUserError(null);
    setLoading(true);

    if (imageFileUploading) {
      setUpdateUserError("Please wait for image to upload");
      return;
    }
    const savingPromise = new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(`/api/profile`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, image }),
        });
        const data = await res.json();
        if (!res.ok) {
          setUpdateUserError(data.message);
          reject();
          setLoading(false);
        } else {
          setLoading(false);
          resolve();
        }
      } catch (error) {
        setLoading(false);
        setUpdateUserError(error.message);
        reject();
      }
      await toast.promise(savingPromise, {
        loading: "Saving...",
        success: "User's profile updated successfully!",
        error: "Error",
      });
    });
  };
  const handleDeleteUser = async () => {
    setShowModal(false);
    const savingPromise = new Promise(async (resolve, reject) => {
      try {
        const res = await fetch("/api/profile", {
          method: "DELETE",
        });
        if (res.ok) {
          resolve();
          logout();
          router.push("/signin");
        }
      } catch (error) {
        reject();
      }
      await toast.promise(savingPromise, {
        loading: "Saving...",
        success: "User's profile deleted successfully!",
        error: "Error",
      });
    });
  };

  if (status === "unauthenticated") {
    return redirect("/login");
  }
  console.log(imageFileUploadProgress);
  return (
    <div class="big-container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form" onSubmit={handleSubmit}>
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
              {imageFileUploadProgress && (
                <CircularProgressbar
                  value={imageFileUploadProgress || 0}
                  text={`${imageFileUploadProgress}%`}
                  strokeWidth={5}
                  styles={{
                    root: {
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    },
                    path: {
                      stroke: `rgba(62, 152, 199, ${
                        imageFileUploadProgress / 100
                      })`,
                    },
                  }}
                />
              )}
              <img src={imageFileUrl || image} alt="user" />
            </div>
            {imageFileUploadError && (
              <span className="text-red-700 text-sm self-center">
                {imageFileUploadError}
              </span>
            )}
            <div class="input-field">
              <i>
                <FaUser />
              </i>
              <input
                type="text"
                placeholder="Username"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
              />
            </div>
            <div class="input-field">
              <i>
                <FaVoicemail />
              </i>
              <input
                id="email"
                defaultValue={email}
                disabled
                type="email"
                placeholder="Email"
              />
            </div>
            <div class="input-field">
              <i>
                <FaLock />
              </i>
              <input
                disabled
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              class="btn solid"
              disabled={loading || imageFileUploading}
            >
              {loading ? "Loading..." : "Update"}
            </button>
            <Link href={"/CreateListing"} class="btn solid">
              Create Lisitng
            </Link>
            <div className="box">
              <span onClick={handleDeleteUser}>Delete</span>
              <span onClick={logout}>Sign Out</span>
            </div>
            {updateUserError && (
              <span className="text-red-700 text-sm self-center mt-5">
                {updateUserError}
              </span>
            )}
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
