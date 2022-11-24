import { Card, CardHeader, CardBody, Flex, Avatar, Box, Heading, Text, Image } from '@chakra-ui/react';
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
                  <Card key={index} width="30%" marginBottom="20px">
                    <CardHeader paddingLeft="20px" paddingRight="20px" paddingTop="20px" paddingBottom="0px">
                      <Flex spacing='4'>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                          <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                          <Box>
                            <Heading size='sm'>Segun Adebayo</Heading>
                            <Text>Creator, Chakra UI</Text>
                          </Box>
                        </Flex>
                      </Flex>
                    </CardHeader>
                    <CardBody paddingLeft="10px" paddingRight="10px" paddingTop="10px" paddingBottom="25px">
                      <Heading marginBottom="5px">{post.title}</Heading>
                      <Text>
                        {post.body}
                      </Text>
                    </CardBody>
                  </Card>
                )
              }) 
          }
      </div>
    </>
  )
}