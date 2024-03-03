import React, { useState } from 'react'
import Login from "../components/login.js"
import Register from '../components/register.js';

export default function Landing() {

    const [showLogin, setShowLogin] = useState(true);

    const changeLayout = (id) => {
        setShowLogin(!showLogin);
        let left = document.getElementById(id);
        let right = document.getElementById(id === "register" ? "login" : "register");

        if (left && right) {
            left.style.backgroundColor = "#9E9E94";
            right.style.backgroundColor = "#D9D9D9";
        }
    }

    return (
        <div id="outer">
            <div id="left">
                <img src="IITG-Logo.png" alt="IITG Logo" />
                <h1 id="heading">IITG HOSPITAL</h1>
            </div>
            <div id="right">
                <div id="navbar">
                    <div id="register" onClick={e => { changeLayout("register") }}>
                        Register
                    </div>
                    <div id="login" onClick={e => { changeLayout("login") }}>
                        Login
                    </div>
                </div>
                {showLogin === true ? <Login /> : <Register />}

            </div>
        </div>
    )
}
