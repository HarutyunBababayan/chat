import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import App from "./App";

firebase.initializeApp( {
    apiKey: "AIzaSyB8ePva1zp3bI6ZkhcAgy1jzFuv3QXVnGE",
    authDomain: "chat-react-1be6e.firebaseapp.com",
    projectId: "chat-react-1be6e",
    storageBucket: "chat-react-1be6e.appspot.com",
    messagingSenderId: "846203924775",
    appId: "1:846203924775:web:b455b7e4afc3bcc2b1f902",
    measurementId: "G-630WHGFFBH"
});

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()




ReactDOM.render(
  <Context.Provider value={{
      firebase,
      auth,
      firestore
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

