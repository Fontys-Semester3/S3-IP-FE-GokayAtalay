import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserService from '../Services/UserService';

export default function Posts() {
  const [statePosts, setStatePosts] = useState([]);
  const userService = new UserService();
  const navigate = useNavigate();

  async function GetPosts(){
    const response = await axios.get('http://127.0.0.1:8080/tasks/');
    setStatePosts(response.data);
  }

  useEffect(() => {
    if(userService.getUserSession() == null){
      navigate("/login");
    }

    GetPosts();
  }, [])
  
  return (
    <>
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