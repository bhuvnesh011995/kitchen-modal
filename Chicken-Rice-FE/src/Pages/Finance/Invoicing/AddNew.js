import { Modal } from "react-bootstrap";

export default function AddNew({show,setShow}) {
    return (
        <Modal size="xl" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Create Quotation</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <div class="row">
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Customer Name</label>
                            <input type="text" class="form-control" placeholder=""/>
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Quotation Type</label>
                          <select name="" id="" class="form-select">
                            <option value="">Type 1</option>
                            <option value="">Type 2</option>
                          </select>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Quotation Date</label>
                           <input type="date" class="form-control" placeholder=""/>
                        </div>
                       
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Person In Charge</label>
                            <input type="text" class="form-control" placeholder="" value="Tomojit" disabled/>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Lead Time</label>
                           <select name="" id="" class="form-select">
                            <option value="">TBC</option>
                            <option value="">N/A</option>
                            <option value="">Subject To Availability</option>
                           </select>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Contact Number</label>
                            <input type="text" class="form-control" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Email</label>
                            <input type="email" class="form-control" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Payment Terms</label>
                            <select name="" id="" class="form-select">
                                <option value="">COD</option>
                                <option value="">7 Days</option>
                                <option value="">14 Days</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="mb-3">
                            <label for="">Service Address</label>
                            <select name="" id="" class="form-control select2">
                                <option value="">Address 1</option>
                                <option value="">Address 2</option>
                                <option value="">Address 3</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="mb-3">
                            <label for="">Billing Address</label>                            
                            <textarea name="" id="" cols="30" rows="10" class="form-control" style={{height: "50px"}}></textarea>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Agreement</label>
                           <select name="" id="" class="form-select">
                            <option value="">AD HOC</option>
                            <option value="">Contract</option>
                           </select>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Prepared By</label>
                            <input type="text" class="form-control" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Asisted By</label>
                            <select name="" id="" class="form-select">
                                <option value="">Asisted 1</option>
                                <option value="">Asisted 2</option>
                            </select>
                        </div>
                    </div>
                    <h4>Order Lines</h4>

                    <table class="table table-bordered display table-responsive dt-responsive w-100">
                        <thead>
                            <tr>
                                <th>SL NO.</th>
                                <th>Type </th>
                                <th>Services</th>
                                <th>Description</th>
                                <th>Unit Price</th>                                                        
                                <th>Quantity</th>
                                <th>Subtotal</th>
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
                                
                            </tr>
                           
                        </tbody>
                    </table>

                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Attention to</label>
                            <input type="text" class="form-control" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Upload Files</label>
                            <input type="file" class="form-control" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Quotation Validity</label>
                            <select name="" id="" class="form-select">
                                <option value="">30 Days</option>
                                <option value="">60 Days</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label for="">Terms & Condition</label>
                            <textarea name="" id="" cols="30" rows="10" class="form-control" style={{height: "120px"}}></textarea>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="">Total</label>
                            <input type="text" class="form-control" placeholder=""/>
                        </div>
                        <div class="mb-2">
                            <label for="">Discount</label>
                            <input type="text" class="form-control" placeholder=""/>
                        </div>
                        <div class="mb-3 me-1">
                            <input type="checkbox"/>
                            <label for="">Taxes</label>
                        </div>
                        <div class="mb-3">
                            <label for="">Grand Total</label>
                            <input type="text" class="form-control" placeholder=""/>
                        </div>
                    </div>
                </div>
          </Modal.Body>
          <div class="modal-footer">
                <button type="button" class="btn btn-primary">Send By Mail</button>
                <button type="button" class="btn btn-danger" onClick={()=>setShow(false)}>Close</button>
                </div>
        </Modal>
    )
};
