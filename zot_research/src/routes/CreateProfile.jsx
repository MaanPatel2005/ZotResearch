import React, { useState, useEffect } from 'react';
import './CreateProfile.css';
import autosize from 'autosize';
import { auth, db } from "../firebase";
import 'firebase/firestore';
import { collection, setDoc, doc } from "firebase/firestore";

function CreatePost() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    university: "",
    major: "",
    degree: "",
    isDeadline: false,
  });
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();

    try {
      const user = auth.currentUser;
      console.log(user)

      if (user) {
        console.log(user.uid);
        const studentsRef = collection(db, 'students');

        // Use setDoc to add the data to Firestore
        await setDoc(doc(studentsRef, user.uid), {
          name: formData.name,
          description: formData.description,
          university: formData.university,
          major: formData.major,
          degree: formData.degree,
          isDeadline: formData.isDeadline,
        });

        setResult('Profile created successfully!');
      } else {
        setResult('User not authenticated.');
      }
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    // Apply autosize to all textareas when the component mounts
    autosize(document.querySelectorAll('textarea'));
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="text-center">
          <h1 className="heading">Create Profile</h1>
        </div>
        <form className="post-form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>University:</label>
            <input
              type="text"
              className="form-control"
              name="university"
              value={formData.university}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Major:</label>
            <input
              type="text"
              className="form-control"
              name="major"
              value={formData.major}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Degree:</label>
            <input
              type="text"
              className="form-control"
              name="degree"
              value={formData.degree}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group description-group">
            <label>Description:</label>
            <textarea
              className="form-control"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          {/* ... (other form fields) */}
          <button className="btn btn-success" onClick={handleButtonClick}>
            Add
          </button>
          <p>{result}</p>
        </form>
      </div>
    </>
  );
}

export default CreatePost;
