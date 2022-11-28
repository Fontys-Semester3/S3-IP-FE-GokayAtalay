import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { userContext } from "./userContext";
import AccountService from './Services/UserService';
import Login from './Pages/Login';
import Tasks from './Pages/Tasks';
import Navbar from './Components/Navbar';
import './App.css';

export default function App() {
  const [stateUser, setStateUser] = useState(null);
  const service = new AccountService();
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
  
  if(value.user == null && service.getUserSession() != null){
    value.userLogin(service.getUserSession());
  }

  return (
    <div className="App">
      <userContext.Provider value={value}>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Tasks/> }/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/tasks' element={<Tasks/>}/>
        </Routes>
      </userContext.Provider>
    </div>
  );
}