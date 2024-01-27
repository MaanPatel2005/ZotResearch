import React, {useState} from 'react'
import './AddPost.css'

function AddPost() {
  const [inputValue, setInputValue] = useState({ title: "", description: "No description given" });
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    // Process the input value and update the variable (result in this case)
    setResult(`Input value is: ${inputValue.title}`);
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
            <input type="text" value = {inputValue} onChange={handleInputChange} id = "title" name="title" />
          </label>
          <br/>
          <br/>
          <label>
            <p>Description:</p>
            <input type="text" value = {inputValue} onChange={handleInputChange} id = "description" name="description" />
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