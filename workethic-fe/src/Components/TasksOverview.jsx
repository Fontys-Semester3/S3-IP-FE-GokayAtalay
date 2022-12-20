import { Card, CardHeader, CardBody, Flex, Avatar, Box, Heading, Text, Image, color } from '@chakra-ui/react';
import { React } from 'react';

export default function TasksOverview(props) {
    return( 
        props.data.length > 0 &&
        
        <div className='mt-5 flex flex-col items-center' data-testid="overview-1">
            {props.data.map((post) => {
                const priority = post.taskPriority.id;
                const name = post.userName;
                const picture = post.userPicture;

                return(
                    <div key={post.id} className='mb-5 w-3/4 md:w-1/2 lg:w-2/3'>
                        <Card className='w-full'>
                            <CardHeader paddingLeft="20px" paddingRight="20px" paddingTop="20px" paddingBottom="0px">
                            <Flex spacing='4'>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Avatar name={name} src={picture} />

                                <Box>
                                    <Heading size='sm'>{ name }</Heading>
                                </Box>
                                </Flex>
                                <Text sx={{color: priority == 0 ? "#f5d400" : priority == 1 ? "#f56200" : "#f50000"}}><strong>{post?.taskPriority?.value}</strong></Text>
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