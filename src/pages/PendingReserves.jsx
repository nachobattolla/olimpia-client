import PendingReservesTable from "../Components/Admin/PendingReservesTable"
import NavBar from "../Components/Admin/NavBar";

export  const PendingReserves = () =>{
    return(
        <div>
            <NavBar></NavBar>
            <PendingReservesTable/>
        </div>
    )
}