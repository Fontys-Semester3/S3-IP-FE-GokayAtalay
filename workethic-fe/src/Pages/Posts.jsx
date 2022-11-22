import { React, useState, useContext, useEffect } from 'react'
import { userContext } from '../userContext';
import Navbar from '../Components/Navbar'
import AccountService from '../Services/AccountService';
import axios from 'axios';

export default function Posts() {
  const [statePosts, setStatePosts] = useState([]);
  const service = new AccountService();
  const value = useContext(userContext);

  async function GetPosts(){
    const response = await axios.get('http://127.0.0.1:8080/tasks/');
    setStatePosts(response.data);
  }

  useEffect(() => {
    if(Object.keys(value.user).length === 0){
      value.user = service.getUserSession();
    }

    GetPosts();
  }, [])
  
  return (
    <>
      <Navbar value={value}/>
      <div className='w-full h-[80vh] flex flex-col items-center pt-10'>
          {
              statePosts.map((post, index) => {
                return(
                  <div key={index} className="mb-3">
                    <a href="#" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{post.title}</h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">{post.body}</p>
                    </a>
                  </div>
                )
              }) 
          }
      </div>
    </>
  )
}