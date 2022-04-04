import React from 'react'
import logo from "../resources/logo.png";
import './LoginPage.css';
import LoginBox from "../componentts/Login";

export const LoginPage = () =>{
    return (
        <div className="Login">
            <header className="Login-header">
                <div className={"content"}>
                    <img src={logo} className="Olimpia-logo" alt="logo" />
                    <div className={"login-box"}>
                        <LoginBox />
                    </div>
                </div>
            </header>
        </div>
    );

}