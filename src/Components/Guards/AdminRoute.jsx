import {Navigate} from "react-router-dom";
import UserRoute from "./UserRoute";
import {LoginPage} from "../../pages/LoginPage";
import {HomePage} from "../../pages/HomePage";

const AdminRoute = (props) => {
    const isAdmin = window.localStorage.getItem('isAdmin');
    const isLogged = window.localStorage.getItem('isLogged');

    return<>
        {
            isLogged
                ? isAdmin
                    ? props.element
                    :<Navigate to={'/adminHome/profile'}/>
                : <Navigate to={'/'}/>
        }
    </>




}

export default AdminRoute