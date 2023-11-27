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
                            <label for="">Project</label>
                            <select class="form-control select2">
                                <option value="">Project 1</option>
                                <option value="">Project 2</option>
                                </select>                           
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Notes</label>
                            <textarea name="" id="" cols="30" rows="3" class="form-control" style={{height: "70px !important"}}></textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Supplier</label>
                            <select class="form-control select2">
                                <option value="">Supplier 1</option>
                                <option value="">Supplier 2</option>
                                </select> 
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Site Representative</label>
                            <select class="form-control select2">
                                <option value="">ABC PVT LTD</option>
                                <option value="">Xyz Pte LTD</option>
                                </select> 
                        </div>
                        
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">ATTN</label>
                            <input type="text" class="form-control" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Address Line 1</label>
                            <input type="text" class="form-control" placeholder=""/>
                        </div>
                        <div class="mb-3">
                            <label for="">Address Line 2</label>
                            <input type="text" class="form-control" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Country</label>
                            <select class="form-control select2">
                                <option value="">Indian</option>
                                <option value="">Singapore</option>
                            </select> 
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="mb-3">
                                    <label for="">City</label>
                                    <input type="text" class="form-control" placeholder=""/>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mb-3">
                                    <label for="">State /  Province</label>
                                    <input type="text" class="form-control" placeholder=""/>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mb-3">
                                    <label for="">Zip Code</label>
                                    <input type="text" class="form-control" placeholder=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Payment Type</label>
                            <select class="form-control select2">
                                <option value="">Cash </option>
                                <option value="">Card</option>

                            </select> 
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
