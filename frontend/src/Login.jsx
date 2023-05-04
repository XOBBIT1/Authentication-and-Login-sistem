import React, { useState } from "react";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
    }
    const notify = () => {
        toast.success('You have successfully login ', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            },)
    }

    return (
        <div className="auth-form-container">
            <h2 className="name-of-bocks">LOGIN</h2>
            <div className="chose-user">
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>LOGIN</button>
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>REGISTRATION</button>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <input value={email} onChange={(event) => setEmail(event.target.value)} typr="email" placeholder="loggin" id="email" name="email" />
                <input value={pass} onChange={(event) => setPass(event.target.value)} typr="password" placeholder="password" id="password" name="password" />
                <button types="submit" onClick={notify}>Login</button>
            </form>
        </div>
    )
}