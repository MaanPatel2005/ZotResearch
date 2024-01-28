import React, { useState, useEffect } from 'react';
import './CreatePost.css';
import autosize from 'autosize';


function CreatePost() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    university: "",
    major: "",
    degree: "",
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

  const handleButtonClick = (e) => {
    e.preventDefault();
    // Process the form data and update the variable (result in this case)
    // For now, just displaying the form data in the console
    console.log(formData);
    setResult(`Entry submitted`);
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
              name="Name"
              value={formData.Name}
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
