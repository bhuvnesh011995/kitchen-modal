import { Modal } from "react-bootstrap";

export default function AddNewProject({show,setShow}) {
    return (
        <Modal size="xl" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add A New Expense</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Purchaser Invoice Number</label>
                            <input type="text" class="form-control" placeholder=""/>                        
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Supplier List</label>
                           <select name="" id="" class="form-select select2">
                            <option value="">Supplier List 1</option>
                            <option value="">Supplier List 2</option>
                           </select>
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
                            <select name="" id="" class="form-select select2">
                                <option value="">Category 1</option>
                                <option value="">Category 2</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Attach a Receipt</label>
                            <input type="file" class="form-control" placeholder=""/>
                        </div>
                    </div>
                   <h4>Project Section</h4>
                    <div class="col-md-12">
                        <div class="table-wrapper">
                          
                            <table class="table table2 table-bordered w-100 display dt-responsive table-responsive">
                                <thead>
                                    <tr>
                                        <th>SL NO.</th>
                                        <th>Quantity</th>
                                        <th>Amount</th>
                                        <th>Account Code</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                   
                                </tbody>
                            </table>
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
