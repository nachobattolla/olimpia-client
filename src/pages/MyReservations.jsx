import PendingReservesTable from "../Components/Admin/PendingReservesTable"
import NavBar from "../Components/Admin/NavBar";
import MyReservationsTable from "../Components/User/MyReservationsTable";
import NavBarClient from "../Components/User/NavBarClient";

export  const MyReservations = () =>{
    return(
        <div>
            <NavBarClient></NavBarClient>
            <MyReservationsTable/>
        </div>
    )
}
export default MyReservations