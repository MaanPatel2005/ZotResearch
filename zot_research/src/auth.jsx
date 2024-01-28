import { auth , googleProvider} from "./firebase";
import { createUserWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import 'firebase/firestore';

export const Auth = () => {
  const [user, setUser] = useState(null);
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
    const unsubscribe = auth.onAuthStateChanged(async(userAuth) => {
      if (userAuth) {
        const userRef = firestore.collection('users').doc(userAuth.uid);
        const snapshot = await userRef.get();

        if (!snapshot.exists) {
          const {displayName, email, photoURL} = userAuth;
          try {
            await userRef.set({
              displayName,
              email,
              photoURL
            });
          } catch(error) {
            console.error('Error creating user document', error.message);
          }
        }

        setUser(userAuth);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  const signInWithGoogle = async () => {
    try {
    await signInWithPopup(auth,googleProvider);
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
      <button onClick={logOut}> logOut</button>
    </div>
  );
};