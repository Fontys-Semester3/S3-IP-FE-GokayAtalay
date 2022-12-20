import { React, useContext } from 'react';
import UserService from '../Services/UserService';
import { Link } from 'react-router-dom';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import { userContext } from '../userContext';

export default function Navbar() {
    const userService = new UserService();
    const context = useContext(userContext);
    const user = JSON.parse(userService.getUserSession());
    console.log("SESSION:");
    console.log(user);

    return (
        <nav className="relative bg-white shadow ">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-semibold text-gray-700">
                            <a className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform lg:text-3xl hover:text-gray-700" href="#">Workethic</a>
                        </div>
                    </div>
                    <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
                        {
                            user != null ?
                                <>
                                    <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                                        <a href="/tasks" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100">Tasks</a>
                                        <Link to="/create/task">Create Task</Link>
                                        <a href="/profiles" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100">Profiles</a>
                                    </div>

                                    <div className="flex items-center mt-4 lg:mt-0">
                                        <Menu>
                                            <MenuButton>
                                                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                                    <img src={user.picture} className="object-cover w-full h-full" alt="avatar" referrerPolicy="no-referrer" />
                                                </div>
                                            </MenuButton>

                                            <MenuList>
                                                <MenuItem onClick={() => { context.userLogout() }}>Logout</MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </div>
                                </> :
                                <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                                    <a href="/login" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100">Login</a>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}