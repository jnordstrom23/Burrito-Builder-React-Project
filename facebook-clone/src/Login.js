import { Button } from '@mui/material';
import React from 'react'
import "./Login.css";
import {auth,provider} from "./firebase";
import { useStateValue } from './StateProvider';
import {actionType} from "./reducer"


function Login() {
    const [state, dispatch] = useStateValue();


    const signIn = () => {
        // sign in
        auth
            .signInWithPopup(provider)
            .then((result) => {

                dispatch({
                    type : actionType.SET_USER,
                    user : result.user,
                })

                console.log(result.user);
            })
            .catch((error) => alert(error.message));
    }

  return (
    <div className='login'>
        <div className="login__logo">
            <img
                src= "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png"
                alt=""
                />
            <img
                src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                alt=""
                />
        </div>
        <Button type="submit" onClick={signIn}>
            Sign In
        </Button>
    </div>
  )
}

export default Login