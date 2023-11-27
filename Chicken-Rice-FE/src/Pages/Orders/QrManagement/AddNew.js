import { Modal } from "react-bootstrap";

export default function AddNew({show,setShow}) {
    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Table</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <div class="row">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="">Table Number</label>
                                <input type="text" class="form-control" placeholder=""/>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="">Table Seat Number</label>
                                <input type="text" class="form-control" placeholder=""/>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label for="">QR Code</label> <br/>
                               <button class="btn btn-primary">Generate</button>
                            </div>
                        </div>
                    </div>
          </Modal.Body>
          <div class="modal-footer">
                <button type="button" class="btn btn-primary">Save</button>
                <button type="button" class="btn btn-danger" onClick={()=>setShow(false)}>Close</button>
                </div>
        </Modal>
    )
};
