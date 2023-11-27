import React from "react";
import { Modal } from "react-bootstrap";



export default function ViewTaxes({show,setShow,}) {

        
    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Addons</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <form className="needs-validation" >
          <div className="row">
        
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label for=""> Name</label>
                                <input  required  type="text" className="form-control" placeholder="" />
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
