import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';

export default function App() {
  const CLIENT_ID = '167499127647-vont3e759gg3g0902vig4c5vejd87cov.apps.googleusercontent.com';
  
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

  async function handleCookie(data){
    const response = await axios.post('http://127.0.0.1:8000/api/jwt', {'jwt':data});

  }

  async function handleJWT(credentialResponse) {
    const credential = credentialResponse.credential;
    const response = await handleCookie(credential);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

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
    </div>
  );
}