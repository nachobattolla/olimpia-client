import React from 'react'
import logo from "../resources/logo.png";
import './RegisterPage.css';
import RegisterBox from "../componentts/register";
import LoginBox from "../componentts/Login";

export const RegisterPage = () =>{

    return (
        <div className="Register">
            <header className="Register-header">
                <div className={"content2"}>
                    <img src={logo} className="Olimpia-logoRegister" alt="logo" />
                    <div className="register-box">
                        <RegisterBox />
                    </div>
                </div>
            </header>
        </div>
    );

}