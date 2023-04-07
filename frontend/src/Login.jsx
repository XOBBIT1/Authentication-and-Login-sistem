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
            <form className="login-form" onSubmit={handleSubmit}>
                <label form="email">email</label>
                <input value={email} onChange={(event) => setEmail(event.target.value)} typr="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label form="password">password</label>
                <input value={pass} onChange={(event) => setPass(event.target.value)} typr="password" placeholder="*******" id="password" name="password" />
                <button types="submit" onClick={notify}>Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register her!</button>
        </div>
    )
}