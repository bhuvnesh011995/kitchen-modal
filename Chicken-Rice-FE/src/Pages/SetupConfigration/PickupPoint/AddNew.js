import React from "react";
import { Modal } from "react-bootstrap";



export default function AddNew({show,setShow,}) {

        
    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Pickup Points</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <form className="needs-validation" >
          <div className="row">
        
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label for=""> Name</label>
                                <input  required  type="text" className="form-control" placeholder="" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label for="">Location</label>
                                <textarea  name="" id="" cols="30" rows="10" class="form-control" placeholder="" required
                                    style={{height: "80px"}}  ></textarea>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label for=""> Phone</label>
                                <input  required  type="text" className="form-control" placeholder="" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                            <label for=""> PickPoint status</label>
                            <input type="checkbox" id="switch0" data-switch="none" />
              <label htmlFor="switch0" data-on-label="" data-off-label=""></label>
                            </div>
                        </div>
                        
                        <div class="col-md-12 col-sm-12 mb-2">
                            <div class="form-group">
                                <label class="input-label">Pickup Point Status</label>
                               <select name="" class="form-select" id="">
                                <option value="0">-- select --</option>
                                <option value="1">test 1</option>
                                <option value="2">test 2</option>
                               </select>
                               
                            </div>

                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-end">
                    <button onClick={()=>setShow(false)} type="button" className="btn btn-danger">
                        Close
                    </button>
                    <button type="submit" className="btn btn-primary" >Save</button>
                 
                </div>
                </form>
          </Modal.Body>
        
        </Modal>
    )
};
