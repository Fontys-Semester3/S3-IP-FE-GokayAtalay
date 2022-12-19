import React from 'react'
import { FormControl, FormLabel, Input, Select, Textarea, Button } from '@chakra-ui/react'
import styles from "../Style/createPage.module.css"
import { useEffect, useState, useRef } from 'react'
import TaskService from '../Services/TaskService'
import UserService from '../Services/UserService'
import { useNavigate } from 'react-router-dom'

const CreateTask = () => {
    const userService = new UserService();
    const Service = new TaskService();
    const [priorities, setPriorities] = useState([])
    const Title = useRef("")
    const Body = useRef("")
    const [Priority, setPriority] = useState("")
    const user = JSON.parse(userService.getUserSession());
    const navigate = useNavigate();

    useEffect(() => {
        Service.getPriorities().then((res) => {
            setPriorities(res.data)
        })
    }, [])

    function onSubmit() {
        console.log(Title.current.value);
        console.log(Body.current.value);
        console.log(Priority);
        console.log(user)
        const data = {
            title: Title.current.value,
            body: Body.current.value,
            userId: user.sub,
            userName: user.name,
            userPicture: user.picture,
            task_priority_id: Priority
        }

        Service.postTask(data).then((res) => {
            navigate("/tasks")
        })
    }

    return (
        <>
            <br></br>
            <h2>Create task</h2>
            <br></br>
            <div className={styles.WrappingContainer}>
                <div className={styles.Card}>
                    <div className={styles.formControl}>
                        <FormControl isRequired>
                            <FormLabel>Task Title</FormLabel>
                            <Input ref={Title} borderColor={"black"} placeholder='Task title' />
                        </FormControl>
                    </div>
                    <div className={styles.formControl}>
                        <FormControl isRequired>
                            <FormLabel>Task Body</FormLabel>
                            <Textarea ref={Body} borderColor={"black"} placeholder='Body' />
                        </FormControl>
                    </div>
                    <div className={styles.formControl}>
                        <FormControl isRequired>
                            <FormLabel>Task Priority</FormLabel>
                            <Select borderColor={"black"} onChange={(e) => {
                                console.log(e.target.value)
                                setPriority(e.target.value)
                            }}>
                                {priorities.map((priority, i) => {
                                    if (i === 0 && Priority === "") {
                                        setPriority(priority.id)
                                    }
                                    return (
                                        <option key={priority.id} value={priority.id}>{priority.value}</option>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </div>
                    <Button
                        onClick={onSubmit}
                        ml={"auto"}
                        mr={"auto"}
                        mt={4}
                        width='50%'
                        colorScheme='teal'
                        type='submit'
                    >
                        Submit
                    </Button>


                </div>
            </div>


        </>
    )
}

export default CreateTask