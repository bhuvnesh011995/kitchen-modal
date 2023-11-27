import { Modal } from "react-bootstrap";

export default function AddNew({show,setShow}) {
    return (
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Customer</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <div class="row">
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="">Customer Name</label>
                    <input type="text" class="form-control" placeholder=""/>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="">Customer Email</label>
                    <input type="email" class="form-control" placeholder=""/>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="">Customer Phone Number</label>
                    <input type="text" class="form-control" placeholder=""/>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="">Date</label>
                    <input type="date" class="form-control" placeholder=""/>
                </div>
            </div>
          </div>
          </Modal.Body>
          <div class="modal-footer text-end" style={{display: "inline-block"}}>
          <button type="button" class="btn btn-danger">Save</button>
        </div>
        </Modal>
    )
};
