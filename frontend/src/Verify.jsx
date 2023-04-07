import React, { useState } from "react";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Verify = (props) => {
    const [verify, setToken] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();

    }
    return ( 
        <div>
             <form className="login-form" onSubmit={handleSubmit}>
                <label form="token">token</label>
                <input className="token_input" value={verify} onChange={(event) => setToken(event.target.value)} typr="token" placeholder="your token" id="verify" name="verify" />
                <button className="verify-btn" types="submit">Confirm Account</button>
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Go to Login</button>
            </form>
            <ToastContainer/>
        </div>
    )
}