import "../../pages/LoginPage.css"
import {IoIosLock, IoIosPerson} from "react-icons/io";
import MailIcon from '@mui/icons-material/Mail';
import {useNavigate} from "react-router-dom";
import React, {useContext, useState} from "react";
import {get, post} from "../../utils/http";
import Axios from 'axios';
import data from "bootstrap/js/src/dom/data";
import {Alert} from "react-bootstrap";


const LoginBox = () => {

    const submitLogin = () => {

    }

    let navigate = useNavigate();
    const [user, setUser] = useState({email:"",password:"",isAdmin2:false})
    const [passwordShown, setPasswordShown] = useState(false);
    const [alert, setAlert] = useState("")

    const loginRequest = () => {
        post("olimpia/login/", user, {options: {withCredentials: true}})
            .then((res) => {
                setAlert(res.message)
                console.log(alert)
                if (!res.isAdmin) {
                    navigate("/home");
                }else {
                    navigate("/adminHome/courts");
                }

            })
            .catch(error => {
                setAlert(error.data.message)

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
                <div>
                    {
                        (alert !== "")?
                        <Alert key="danger" variant="danger">
                            {alert}
                        </Alert>:<></>
                    }

                </div>
        </div>
    );
}

export default LoginBox