import React, { useState } from 'react';
import './Add_Post.css';

function AddPost() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    contactEmail: "",
    positionName: "",
    department: "",
    isDeadline: false,
    PostedDate: "",
    Deadline: "",
  });
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
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

  return (
    <>
      <div className="container mt-5">
        <div className="text-center">
          <h1 className="heading">New Opportunity</h1>
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
            <label>Description:</label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={formData.description}
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
            <label>Position Name:</label>
            <input
              type="text"
              className="form-control"
              name="positionName"
              value={formData.positionName}
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
                  name="Posted
                  Date"
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
