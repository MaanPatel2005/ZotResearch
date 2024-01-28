// Profile.js
import { auth , googleProvider, db } from "../firebase";
import React, { useEffect, useState } from 'react';
// import React from 'react';
import profpic from '../assets/profile_pic.jpeg';
import './Profile.css';
// import { auth , googleProvider, db } from "./firebase";
import { collection, setDoc, doc, getDoc } from "firebase/firestore";
// import firebase from 'firebase/app';
import 'firebase/auth'; // import specific Firebase services you need

// import { Auth } from "firebase/auth";
// var userData;

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "students", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array to run the effect only once

  console.log(userData, 'test');

  return (
    <div id="root">
      {userData ? (
        <div>
          <div className='box' id="row1">
          </div>
          <div className="box" id="box1">
            <div className="box" id="box2">
              <div className="inner-box">
                <p className="Name">
                {userData.name}
                </p>
                <div className="text">
                  <p className="Other_Details">
                    <br />
                    {userData.university}
                    <br />
                    {userData.major}
                    <br />
                    {userData.degree}
                    <br />
                  </p>
                </div>
                <div className="imagecrop">
                  <img src={userData.photo} className="profile-pic" alt="Profile Picture" />
                </div>
              </div>
              <div className="also-inner-box">
                <p className="Description">
                  Description
                </p>
                <p className="Description_Text">
                  {userData.description}
                </p>
              </div>
              <div className="research-interest">
                <p className="keywords_list">
                  Research Interests
                </p>
                <p className="select_keywords">
                  {userData.research}
                </p>
              </div>
            </div>
          </div>
          <div className="box" id="box3">
            <div className="embed">
              <iframe src={userData.resume} height="700" width="700"></iframe>
            </div>
          </div>
          <button className="editbutton">Edit</button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Profile;
