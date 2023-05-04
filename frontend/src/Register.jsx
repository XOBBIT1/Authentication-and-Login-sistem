import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from "react";

import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [sername, setSerName] = useState('');
    const [name, setName] = useState('');
    const [login, setlogin] = useState('');
    const [phon, setPhon] = useState('');
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
            <h2 className="name-of-bocks">REGISTRATION</h2>
            <div className="chose-user">
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>LOGIN</button>
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>REGISTRATION</button>
            </div>
            <form className="register-form" onSubmit={handleSubmit}>
                <input value={login} onChange={(event) => setlogin(event.target.value)} typr="login" placeholder="Login" id="login" name="login" />   
                <input value={sername} onChange={(event) => setSerName(event.target.value)} typr="sername" placeholder="Last name (optional)" id="sername" name="sername" />
                <input value={name} onChange={(event) => setName(event.target.value)} typr="name" placeholder="Name" id="name" name="name" />
                <input value={phon} onChange={(event) => setPhon(event.target.value)} typr="phon" placeholder="Phon number" id="phon" name="phon" />
                <input value={email} onChange={(event) => setEmail(event.target.value)} typr="email" placeholder="Email" id="email" name="email" />
                <input value={pass} onChange={(event) => setPass(event.target.value)} typr="password" placeholder="Password" id="password" name="password" />
                <ReCAPTCHA sitekey="6Lc95F8lAAAAAHHxbFKDrp2nXl3c3QMBEM-X-ISk" onChange={onChange}/>
                <button types="submit" className="open-btn" onClick={handleClick}>Registrate</button>
            </form>
        </div>

    )
}