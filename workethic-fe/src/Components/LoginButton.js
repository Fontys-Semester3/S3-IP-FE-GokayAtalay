import { React, useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { userContext } from '../userContext';
import GoogleButton from "react-google-button";
import axios from "axios";
import AccountService from "../Services/AccountService";

export const LoginButton = () => {
    const service = new AccountService();
    const value = useContext(userContext);
    //const navigate = useNavigate();

    function handleLogin(user){
        value.userLogin(user);
        service.setUserSession(JSON.stringify(user));
        //navigate('/posts');
    }

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log(tokenResponse);
            const userInfo = await axios.get(
                "https://www.googleapis.com/oauth2/v3/userinfo",
                { headers: { Authorization: 'Bearer ' + tokenResponse.access_token } }
            );
            handleLogin(userInfo.data);
        },
        onError: (errorResponse) => console.log(errorResponse),
    });
  
    return <GoogleButton onClick={googleLogin}>Login</GoogleButton>;
};