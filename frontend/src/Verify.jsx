import React, { useState } from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Verify = (props) => {
    const [verify, setToken] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
    }
    const notify = () => {
        toast.success('You verified successfully! ', {
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
        <div>
             <form className="login-form" onSubmit={handleSubmit}>
                <label form="token">token</label>
                <input className="token_input" value={verify} onChange={(event) => setToken(event.target.value)} typr="token" placeholder="your token" id="verify" name="verify" />
                <button className="verify-btn" types="submit" onClick={notify}>Confirm Account</button>
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Go to Login</button>
            </form>
        </div>
    )
}