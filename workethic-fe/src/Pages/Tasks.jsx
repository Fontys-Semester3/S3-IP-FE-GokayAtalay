import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import axios from 'axios';
import UserService from '../Services/UserService';
import TasksOverview from '../Components/TasksOverview';

const data = [
  { title: "Task 1",
    body: "uihgfgnkfh fogjihofiguh joifgjhu gfoihugfohiujfgo hjoifg uhoifgujhoiufghoif huoifghoifguhf gujhofig"},
  { title: "Task 2",
    body: "uihgfgnkfh fogjihofiguh joifgjhu gfoihugfohiujfgo hjoifg uhoifgujhoiufghoif huoifghoifguhf gujhofig"},
  { title: "Task 3",
    body: "uihgfgnkfh fogjihofiguh joifgjhu gfoihugfohiujfgo hjoifg uhoifgujhoiufghoif huoifghoifguhf gujhofig"},
  { title: "Task 4",
    body: "uihgfgnkfh fogjihofiguh joifgjhu gfoihugfohiujfgo hjoifg uhoifgujhoiufghoif huoifghoifguhf gujhofig"},
  { title: "Task 5",
    body: "uihgfgnkfh fogjihofiguh joifgjhu gfoihugfohiujfgo hjoifg uhoifgujhoiufghoif huoifghoifguhf gujhofig"},
];


export default function Posts() {
  const [statePosts, setStatePosts] = useState([]);
  const [stateError, setStateError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const userService = new UserService();
  const navigate = useNavigate();

  async function GetPosts(){
    try {
      const response = await axios.get('http://127.0.0.1:8080/tasks/');
      setStatePosts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setStateError("Something went wrong retrieving tasks!");
      setIsLoading(false);
    }
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
          { isLoading == true ? <Spinner /> : null}

          {
            stateError != null ?
            <div className='w-50'>
              <Alert status='error'>
                <AlertIcon />
                <AlertTitle>Something went wrong!</AlertTitle>
                <AlertDescription>Could not retrieve tasks.</AlertDescription>
              </Alert>
            </div>
            : null
          }          

          <TasksOverview data={data} />
      </div>
    </>
  )
}