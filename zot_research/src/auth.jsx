import { auth , googleProvider, db } from "./firebase";
import { createUserWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import 'firebase/firestore';
import { collection, setDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  console.log('auth');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  //   console.log(auth?.currentUser?.email);
  // const signIn = async () => {
  //   // try {
  //   // await createUserWithEmailAndPassword(auth, email, password);
  //   // } catch (err){
  //   //   console.error(err);
  //   // }
  // };
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
    <div>
      {/* <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password.."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}> Signin</button> */}
      <button onClick={signInWithGoogle}> Signin with google</button>

    </div>
  );
};
