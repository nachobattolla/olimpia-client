import "../../pages/RegisterPage.css"
import {useNavigate} from "react-router-dom";
import {IconName, IoIosLock, IoIosPerson, IoMdKey} from "react-icons/io";
import MailIcon from '@mui/icons-material/Mail';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import PhoneIcon from '@mui/icons-material/Phone';
import {useEffect, useState} from "react";
import {post} from "../../utils/http";

const RegisterBox = () => {

    let navigate = useNavigate();
    const [user, setUser] = useState({username:"",email:"",password:"",password2:"",phone:"",isAdmin:false})
    const [errorMessage, setErrorMessage] = useState("");
    const [errored, setErrored] = useState(false);

    const RegisterRequest = () => {
        post("olimpia/register/", user)
            .then((res) => {
                navigate("/");
                setErrored(false);
            })
            .catch(err => {
                //console.log("err" + err);
                //setErrorMessage(err)
                //navigate("/register");
                setErrored(true);
            })
    }



    
    const Login = () => {
        navigate('/login')
    }

    return (
        <div className="register-contain">
            <a href="/login" className="d-flex justify-content-start"><ArrowLeftIcon className="arrow"/></a>
            <label typeof="title" className="title">REGISTER</label>
            <div>
                <IoIosPerson/>
                <input
                    type="text"
                    name="Username"
                    className="register-input"
                    placeholder="Username"
                    value={user.username}
                    onChange={e => setUser({...user,username: e.target.value})}
                />
            </div>
            <div>
                <MailIcon/>
                <input
                    type="text"
                    name="Mail"
                    className="register-input"
                    placeholder="Mail"
                    value={user.email}
                    onChange={e => setUser({...user,email: e.target.value})}
                />
            </div>
            <div>
                <IoIosLock/>
                <input
                    type="password"
                    name="password"
                    className="register-input"
                    placeholder="Password"
                    value={user.password}
                    onChange={e => setUser({...user,password: e.target.value})}
                />
            </div>
            <div>
                <IoIosLock/>
                <input
                    type="password"
                    name="password2"
                    className="register-input"
                    placeholder="Password"
                    value={user.password2}
                    onChange={e => setUser({...user,password2: e.target.value})}
                />
            </div>
            <div>
                <PhoneIcon/>
                <input
                    type="text"
                    name="phone"
                    className="register-input"
                    placeholder="Phone"
                    value={user.phone}
                    onChange={e => setUser({...user,phone: e.target.value})}
                />
            </div>
            {errored ? (<div className="alert alert-danger" role="alert">
                ERROR!
            </div>) : <div/>}
            <div>
                <input type='checkbox' className="tik" onChange={e => setUser({...user,isAdmin: !user.isAdmin})}/>
                <label className= "isWorker ml-2">Rental court?</label>
            </div>
            {errorMessage && <div className="error"> {errorMessage} </div>}
            <button
                type="button"
                className="Register-button"
                onClick={RegisterRequest}>Sign Up
            </button>
        </div>
    );
}

export default RegisterBox