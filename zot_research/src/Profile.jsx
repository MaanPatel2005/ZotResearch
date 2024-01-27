import {useState} from 'react'
import profpic from './assets/IMG_0326.jpg'
import './Profile.css'


function Profile() {
 const [count, setCount] = useState(0)
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
     </>
   )
}


export default Profile