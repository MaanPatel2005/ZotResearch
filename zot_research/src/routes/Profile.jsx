// Profile.js

import React from 'react';
import profpic from '../assets/profile_pic.jpeg';
import './Profile.css';

function Profile() {
  return (
    <div id="root">
      <div className='box' id="row1">

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
              <button className="editbutton">Edit</button>
          </div>
          <div className="imagecrop">
            <img src={profpic} className="profile_pic.jpeg" alt="Profile Picture" />
          </div>
        </div>
        <div class="also-inner-box">
          <p className="Name">
            Description
          </p>
        </div>
      </div>
      </div>
      <div className="box" id="box3">
      <div className='box' id="row2">

      </div>
        <div className="embed">
          <iframe src="https://docs.google.com/document/d/1JymkivBFogSjGwIEufmdmFrW2YOxofThw4iV2hac8Fo/edit?usp=sharing" height="700" width="600"></iframe>
        </div>
      </div>

      <div className="research">
        <p>Research Interests: (Enter research interests here) </p>
      </div>

    </div>
  );
}

export default Profile;
