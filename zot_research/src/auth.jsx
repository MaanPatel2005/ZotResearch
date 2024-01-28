import { auth , googleProvider, db } from "./firebase";
import { createUserWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import 'firebase/firestore';
import { collection, setDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import './auth.css';
import UCI_Anteaters_logo from './assets/UCI_Anteaters_logo.png';
import Typewrite from "./Typewrite.jsx";


export const Auth = () => {
  console.log('auth');
  const imagePath = 'public/uci_research_logo.jpg';
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    console.log('useffect');
  }, [user]);
  const signInWithGoogle = async () => {
    try {
      console.log('signinwithgoogle');
    const userinfo = await signInWithPopup(auth, googleProvider);
    if (userinfo) {
      console.log('pass user info');
      const unsubscribe = auth.onAuthStateChanged(async(userAuth) => {
        console.log(userAuth.uid);
        if (userAuth) {
          console.log('pass user auth');
          const studentsRef = collection(db, "students");
            const userDocRef = doc(studentsRef, userAuth.uid);

            const docSnapshot = await getDoc(userDocRef);
            if (docSnapshot.exists()) {
              console.log('Document already exists, skipping...');
              navigate("/Profile");
            } else {
              console.log('Document does not exist, creating...');
              await setDoc(userDocRef, {
                name: userAuth.displayName,
                email: userAuth.email,
                photo: userAuth.photoURL,
                uid: '',
                university: '',
                major: '',
                degree: '',
                description: '',
                research: '',
                resume: '',
            });
            navigate("/CreateProfile");
          }
          // const snapshot = await userRef.get();
          // if (!snapshot.exists) {
          //   console.log('pass snapshot');
          //   const {uid, displayName, email, photoURL} = userAuth;
          //   writeUserData(uid, displayName, email, photoURL);
          //   }
  
          setUser(userAuth);
           // Replace with your desired route

        } else {
          setUser(null);
        }
      });
  
      return () => unsubscribe();
    }
    
    } catch (err){
      console.error(err);
    }
  };
  const logOut = async () => {
    try {
    await signOut(auth);
    } catch (err){
      console.error(err);
    }

  
  };
  return (
    <div >
      <img class = "uciLogo" src={UCI_Anteaters_logo} alt="UCI RESEARCH LOGO" style={{
        height: 150
      }}/>
      
      {/* <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password.."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}> Signin</button> */}

      <button class = "buttonSignIn" onClick={signInWithGoogle}> 
        Sign in with Google
      </button>
      <h1 class="typewrite"> 
        <Typewrite text="Welcome to ZotResearch. Find your next research endeavour here. " delay={100} infinite />
      </h1>

    </div>
  );
};
