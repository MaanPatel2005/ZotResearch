import React, {useState} from 'react'
import './Add_Post.css'

function AddPost() {
  const [inputValue, setInputValue] = useState("");
  const [title, setTitle] = useState("");
  const [result, setResult] = useState("");


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
            <p>Title: &nbsp;
            <input class = "title" type="text" value = {title} onChange={(e) => {setTitle(e.target.value)}} id = "title" name="title" />
            </p>
          </label>
          <label>
            <p>Description: &nbsp;
            <input class = "description" type="text" value = {inputValue} onChange={(e) => {setInputValue(e.target.value)}} id = "description" name="description" />
            </p>
          </label>
          <p>Contact Information: (email)</p>
          <button onClick={handleButtonClick}>Add</button>
          <p>{result}</p>
        </form>

        </div>
      </>
    )
}
 export default AddPost