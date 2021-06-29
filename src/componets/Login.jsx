import React, {useContext} from 'react';
import classes from "./Login.module.css"
import {Context} from "../index";
import firebase from "firebase";
import {NavLink, Redirect, Route} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";

const Login = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        return <Redirect to={'/chat'}/>
    }

    // if(user) return  <Redirect to={"/chat"}/>


    return (
        <div>
            <div className={classes.container}>
                    <button onClick={login}>Войти с помощью google</button>
            </div>
        </div>
    );
};

export default Login;