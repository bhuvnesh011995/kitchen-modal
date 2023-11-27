import { Modal } from "react-bootstrap";

export default function AddNew({show,setShow}) {
    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Menu</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <div class="row">
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
                    <label for="">Product Image</label>
                    <input type="file" name="" id="" class="form-control" placeholder=""/>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="">Product Name</label>
                    <input type="text" class="form-control" placeholder=""/>
                  
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="">Price</label>
                   <input type="text" class="form-control" placeholder=""/>
                </div>
            </div>
            <div class="col-md-12">
                <div class="mb-3">
                    <label for="">Description</label>
                    <textarea name="" id="" cols="30" rows="10" class="form-control" style={{height: "70px"}}></textarea>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="">Plates</label>
                    <input type="text" class="form-control" placeholder=""/>
                </div>
            </div>
          </div>
          </Modal.Body>
          <div class="modal-footer">
          <button type="button" class="btn btn-danger">Save</button>
        </div>
        </Modal>
    )
};
