import { useState, useEffect } from 'react';
import { userContext } from "./userContext";
import AccountService from './Services/AccountService';
import logo from './logo.svg';
import axios from 'axios';
import Login from './Pages/Login';
import Posts from './Pages/Posts';
import Navbar from './Components/Navbar';
import './App.css';

export default function App() {
  const service = new AccountService();
  const [stateUser, setStateUser] = useState(null);
  //const navigate = useNavigate();

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

  useEffect(() => {
    const user = service.getUserSession();

    // if(user != null){
    //   value.user = user;
    //   navigate('/posts');
    // }
    // console.log('EFFECT APP.JS');
    console.log(value.user);
  }, []);
  
  
  return (
    <div className="App">
      <userContext.Provider value={value}>
        {
          stateUser == null         ?
            <Login value={value}/>  :
            <Posts value={value}/>
        }
      </userContext.Provider>
    </div>
  );
}