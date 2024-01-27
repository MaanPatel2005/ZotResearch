import React from 'react'
import profpic from '../assets/profile_pic.jpeg'
import './Profile.css'

function Profile() {
   return (
     <>
       <div>
       <h1 class = "profheading">My Profile</h1>
       <div class = "imagecrop">
           <img src={profpic} className="profile_pic.jpeg" alt="Profile Picture" />
           </div>
         <a>
           <p className="proftext">
               Enter Text Here
               <br/>
               Enter Description Here
               <br/>
               Enter Class/Year Here
               <br/>
               <button class = "editbutton">Edit</button>
           </p>
         </a>
       </div>

       <div  class = "research"> 
        <p>Research Interests: (Enter research interests here) </p>
       </div>

       <div className="embed">
      <p>Resume:</p>
      <iframe src="https://docs.google.com/document/d/1JymkivBFogSjGwIEufmdmFrW2YOxofThw4iV2hac8Fo/edit?usp=sharing" height="400" width="400"></iframe>
      </div>
      
    
     </>
   )
}

export default Profile