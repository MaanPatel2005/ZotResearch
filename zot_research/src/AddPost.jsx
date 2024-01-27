import React from 'react'
import profpic from './assets/IMG_0326.jpg'
import './AddPost.css'

function AddPost() {
    return (
      <>
        <div>
        <h1 class = "heading">New Opportunity</h1>
        </div>
        <form class = "post">
          <label>
            <p>Title:</p>
            <input type="text" id = "title" name="title" />
          </label>
          <br/>
          <br/>
          <label>
            <p>Description:</p>
            <input type="text" id = "description" name="description" />
          </label>
          <p>Contact Information: mitalim@uci.edu</p>
          <input type="submit" value="Add" />
          
        </form>
      </>
    )
 }
 
 export default AddPost