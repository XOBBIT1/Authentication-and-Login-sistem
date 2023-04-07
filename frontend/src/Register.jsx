import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from "react";

import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const notify = () => {
        toast.success('You have successfully registered! ', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            },)
        toast.info('A message will be sent to your email! ', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
    }
    function handleClick() {
        notify();
        props.onFormSwitch('verify');
      }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(email);

    }
    const onChange = () => {};

    return (
         <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Your name</label>
                <input value={name} onChange={(event) => setName(event.target.value)} typr="name" placeholder="Your full name" id="name" name="name" />
                <label htmlFor="email">email</label>
                <input value={email} onChange={(event) => setEmail(event.target.value)} typr="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(event) => setPass(event.target.value)} typr="password" placeholder="*******" id="password" name="password" />
                <ReCAPTCHA sitekey="6Lc95F8lAAAAAHHxbFKDrp2nXl3c3QMBEM-X-ISk" onChange={onChange}/>
                <button types="submit" className="open-btn" onClick={handleClick}>Registrate</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Loging here!</button>
        </div>

    )
}