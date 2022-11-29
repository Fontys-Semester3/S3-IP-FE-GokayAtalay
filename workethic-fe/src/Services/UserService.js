import React from 'react'

export default class UserService extends React.Component {
    constructor(props){
        super(props);
    }

    setUserSession(user){
        if(user != null){
            sessionStorage.setItem('sessionUser', user);
        }
    }
    
    getUserSession(){
        return sessionStorage.getItem('sessionUser');
    }

    deleteUserSession(){
        sessionStorage.removeItem('sessionUser');
    }
}

