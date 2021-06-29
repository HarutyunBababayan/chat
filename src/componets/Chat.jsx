import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import classes from './Chat.module.css'
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase";

const Chat = () => {

    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )
    const sendMessage = async () => {
    firestore.collection('messages').add({
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: value,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
        setValue('')
    }

    if(loading) {
        return <Loader/>
    }

    return (
        <div>
            <div className={classes.gridContainer}>
                <div className={classes.divContainer}>
                    {messages.map(message =>
                        <div style={{
                            margin: 10,
                            border: user.uid === message.uid ? '2px solid green' : '2px solid red',
                            marginLeft: user.uid === message.uid ? 'auto' : '10px',
                            width: 'fit-content',
                            padding: 5,
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <div>
                                <img className={classes.userImagesStyle} src={message.photoURL} alt="userImg"/>
                                <div>{message.text}</div>
                            </div>
                            <div>{message.displayName}</div>
                        </div>
                    )}
                </div>
                <div className={classes.buttonBlock}>
                    <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
                    <button onClick={sendMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default Chat;