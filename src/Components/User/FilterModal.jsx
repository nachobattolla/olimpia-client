import React, {useCallback, useEffect, useState} from 'react';
import {post} from "../../utils/http";
import {IoMdColorFilter} from "react-icons/io";
import DateTimePicker from 'react-datetime-picker'
import Select from 'react-select';
import RentCourts from "./RentCourts";

 export const FilterModal  = (props) => {

    const [selectedOption, setSelectedOption] = useState(null)
     const [value1,setValue1] = useState(null)
         const [value2,setValue2] = useState(null)
     const options = [
         {value: null, label: '----------------------------' },
         { value: 'Football', label: 'Football' },
         { value: 'Basketball', label: 'Basketball' },
         { value: 'Tennis', label: 'Tennis' },
         { value: 'Paddle', label: 'Paddle' },

     ];
    useEffect(()=>{
        if (selectedOption != null){
            props.changeSport(selectedOption.value)
        }
    },[selectedOption])
     useEffect(()=>{
         console.log(value1)
         if (value1 != null){
             props.changeStartDate(value1)
         }
     },[value1])
     useEffect(()=>{
         console.log(value2)
         if (value2 != null){
             props.changeEndDate(value2)
         }
     },[value2])
    return (
        <>
            <div className="btn rounded-pill btn-outline-success bg-primary pe-5" data-bs-toggle="modal" data-bs-target="#new-edit-modal" >
                <IoMdColorFilter/>
            </div>
            <div className="modal fade" id="new-edit-modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content text-center">
                        <div className="modal-header text-success ">
                            <h4 className="modal-title">FILTERS</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <label className="m-2"> Sport </label>
                            <div className="my-3">
                                <Select className="form-select" aria-label="Default select example"  options={options}  value={selectedOption} onChange={setSelectedOption}/>

                            </div>
                            <div className="text-success bg-white p-2">
                                <div className="form-label">INITIAL TIME</div>
                                <DateTimePicker onChange={setValue1} value={value1}/>
                                <div className="form-label">FINAL TIME</div>
                                <DateTimePicker onChange={setValue2} value={value2} minDate={value1} />
                            </div>
                            <label> Hourly price </label>
                            <input type="number" className="form-control"  onChange={(e)=>props.changePrice(parseInt(e.target.value))}/>
                            <label> Location </label>
                            <div></div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>{props.toggleRefresh()}}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default FilterModal;

