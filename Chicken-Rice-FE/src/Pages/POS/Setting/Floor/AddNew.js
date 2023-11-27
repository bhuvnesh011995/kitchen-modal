import { Modal } from "react-bootstrap";

export default function AddNew({show,setShow}) {
    return(
        <Modal size="sm" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Floor</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <div class="row">
            <div class="col-md-12">
                <div class="mb-3">
                    <label for="">Floor Number</label>
                    <input type="text" class="form-control" placeholder=""/>
                </div>
            </div>
            <div class="col-md-12">
                <div class="mb-3">
                    <label for="">Table Capacity</label>
                    <input type="text" class="form-control" placeholder=""/>
                </div>
            </div>
            
          </div>
          </Modal.Body>
          <div class="modal-footer text-end" style={{display: "inline-block"}}>
          <button type="button" class="btn btn-danger">Add</button>
        </div>
        </Modal>
    )
};
