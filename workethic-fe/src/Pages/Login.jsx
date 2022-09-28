import React, { useEffect } from 'react';
import axios from 'axios';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useContext } from 'react';
import { userContext } from '../userContext';
import { useState } from 'react';
import { LoginButton } from '../Components/LoginButton';
/* global gapi */
export default function Login() {
    const [stateTokenClient, setStateTokenClient] = useState({});
    const value = useContext(userContext);
    console.log(value);

    function parseJwt(token) {
        var base64Url = token.split(".")[1];
        var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        var jsonPayload = decodeURIComponent(
            window
            .atob(base64)
            .split("")
            .map(function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
        );

        return JSON.parse(jsonPayload);
    }

    async function handleJWT(credentialResponse) {
        const credential = credentialResponse.credential;
        value.userLogin(parseJwt(credential));
        //const response = await handleCookie(credential);
    }

    async function handleCookie(data){
        const response = await axios.get('http://127.0.0.1:8000/token', {'jwt':data});
        await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response => {
          console.log(response);
        });
        const responseAPI = await axios.post('http://127.0.0.1:8000/');
    }

    function doSomething(){
      stateTokenClient.requestAccessToken();
    }

  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <LoginButton value={value}/>
      </GoogleOAuthProvider> 

      <input type="submit" onClick={doSomething} value="Cash Gang"/>
    </> 
  )
}