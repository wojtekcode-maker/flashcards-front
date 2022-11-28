import React, { useState, } from 'react';
import {useNavigate} from "react-router-dom";
import { UserAuth } from '../context/AuthContext';

import './LoginPage.css';

export const LoginPage = () =>{
  const { signIn } = UserAuth();
  const [loginDetails, setLoginDetails] = useState({
    login: '',
    password: '',
  } as {
    login: string;
    password: string;
  })

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(loginDetails.login, loginDetails.password)
      navigate('/');
    } catch (e: string | any) {
      console.log(e.message);
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