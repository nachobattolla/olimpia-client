import {Navigate} from "react-router-dom";

const UserRoute = (props) => {
    const isAdmin = window.localStorage.getItem('isAdmin');
    const isLogged = window.localStorage.getItem('isLogged');

    return  isLogged
                ? !isAdmin
                    ? props.element
                    : <Navigate to={'/adminHome/profile'}/>
                :  <Navigate to={'/'}/>

}
export default UserRoute