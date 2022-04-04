import "../pages/LoginPage.css"
import {IoIosLock, IoIosPerson} from "react-icons/io";
import {useNavigate} from "react-router-dom";


const LoginBox = () => {

    const submitLogin = () => {

    }

    let navigate = useNavigate();

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
                            placeholder="Username" />
                    </span>
                </div>

                <div>
                    <span>
                        <IoIosLock/>
                        <input
                            type="password"
                            name="Password"
                            className="login-input"
                            placeholder="Password" />
                    </span>
                </div>

                <div>
                    <input type='checkbox' className="tik"/>
                    <label className = "isWorker ml-2"> Rental Court? </label>
                    <a href="#" className="login-forgot-pass">Forgot password?</a>
                </div>

                <button
                    type="button"
                    className="login-button"
                    onClick={()=>submitLogin()}>Login</button>
                <button
                    type="button"
                    className="login-button"
                    onClick={signUp}>Sign Up
                </button>
        </div>
    );
}

export default LoginBox