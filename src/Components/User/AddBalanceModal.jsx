import {IoMdColorFilter} from "react-icons/io";
import Select from "react-select";
import DateTimePicker from "react-datetime-picker";
import NewContainerMap from "../Shared/NewMapContainer";
import React, {useEffect, useState} from "react";
import {createPayment} from "../../utils/MercadoPagoQuery";
import {get} from "../../utils/http";

const AddBalanceModal = (props) => {
    const [balance, setBalance] = useState(0)
    const [id,setId]=useState()
    useEffect(()=>{
        get('dashboard/getId',{options: {withCredentials: true}}).then(res =>{
            setId(res)
        })
    })
    const handleConfirm = async () => {
        const res = await createPayment(id, Number(balance))
        window.location.href = res.init_point;
    }
  return(
      <>
      <div className="btn rounded-pill btn-outline-success bg-primary pe-5" data-bs-toggle="modal" data-bs-target="#new-edit-modal2" >
          <IoMdColorFilter/>
      </div>
    <div className="modal fade" id="new-edit-modal2" tabIndex="-1">
        <div className="modal-dialog">
            <div className="modal-content text-center">
                <div className="modal-header text-success ">
                    <h4 className="modal-title">ADD BALANCE</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                </div>
                <div className="modal-body">
                    <label className="m-2"> Balance </label>
                    <input type="number" className="form-control"  onChange={(e)=>setBalance(parseInt(e.target.value))}/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>{handleConfirm()}}>Add Balance</button>
                </div>
            </div>
        </div>
    </div>
</>
  )
}
export default AddBalanceModal