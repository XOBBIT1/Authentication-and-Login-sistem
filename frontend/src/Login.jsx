import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(email);

    }

    return (
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label form="email">email</label>
                <input value={email} onChange={(event) => setEmail(event.target.value)} typr="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label form="password">password</label>
                <input value={pass} onChange={(event) => setPass(event.target.value)} typr="password" placeholder="*******" id="password" name="password" />
                <button types="submit">Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register her!</button>
        </div>
    )
}