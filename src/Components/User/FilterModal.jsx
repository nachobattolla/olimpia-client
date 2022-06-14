import React, {useCallback, useEffect, useState} from 'react';
import {post} from "../../utils/http";
import {IoMdColorFilter} from "react-icons/io";
import DateTimePicker from 'react-datetime-picker'


const FilterModal  = () => {

    const [value, onChange] = useState(new Date());



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
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>--------------------------------------------------------------------------</option>
                                    <option value="Football">Football</option>
                                    <option value="Basketball">Basketball</option>
                                    <option value="Tennis">Tennis</option>
                                    <option value="Paddle">Paddle</option>
                                </select>
                            </div>
                            <div className="text-success bg-white p-2">
                                <div className="form-label">INITIAL TIME</div>
                                <DateTimePicker onChange={onChange} value={value} />
                                <div className="form-label">FINAL TIME</div>
                                <DateTimePicker onChange={onChange} value={value} />
                            </div>
                            <label> Hourly price </label>
                            <input type="number" className="form-control" />
                            <label> Location </label>
                            <div></div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default FilterModal;