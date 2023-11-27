import { useState } from "react";
import { Modal } from "react-bootstrap";
import BASEURL from "../../../Config/Config";
export default function ViewCategory({show,setShow,selectedCategory}) {
    const categoryName = selectedCategory.catagoryName || "";
    

   console.log("SelectedCategory",selectedCategory)
    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Category</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <form className="needs-validation">
          <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Category Name</label>
                                <input  type="text" className="form-control" placeholder=""   id="name"   value={categoryName}/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label for="">Category Photo</label> <span className="text-danger" style={{fontSize:'14px'}}>* Radio(1.1)</span>      
                            </div>
                            <img src={BASEURL + "/files/" + selectedCategory.catagoryPhoto} alt="Category" width="100" height="70" />
                         </div>
                     </div>
                    <div className="modal-footer d-flex justify-content-end">
                        
  <button type="button" className="btn btn-danger" onClick={() => setShow(false)}>
    Close
  </button>
</div>

                    </form>
          </Modal.Body>
    
        </Modal>
    )
};
