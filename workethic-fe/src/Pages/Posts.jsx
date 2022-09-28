import { React, useContext, useEffect } from 'react'
import { userContext } from '../userContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import AccountService from '../Services/AccountService';

export default function Posts() {
  const service = new AccountService();
  const value = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(Object.keys(value.user).length === 0){
      value.user = service.getUserSession();
    }
  }, [])
  
  return (
    <>
      <Navbar value={value}/>
      <h2>gang gang</h2>
    </>
  )
}