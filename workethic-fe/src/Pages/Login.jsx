import React from 'react';
import axios from 'axios';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useContext } from 'react';
import { userContext } from '../userContext';

export default function Login() {
    const CLIENT_ID = '167499127647-vont3e759gg3g0902vig4c5vejd87cov.apps.googleusercontent.com';
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
        const response = await handleCookie(credential);
    }

    async function handleCookie(data){
        const response = await axios.get('http://127.0.0.1:8000/token', {'jwt':data});
        await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response => {
          console.log(response);
        });
        const responseAPI = await axios.post('http://127.0.0.1:8000/');
    }

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
        <GoogleLogin
          buttonText="Login with Google"
          isSignedIn={true}
          useOneTap
          auto_select
          onSuccess={credentialResponse => {
            handleJWT(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
  )
}