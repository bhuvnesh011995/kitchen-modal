import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function ViewAddons({show,setShow,selectedAddons }) {
   
    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>View Addons</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <form className="needs-validation">
          <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label for="">Addons Name</label> <span className="text-danger">*</span>
                                <input  required  value={selectedAddons.addonsName}  type="text" className="form-control" placeholder="" />
                            </div>
                        </div>
                     
                    </div>
                    <div className="modal-footer d-flex justify-content-end">
                    <button type="button" className="btn btn-danger" onClick={() => setShow(false)}>
    Close
  </button>
                    <button type="submit" className="btn btn-primary">
    Save
  </button>
  
  
</div>
                </form>
          </Modal.Body>
         
        </Modal>
    )
};
