import React, {Dispatch, SetStateAction, useState} from 'react';

import './LoginPage.css';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {app} from "../config/firebase.config";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export const LoginPage = ({setIsLogged}: {setIsLogged: Dispatcher<{}>}) =>{
  const [loginDetails, setLoginDetails] = useState({
    login: '',
    password: '',
  } as {
    login: string;
    password: string;
  })

  const auth = getAuth(app);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginDetails.login, loginDetails.password);
      const user = userCredential.user;
      setIsLogged(user);
    } catch (e) {
      alert("Log in failed.")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="loginForm">
        <label>
          <p>Login:</p>
          <input
            type="text"
            value={loginDetails.login}
            onChange={e => setLoginDetails({
                ...loginDetails,
                login: e.target.value
              }
            )}
            required/>
        </label>
        <label>
          <p>Password:</p>
          <input
            type="password"
            value={loginDetails.password}
            onChange={e => setLoginDetails({
                ...loginDetails,
                password: e.target.value
              }
            )}
            required/>
        </label>
        <input type="submit" value="Log in"/>
      </form>
    </>
  )
}