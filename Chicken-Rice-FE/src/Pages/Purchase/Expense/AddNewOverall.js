import { Modal } from "react-bootstrap";

export default function AddNewOverall({show,setShow}) {
    return (
<Modal size="xl" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Empolyee</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <div class="row">
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label for="">Description</label>
                                    <textarea name="" id="" cols="30" rows="10" class="form-control" style={{height: "70px"}}></textarea>
                                </div>

                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="">Date</label>
                                    <input type="date" class="form-control" placeholder=""/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="">Amount</label>
                                    <input type="text" class="form-control" placeholder=""/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="">Category</label>
                                    <select name="" id="" class="form-select">
                                        <option value="">Category 1</option>
                                        <option value="">Category 2</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="">Client</label>
                                    <select name="" id="" class="form-select">
                                        <option value="">Client 1</option>
                                        <option value="">Client 2</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="">Project</label>
                                    <select name="" id="" class="form-select">
                                        <option value="">Project 1</option>
                                        <option value="">Project 2</option>
                                    </select>
                                </div>
                                <input type="checkbox"/>
                                <label for="">Billable</label>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="">Attach a Receipt</label>
                                    <input type="file" class="form-control" placeholder=""/>
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
