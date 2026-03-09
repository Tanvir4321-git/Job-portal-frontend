import React, { useEffect, useState } from 'react';

import { createUserWithEmailAndPassword,  onAuthStateChanged, signInWithEmailAndPassword, signOut,   } from 'firebase/auth';
import { auth } from '../FirebaseConfiq';
import { Authcontext } from './AuthContext';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';





const AuthProvider = ({children}) => {

const [user,setuser]=useState(null)
const [loading,setloading]=useState(true)


    // Register
    const registerUser=(email,password)=>{
        setloading(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }

// login 
const login = (email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password)
}


 // logout
 const logOut=()=>{
    setloading(true)
     return signOut(auth)

 }




// current User
useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth ,(currentUser)=>{
      setuser(currentUser)
      setloading(false)
    })
    return()=>{
        unsubscribe()
    }
},[])


// all job 


   const {data:jobs, isLoading:jobloading,refetch}=useQuery({
   
    queryKey:['jobs'],
    queryFn:async()=>{
        const res=await axios.get(`http://localhost:5000/jobs`)
            return res.data
         
        } })





const authInfo={
registerUser,
login,
 
 logOut,
 user,setuser,
 loading,setloading,
 jobs, jobloading,refetch
 
}

    return (
        <Authcontext value={authInfo}>{children}</Authcontext>
    );
};

export default AuthProvider;