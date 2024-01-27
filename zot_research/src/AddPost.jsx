import React, {useState} from 'react'
import './AddPost.css'

function AddPost() {
  const [inputValue, setInputValue] = useState({ title: "", description: "No description given" });
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event);
  };

  const handleButtonClick = () => {
    // Process the input value and update the variable (result in this case)
    setResult(`Entry submitted`);
  };

    return (
      <>
      <div>
        <div>
        <h1 class = "heading">New Opportunity</h1>
        </div>
        <form class = "post">
          <label>
            <p>Title: </p>
            <input type="text" value = {inputValue.title} onChange={handleInputChange} id = "title" name="title" />
          </label>
          <br/>
          <br/>
          <label>
            <p>Description:</p>
            <input type="text" value = {inputValue.description} onChange={handleInputChange} id = "description" name="description" />
          </label>
          <p>Contact Information: mitalim@uci.edu</p>
          <button onClick={handleButtonClick}>Add</button>
          <p>{result}</p>
        </form>

        </div>
      </>
    )
}
 export default AddPost