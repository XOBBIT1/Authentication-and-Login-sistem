import React, { useState } from "react";

const Verify = (props) => {
    const [pass, setPass] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();

    }
    return ( 
        <div>
             <form className="login-form" onSubmit={handleSubmit}>
                <label form="password">password</label>
                <input value={pass} onChange={(event) => setPass(event.target.value)} typr="password" placeholder="*******" id="password" name="password" />
                <button types="submit">Confirm Account</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register her!</button>
        </div>
    )
}

export default Verify;