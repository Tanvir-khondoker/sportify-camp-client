/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const {
    reset, // Add reset function from react-hook-form
  } = useForm();

  // creating user with email and pass
  const createUser = (email, password, displayName, photoURL) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, {
          displayName: displayName,
          photoURL: photoURL,
        });
      });
  };


    

  // google sign in
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setLoading(true);
   return signInWithPopup(auth, googleProvider)
      
  };

  // onAuthStateChanged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log("current user:", currentUser.email);
     
      // get and set the token
      if(currentUser){
        axios.post('http://localhost:5000/jwt',{email:currentUser.email})
        .then(data =>{
          console.log(data.data.token)
          localStorage.setItem('access-token', data.data.token)
        })
      }  
      else{
        localStorage.removeItem('access-token');
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);



  
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .finally(() => {
        setUser(user);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login Successful',
          showConfirmButton: false,
          timer: 1500
        })
        setLoading(false);
      });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
      .finally(() => {
        setLoading(false);
      });
  };

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    signInWithGoogle
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
