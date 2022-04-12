import React from 'react'

export const Test = () => {
    return(
        <div className="container">
            <div className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#new-modal">Open Modal</div>



            <div className="modal fade" id="new-modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <label> Email </label>
                            <input className="form-control"></input>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}