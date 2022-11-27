import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { userContext } from "./userContext";
import AccountService from './Services/UserService';
import Login from './Pages/Login';
import Posts from './Pages/Tasks';
import Navbar from './Components/Navbar';
import './App.css';

export default function App() {
  const service = new AccountService();
  const [stateUser, setStateUser] = useState(null);
  const navigate = useNavigate();
  let user;

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
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Posts/> }/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/posts' element={<Posts/>}/>
        </Routes>
      </userContext.Provider>
    </div>
  );
}