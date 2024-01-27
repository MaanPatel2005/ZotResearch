// Profile.js

import React, {useState, useEffect} from 'react';
import profpic from '../assets/profile_pic.jpeg';
import './Profile.css';
import axios from 'axios';

const Profile = () => {
  const [data, setData] = useState({uid: 'puravp'});
  useEffect(() => {
    handleProfile();
  }, []);

  // Function to handle form submission
  const handleProfile = async (e) => {
    // e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/get_student_profile/', {uid: "puravp"});
        console.log(response.data);
        setData(response.data);
         // Store response data in state
    } catch (error) {
        console.error('Error logging in:', error);
    }
  };

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
              Name: {data.name}
            </p>
            <p className="Other_Details">
              <br />
              University: University of California, Irvine
              <br />
              Major: {data.major}
              <br />
              Degree: {data.degree}
              <br />
            </p>
          </div>
          <div className="imagecrop">
            <img src={profpic} className="profile_pic.jpeg" alt="Profile Picture" />
          </div>
        </div>
        <div class="also-inner-box">
          <p className="Description">
            Description
          </p>
          <p className="Description_Text">
            {data.description}
          </p>
        </div>
        <div class="research-interest">
          <p className="keywords_list">
            Research Interests
          </p>
          <p className="select_keywords">
            {data.research}
          </p>
        </div>
      </div>
      </div>
      <div className="box" id="box3">
        <div className="embed">
          <iframe src={data.resume} height="700" width="700"></iframe>
        </div>
      </div>
      <button className="editbutton">Edit</button>
    </div>
    
  );
}

export default Profile;
