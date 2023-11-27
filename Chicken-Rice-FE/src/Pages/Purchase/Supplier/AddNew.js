import { Modal } from "react-bootstrap";

export default function AddNew({show,setShow}) {
    return (
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Supplier</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Supplier Name</label>
                            <input type="text" class="form-control" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Supplier Contact Information</label>
                            <input type="text" class="form-control" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Supplier Address</label>
                           <textarea name="" id="" cols="30" rows="2" class="form-control" style={{height: "50px !important"}}></textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Supplier Type</label>
                            <select class="form-control select2">
                                <option value="">Supplier Type 1</option>
                                <option value="">Supplier Type 2</option>
                                </select> 
                        </div>
                       
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Business Reports & Documents</label>
                            <input type="file" class="form-control" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Financial & Credit Risk Data</label>
                            <input type="text" class="form-control" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Supplier Performance Ratings</label>
                            <input type="text" class="form-control" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Payment History & Records</label>
                            <input type="text" class="form-control" placeholder=""/>
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
