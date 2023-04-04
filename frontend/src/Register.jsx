import React, { useState } from "react";


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(email);

    }

    return (
         <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Your name</label>
                <input value={name} onChange={(event) => setName(event.target.value)} typr="name" placeholder="Your full name" id="name" name="name" />
                <label htmlFor="email">email</label>
                <input value={email} onChange={(event) => setEmail(event.target.value)} typr="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(event) => setPass(event.target.value)} typr="password" placeholder="*******" id="password" name="password" />
                <button types="submit">Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Loging here!</button>
        </div>

    )
}