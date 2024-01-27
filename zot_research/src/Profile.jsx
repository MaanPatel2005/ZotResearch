import React from 'react'
import profpic from './assets/IMG_0326.jpg'
import './Profile.css'

function Profile() {
   return (
     <>
       <div>
       <h1 class = "profheading">My Profile</h1>
       <div class = "imagecrop">
           <img src={profpic} className="profpic" alt="Profile Picture" />
           </div>
         <a>
           <p className="proftext">
               Mitali Mittal
               <br/>
               Computer Science
               <br/>
               Class of 2027
               <br/>
               <button class = "editbutton">Edit</button>
           </p>
         </a>
       </div>

       <div  class = "research"> 
        <p>Research Interests: (Enter research interests here) </p>
       </div>

       <div className="embed">
      <h5>Resume:</h5>
      <iframe src="https://docs.google.com/document/d/1JymkivBFogSjGwIEufmdmFrW2YOxofThw4iV2hac8Fo/edit?usp=sharing" height="400" width="400"></iframe>
      </div>
      
    
     </>
   )
}

export default Profile