import React, { useState, useEffect } from 'react';
import './CreateProfile.css';
import autosize from 'autosize';
import { auth, db } from "../firebase";
import 'firebase/firestore';
import { collection, setDoc, doc } from "firebase/firestore";


function AddPost() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    contactEmail: "",
    department: "",
    isDeadline: false,
    PostedDate: "",
    Deadline: "",
  });
  const [result, setResult] = useState("");

  const handleInputChange = async (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();
    // Process the form data and update the variable (result in this case)
    // For now, just displaying the form data in the console
    try {
      const user = auth.currentUser;
      console.log(user)

      if (user) {
        console.log(user.uid);
        const opportunitiesRef = collection(db, 'opportunities');
          const userDocRef = doc(opportunitiesRef, user.uid);

        // Use setDoc to add the data to Firestore
        await setDoc(doc(opportunitiesRef), {
          uid: user.uid, name: user.displayName, title: formData.title, email: formData.contactEmail,
          department: formData.department,
          contactEmail: formData.contactEmail,
          description: formData.description,
          PostedDate: formData.PostedDate,
          Deadline: formData.Deadline,
          Applicants: [],
        });

        setResult('Post created successfully!');
        


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
          <h1 className="heading">Create Posting</h1>
        </div>
        <form className="post-form">
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Contact Information (email):</label>
            <input
              type="email"
              className="form-control"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Department:</label>
            <input
              type="text"
              className="form-control"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="isDeadline"
              checked={formData.isDeadline}
              onChange={handleInputChange}
            />
            <label className="form-check-label">Manage Deadlines</label>
          </div>
          {formData.isDeadline && (
            <>
              <div className="form-group">
                <label>Posted Date:</label>
                <input
                  type="date"
                  className="form-control"
                  name="PostedDate"
                  value={formData.PostedDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Application Deadline:</label>
                <input
                  type="date"
                  className="form-control"
                  name="Deadline"
                  value={formData.Deadline}
                  onChange={handleInputChange}
                />
              </div>
            </>
          )}
          <div className="form-group description-group">
            <label>Description:</label>
            <textarea
              className="form-control"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <button className="btn btn-success" onClick={handleButtonClick}>
            Add
          </button>
          <p>{result}</p>
        </form>
      </div>
    </>
  );
}

export default AddPost;
