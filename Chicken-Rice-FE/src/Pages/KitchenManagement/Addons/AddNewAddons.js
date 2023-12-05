import { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import BASEURL from "../../../Config/Config";
let initialState= {
    addonsName:"",
}


export default function AddNewAddons({show,setShow }) {
    const [addons,setAddons] = useState(initialState)

    async function handleSubmit(e){
        e.preventDefault();
    try {
    let formData = new FormData()
    
        for(const key in addons){
            formData.append(key,addons[key])
        }
        console.log(formData)
        let response = await axios({
            url:BASEURL+"/addons",
            method:"POST",
            data:formData,
            headers: { "Content-Type": "application/json" }
        })
    
        if(response.status===201){
            setShow(false)
        
        }else{
    
        }
    } catch (error) {
    console.log(error)
    }
        
    }
    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Addons</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <form className="needs-validation" onSubmit={(e) => handleSubmit(e)}>
          <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label for="">Addons Name</label> <span className="text-danger">*</span>
                                <input  required   onChange={e=>setAddons  (preVal=>({...preVal,addonsName:e.target.value}))} type="text" className="form-control" placeholder="" />
                            </div>
                        </div>
                     
                    </div>
                    <div className="modal-footer d-flex justify-content-end">
                    <button type="button" className="btn btn-danger" onClick={() => setShow(false)}>
    Close
  </button>
                    <button type="submit" className="btn btn-primary">
    Save
  </button>
  
  
</div>
                </form>
          </Modal.Body>
         
        </Modal>
    )
};
