import React, { useState } from 'react';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { Verify } from './Verify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [currentForm, setCurrentFrom] = useState('login');

  const toggleForm = (formName) => {
    setCurrentFrom(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? (
          <Login onFormSwitch={toggleForm}/> 
        ) : currentForm === "register" ? (
          <Register onFormSwitch={toggleForm}/> 
        ) : (
          <Verify onFormSwitch={toggleForm}/> 
        )
      }
      <ToastContainer />
    </div>
  );
}

export default App;
