import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import BASEURL from "../../../Config/Config";
import axios from "axios";
let initialState= {
    name:"",
    code:"",
}

export default function AddNew({show,setShow,getLanguage}) {

  const [language,setLanguage] =useState(initialState)
       
    async function handleSubmit(e){
        e.preventDefault();
    try {
    let formData = new FormData()
    formData.append("name", language.name);
    formData.append("code", language.code);

        console.log(formData)
        let response = await axios({
            url:BASEURL+"/language",
            method:"POST",
            data:formData,
            headers: { "Content-Type": "application/json" }
        })
    
        if(response.status===201){
            setShow(false)
            getLanguage()
        }else{
    
        }
    } catch (error) {
    console.log(error)
    }
        
}

    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Language</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <form className="needs-validation"  onSubmit={(e) => handleSubmit(e)} >
          <div className="row">
        
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for=""> Name</label>
                                <input    type="text" className="form-control" placeholder=""   onChange={e=>setLanguage(preVal=>({...preVal,name:e.target.value}))} />
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="">Code</label>
                                <input    type="text" className="form-control" placeholder=""   onChange={e=>setLanguage(preVal=>({...preVal,code:e.target.value}))} />

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
