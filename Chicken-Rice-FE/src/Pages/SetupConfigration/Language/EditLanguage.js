import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import BASEURL from "../../../Config/Config";
import axios from "axios";

export default function EditLanguage({show,setShow,selectedLanguage}) {
    
  const [language,setLanguage] =useState({...selectedLanguage})

  async function handleSubmit(id, language) {
    try {
      console.log(BASEURL + "/language/" + id);
      console.log(id);
    
      let response = await axios.put(BASEURL + "/language/" + id, language);
       if(response.status===201){
        setShow(false)
       
    }else{

    }
    } catch (error) {
      console.log(error);
    }
  }
   
    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Language</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <form className="needs-validation"  onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(selectedLanguage.id, language);
          }}>
          <div className="row">
        
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for=""> Name</label>
                                <input    type="text" className="form-control" placeholder=""  value={language.name}  onChange={e=>setLanguage(preVal=>({...preVal,name:e.target.value}))} />
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="">Code</label>
                                <input    type="text" className="form-control" placeholder=""  value={language.code}  onChange={e=>setLanguage(preVal=>({...preVal,code:e.target.value}))} />

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
