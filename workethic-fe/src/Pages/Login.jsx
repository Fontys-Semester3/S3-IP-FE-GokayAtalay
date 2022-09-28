import React, { useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useContext } from 'react';
import { userContext } from '../userContext';
import { useState } from 'react';
import { LoginButton } from '../Components/LoginButton';
/* global gapi */
export default function Login() {
    const [stateTokenClient, setStateTokenClient] = useState({});
    const value = useContext(userContext);

  return (
    <>
      <Navbar value={value}/>
      <div className='w-full h-[80vh] flex justify-center items-center z-0'>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
          <LoginButton value={value}/>
        </GoogleOAuthProvider>
      </div>
      
    </> 
  )
}