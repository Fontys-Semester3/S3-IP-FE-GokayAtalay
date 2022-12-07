import { Card, CardHeader, CardBody, Flex, Avatar, Box, Heading, Text, Image } from '@chakra-ui/react';
import { React, useState, useEffect } from 'react';

export default function TasksOverview(props) {
    const [stateRandomUser, setStateRandomUser] = useState(null);
    async function GetRandomPersons(){
        try {
            const response = await fetch('https://randomuser.me/api/?results=100');
            const data = await response.json();
            setStateRandomUser(data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(stateRandomUser == null){
            GetRandomPersons();
        }
    }, [stateRandomUser])
    
    

    return( 
        props.data.length > 0 &&
        
        <div className='mt-5 flex flex-col items-center' data-testid="overview-1">
            {stateRandomUser != null && props.data.map((post, index) => {
                const person = stateRandomUser[index];
                const name = person.name.first + ' ' + person.name.last;
                const picture = person.picture.medium;
                return(
                    <div key={index} className='mb-5 w-3/4 md:w-1/2 lg:w-2/6'>
                        <Card className='w-full'>
                            <CardHeader paddingLeft="20px" paddingRight="20px" paddingTop="20px" paddingBottom="0px">
                            <Flex spacing='4'>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Avatar name={name} src={picture} />

                                <Box>
                                    <Heading size='sm'>{ name }</Heading>
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
    	            </div>
                    );
            })}
        </div>
    );
}