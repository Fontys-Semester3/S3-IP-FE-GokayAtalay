import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { userContext } from "./userContext";
import { useNavigate } from 'react-router-dom';
import Login from './Pages/Login';
import Posts from './Pages/Posts';
import Navbar from './Components/Navbar';
/* global gapi */
export default function App(first) {
  const [stateUser, setStateUser] = useState(null);
  const navigate = useNavigate();

  const value = {
    user: stateUser,
    userLogin: LoginUser,
    userLogout: LogoutUser,
  };

  function LoginUser(userObj){
    console.log('Logging user in');
    console.log(userObj);
    setStateUser(userObj);
  }

  function LogoutUser(){
    console.log('Logging user out');
    setStateUser(null);
    setStateUser(null);
  }
  
  return (
    <div className="App">
      <userContext.Provider value={value}>
        <Navbar value={value}/>
        {
          stateUser == null         ?
            <Login value={value}/>  :
            <Login value={value}/>
        }
        
      </userContext.Provider>
    </div>
  );
}