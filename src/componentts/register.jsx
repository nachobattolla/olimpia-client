import "../pages/RegisterPage.css"
import {useNavigate} from "react-router-dom";
import {IconName, IoIosLock, IoIosPerson, IoMdKey} from "react-icons/io";
import BadgeIcon from '@mui/icons-material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const RegisterBox = () => {

    const submitRegister = () => {

    }

    let navigate = useNavigate();

    const Login = () => {
        navigate('/login')
    }

    return (
        <div className="register-contain">
            <a href="/login" className="d-flex justify-content-start"><ArrowLeftIcon className="arrow"/></a>
            <label typeof="title" className="title">REGISTER</label>
            <div>
                <BadgeIcon/>
                <input
                    type="text"
                    name="Full Name"
                    className="register-input"
                    placeholder="Full Name" />
            </div>
            <div>
                <MailIcon/>
                <input
                    type="text"
                    name="Mail"
                    className="register-input"
                placeholder="Mail" />
            </div>
            <div>
                <IoIosPerson/>
                <input
                    type="text"
                    name="Username"
                    className="register-input"
                    placeholder="Username" />
            </div>
            <div>
                <IoIosLock/>
                <input
                    type="password"
                    name="password"
                    className="register-input"
                    placeholder="Password" />
            </div>
            <div>
                <IoIosLock/>
                <input
                    type="password"
                    name="password2"
                    className="register-input"
                    placeholder="Password" />
            </div>
            <div>
                <input type='checkbox' className="tik"/>
                <label className= "isWorker ml-2">Rental court?</label>
            </div>
                <button
                    type="button"
                    className="Register-button"
                    onClick={Login}>Sign Up
                </button>
        </div>
    );
}

export default RegisterBox