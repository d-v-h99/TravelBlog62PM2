import React from 'react';
import { useState } from 'react';
import './account.css';
import Login from './login/Login';
import Register from './register/Register';
import Reset from './reset/Reset';
import Navbar from '../../components/navbar/Navbar';


const Account = () => {
  const [login, setlogin] = useState(true);
  const [register, setregister] = useState(false);
  const [reset, setreset] = useState(false);

  const handleRegister = () => {
    setlogin(false);
    setregister(true);
    setreset(false);
  };
  const handleReset = () => {
    setlogin(false);
    setreset(true);
    setregister(false);
  };
  const handleLogin = () => {
    setreset(false);
    setlogin(true);
    setregister(false);
  };
  return (
    <>
    <Navbar/>
    <section className=" formbox --flex-center --100vh --bg-grey ">
      <div className="container box">
        {login && <Login onRegister={handleRegister} onReset={handleReset} />}
        {register && <Register onLogin={handleLogin} />}
        {reset && <Reset onLogin={handleLogin} />}
      </div>
    </section>
    </>
    
  );
};

export default Account;
