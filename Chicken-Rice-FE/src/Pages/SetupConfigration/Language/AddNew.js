import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import BASEURL from "../../../Config/Config";
import axios from "axios";
let initialState= {
    name:"",
    code:"",
}

export default function AddNew({show,setShow,addNew,data,setData,update}) {

  const [language,setLanguage] =useState(initialState)
  const [ready,setReady] = useState(false)
  useEffect(()=>{
if(ready && data) setLanguage(data)
else setReady(true)
return ()=>{

if(ready) setData(null)
}
  },[ready])
       
    async function handleSubmit(e){
        e.preventDefault();
    try {
        if(data){
            update(data._id,language)
        }else{
            addNew(language)
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
          <form className="needs-validation"  onSubmit={handleSubmit} >
          <div className="row">
            <div className="col-md-6">
                <div className="mb-3">
                    <label for=""> Name</label>
                    <input value={language.name} type="text" className="form-control" placeholder=""   onChange={e=>setLanguage(preVal=>({...preVal,name:e.target.value}))} />
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label for="">Code</label>
                    <input value={language.code} type="text" className="form-control" placeholder=""   onChange={e=>setLanguage(preVal=>({...preVal,code:e.target.value}))} />
                </div>
            </div>
                </div>
            <div className="modal-footer d-flex justify-content-end">
                <button onClick={()=>setShow(false)} type="button" className="btn btn-danger">Close</button>
                <button type="submit" className="btn btn-primary" >Save</button>
            </div>
                </form>
          </Modal.Body>
        
        </Modal>
    )
};
