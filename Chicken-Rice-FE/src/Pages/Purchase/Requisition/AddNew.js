import { Modal } from "react-bootstrap";

export default function AddNew({show,setShow}) {
    return (
        <Modal size="xl" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Empolyee</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Requester Name</label>
                            <input type="text" class="form-control" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Requester Code</label>
                            <input type="text" class="form-control" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Billing Address</label>
                           <textarea name="" id="" cols="30" rows="10" class="form-control" style={{height: "70px !important"}}></textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Shipping Address</label>
                           <textarea name="" id="" cols="30" rows="10" class="form-control" style={{height: "70px !important"}}></textarea>
                        </div>
                        <input type="checkbox"/>
                        <label for="">Check if Billing address is the shipping address</label>
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Requester Reference</label>
                            <input type="text" class="form-control" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Required Delivery Date</label>
                            <input type="date" class="form-control" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label for="">Reason For Purchase</label>
                            <textarea name="" id="" cols="30" rows="10"  class="form-control" style={{height: "70px !important"}}></textarea>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="table-wrapper">
                            <div class="table-title">
                                <div class="row">
                                    <div class="col-sm-6"><h2>Order Lines</h2></div>
                                    <div class="col-sm-6">
                                        <button type="button" class="btn btn-info add-new"><i class="fa fa-plus"></i> Add Row</button>
                                       
                                    </div>
                                </div>
                            </div>
                            <table class="table table2 table-bordered w-100 display dt-responsive table-responsive">
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Product</th>
                                        <th>Description</th>
                                        <th>SKU</th>
                                        <th>Quantity</th>
                                        <th>Cost Price</th>
                                        <th>Gross Amount</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <a class="add" title="Add" data-toggle="tooltip"><i class=" ri-save-2-line"></i></a>
                                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="ri-pencil-line"></i></a>
                                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="ri-delete-bin-line"></i></a>
                                        </td>
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
