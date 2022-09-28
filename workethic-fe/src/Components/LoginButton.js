import { React, useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { userContext } from '../userContext';
import GoogleButton from "react-google-button";
import axios from "axios";

export const LoginButton = () => {
    const value = useContext(userContext);

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
        console.log(tokenResponse);
        const userInfo = await axios.get(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            { headers: { Authorization: 'Bearer ' + tokenResponse.access_token } }
        );
        console.log(userInfo);
        value.userLogin(userLogin.data);
        },
        onError: (errorResponse) => console.log(errorResponse),
    });
  
    return <GoogleButton onClick={googleLogin}>Login</GoogleButton>;
};
