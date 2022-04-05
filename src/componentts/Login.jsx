import "../pages/LoginPage.css"
import {IoIosLock, IoIosPerson} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import React, {useContext, useState} from "react";
import {post} from "../utils/http";


const LoginBox = () => {

    const submitLogin = () => {

    }

    let navigate = useNavigate();
    const [user, setUser] = useState({userName:"",password:"",rentalCourt:false})
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };
    function handleSubmit(event) {
        event.preventDefault();
    }

    const loginRequest = () => {
        post("auth/login/", user)
            .then(() => {
                if (user.rentalCourt) {
                    navigate("/adminHome");
                }else {
                    navigate("/home");
                }
            })
            .catch(err => {

            })
    }

    const signUp = () => {
        navigate('/register')
    }

    return (
        <div className="form-contain">
                <div>
                    <span>
                        <IoIosPerson/>
                        <input
                            type="text"
                            name="Username"
                            className="login-input"
                            placeholder="Username"
                            value={user.userName}
                            onChange={e => setUser({...user,userName: e.target.value})}
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
                    <input type='checkbox' className="tik" onChange={e => setUser({...user,rentalCourt: !user.rentalCourt})}/>
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