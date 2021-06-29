import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import classes from "./Navbar.module.css"
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return (
        <div className={classes.appBar}>
            <div className={classes.toolBar}>
                {user ? <button onClick={() => auth.signOut()}>Выйти</button>
                    :
                    <NavLink to={'/login'}>
                    <button>Логин</button>
                    </NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;