
import { Modal } from "react-bootstrap"
import "./table.css"


export default function AddNew({show,setShow}) {
    return (
        <Modal size="xl" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>New Sales Order</Modal.Title>
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
                            <label for="">Customer ID</label>
                            <input type="text" class="form-control" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label for="">Billing Address</label>
                            <textarea name="" id="" cols="30" rows="10" class="form-control" style={{height: "70px"}}></textarea>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-1">
                            <label for="">Shipping Address</label>
                            <textarea name="" id="" cols="30" rows="10" class="form-control" style={{height: "70px"}}></textarea>
                        </div>
                        <div class="mb-3">
                            <input type="checkbox"/>
                            <label for="">Check if Billing address is the Shipping address</label>
                        </div>
                       
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Payment Types</label>
                            <select name="" id="" class="form-select select2">
                                <option value="">COD</option>
                                <option value="">Paynow</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="">Payment Terms</label>
                        <select name="" id="" class="form-select select2">Payment Terms
                            <option value="">10 Days</option>
                            <option value="">20 Days</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Order Date</label>
                            <input type="date" class="form-control" placeholder=""/>
                        </div>                     
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Due Date</label>
                            <input type="date" class="form-control" placeholder=""/>
                        </div>                     
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Sales Person</label>
                            <input type="text" class="form-control" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Remarks</label>
                            <textarea name="" id="" cols="30" rows="10" class="form-control" style={{height: "50px"}}></textarea>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Terms & Condition</label>
                            <textarea name="" id="" cols="30" rows="10" class="form-control" style={{height: "70px"}}></textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <input type="checkbox"/>
                            <label for="">Tax Inclusive</label>
                            <input type="text" class="form-control" placeholder=""/>
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
                                        <th>Product</th>
                                        <th>Product ID</th>
                                        <th>Description</th>
                                        <th>Category</th>
                                        <th>Variant</th>
                                        <th>Quantity</th>
                                        <th>Unit Price</th>
                                        <th>Gross Amount</th>
                                        <th>Actions</th>
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
                        <div class="col-md-7"></div>
                        <div class="col-md-5">
                            <div class="mb-1">
                                <label for="">Subtotal</label>
                                <input type="text" class="form-control" placeholder=""/>
                            </div>
                            <div class="mb-1">
                                <label for="">GST</label>
                                <input type="text" class="form-control" placeholder=""/>
                            </div>
                            <div class="mb-1">
                                <label for="">Total Amount</label>
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
