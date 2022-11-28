import { Card, CardHeader, CardBody, Flex, Avatar, Box, Heading, Text, Image } from '@chakra-ui/react';
import { React } from 'react';

export default function TasksOverview(props) {

    return( 
        props.data.length > 0 &&
        
        <div className='w-50 mt-5' data-testid="overview-1">
            {props.data.map((post, index) => {
                return(
                    <Card key={index} width="70%" margin="auto">
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
                </Card>);
            })}
        </div>
    );
}