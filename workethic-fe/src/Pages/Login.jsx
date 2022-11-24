import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useContext } from 'react';
import { userContext } from '../userContext';
import { LoginButton } from '../Components/LoginButton';
/* global gapi */
export default function Login() {
  const value = useContext(userContext);

  return (
    <>
      <div className='w-full h-[80vh] flex justify-center items-center'>
        <h2>Login</h2>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
          <LoginButton value={value}/>
        </GoogleOAuthProvider>
      </div>
      
    </> 
  )
}