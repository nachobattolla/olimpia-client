import "../pages/LoginPage.css"
import {IoIosLock, IoIosPerson} from "react-icons/io";
import MailIcon from '@mui/icons-material/Mail';
import {useNavigate} from "react-router-dom";
import React, {useContext, useState} from "react";
import {get, post} from "../utils/http";
import Axios from 'axios';


const LoginBox = () => {

    const submitLogin = () => {

    }

    let navigate = useNavigate();
    const [user, setUser] = useState({email:"",password:"",isAdmin:false})
    const [passwordShown, setPasswordShown] = useState(false);

    const loginRequest = () => {
        post("olimpia/login/", user)
            .then((res) => {
                if (!user.isAdmin) {
                    navigate("/home");
                }else {
                    navigate("/adminHome");
                }
            })
            .catch(error => {

            })
    }

    const signUp = () => {
        navigate('/register')
    }

    return (
        <div className="form-contain">
                <div>
                    <span>
                        <MailIcon/>
                        <input
                            type="text"
                            name="Mail"
                            className="login-input"
                            placeholder="Mail"
                            value={user.email}
                            onChange={e => setUser({...user,email: e.target.value})}
                        />
                    </span>
                </div>
                <div>
                    <span>
                        <IoIosLock/>
                        <input
                            type="password"
                            name="Password"
                            className="login-input"
                            placeholder="Password"
                            value={user.password}
                            onChange={e => setUser({...user,password: e.target.value})}
                        />
                    </span>
                </div>

                <div>
                    <input type='checkbox' className="tik" onChange={e => setUser({...user,isAdmin: !user.isAdmin})}/>
                    <label className = "isWorker ml-2"> Rental Court? </label>
                    <a href="#" className="login-forgot-pass">Forgot password?</a>
                </div>

                <button
                    type="button"
                    className="login-button"
                    onClick={()=>loginRequest()}>Login</button>
                <button
                    type="button"
                    className="login-button"
                    onClick={signUp}>Sign Up
                </button>
        </div>
    );
}

export default LoginBox