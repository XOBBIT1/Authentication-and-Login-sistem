import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from "react";
import Modal from "./Modal/Modal";


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [modalActive, setModelActive] = useState(true);

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
                <button types="submit" onClick={() => setModelActive(true)}>Registrate</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Loging here!</button>
            <Modal active={modalActive} setActive={setModelActive}>
                <h1 className="message">Вы успешно зарегистрировались!</h1>
                <h2 className="message">Вам на почту будет выслано сообшение для верификации акаунта.</h2>
            </Modal>
        </div>

    )
}