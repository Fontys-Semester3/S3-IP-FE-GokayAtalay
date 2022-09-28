import React, { Component } from 'react'

export default class AccountService extends React.Component {
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
}

