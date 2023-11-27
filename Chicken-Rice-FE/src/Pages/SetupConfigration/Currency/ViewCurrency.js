import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function ViewCurrency({show,setShow,selectedCurrency}) {
    const [currency,setCurrency] =useState({...selectedCurrency})

        
    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Addons</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <form className="needs-validation" >
          <div className="row">
        
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for=""> Name</label>
                                <input  required  type="text" className="form-control" placeholder="" value={currency.name}/>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for=""> Symbol</label>
                                <input  required  type="text" className="form-control" placeholder="" value={currency.symbol} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for=""> Code</label>
                                <input  required  type="text" className="form-control" placeholder="" value={currency.code} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for=""> Exchange Rate</label>
                                <input  required  type="text" className="form-control" placeholder="" value={currency.exchangeRate} />
                            </div>
                        </div>
                        
                      </div>
                    <div className="modal-footer d-flex justify-content-end">
                    <button onClick={()=>setShow(false)} type="button" className="btn btn-danger">
                        Close
                    </button>
                    <button type="submit" className="btn btn-primary" >Save</button>
                 
                </div>
                </form>
          </Modal.Body>
        
        </Modal>
    )
};
