import React, {useContext} from "react";
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./componets/Navbar";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./componets/Loader";
import Login from "./componets/Login";
import Chat from "./componets/Chat";


const App = () => {
    const {auth} = useContext(Context)
    const { loading} = useAuthState(auth)
    const [user] = useAuthState(auth)
    if(loading) {
        return <Loader/>
    }

    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
            { user ? <Route patch={'/chat'} render ={ ()=> <Chat/>}/>:
                <Route patch={'/login'} render={()=> <Login/>} />}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
