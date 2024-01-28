// Profile.js

import React from 'react';
import profpic from '../assets/profile_pic.jpeg';
import './Profile.css';
// import { auth , googleProvider, db } from "./firebase";
// import { collection, setDoc, doc } from "firebase/firestore";
// import { user } from "firebase/auth";

function Profile() {
  // const studentsRef = collection(db, "students").doc(user.uid);

  return (
    <div id="root">
      <div className='box' id="row1">
        <p className="Name">
        </p>
      </div>
      <div className="box" id="box1">
      <div className="box" id="box2">
        <div class="inner-box">
          <div className="text">
            <p className="Name">
              Name: _____
            </p>
            <p className="Other_Details">
              <br />
              University: _____
              <br />
              Major: _____
              <br />
              Degree: _____
              <br />
            </p>
          </div>
          <div className="imagecrop">
            <img src="https://lh3.googleusercontent.com/a/ACg8ocJ3yTxxwyuMSUtqDfGx83icR39zSzsOb97neJ8QUDvZ=s96-c" className="profile-pic" alt="Profile Picture" />
          </div>
        </div>
        <div class="also-inner-box">
          <p className="Description">
            Description
          </p>
          <p className="Description_Text">
            Insert Text Here
          </p>
        </div>
        <div class="research-interest">
          <p className="keywords_list">
            Research Interests
          </p>
          <p className="select_keywords">
            Select Keywords
          </p>
        </div>
      </div>
      </div>
      <div className="box" id="box3">
        <div className="embed">
          <iframe src="https://docs.google.com/document/d/1JymkivBFogSjGwIEufmdmFrW2YOxofThw4iV2hac8Fo/edit?usp=sharing" height="700" width="700"></iframe>
        </div>
      </div>
      <button className="editbutton">Edit</button>
    </div>
    
  );
}

export default Profile;
