import { useState } from "react";
import { Modal } from "react-bootstrap";

import axios from "axios";
import BASEURL from "../../../../Config/Config";

let initialState= {
    name:"",
    status:"",
    file:null
}
export default function AddNewCatagory({getallCategory,show,setShow}) {
    const [category,setCategory] = useState(initialState)

    async function handleSubmit(e){
        e.preventDefault();
try {
    let formData = new FormData()

        for(const key in category){
            formData.append(key,category[key])
        }
        console.log(formData)
        let response = await axios({
            url:BASEURL+"/category",
            method:"POST",
            data:formData,
            headers:{ "Content-Type": "multipart/form-data" }
        })

        if(response.status===201){
            setShow(false)
            getallCategory()
        }else{

        }
} catch (error) {
    console.log(error)
}
        
    }
    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Category</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="">Category Name</label>
                                <input onChange={e=>setCategory(preVal=>({...preVal,name:e.target.value}))} type="text" className="form-control" placeholder="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="">Category Photo</label>
                                <input onChange={e=>setCategory(preVal=>({...preVal,file:e.target.files[0]}))} type="file" className="form-control" placeholder="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="">Status</label>
                                <select defaultValue={category.status} onChange={e=>setCategory(preVal=>({...preVal,status:e.target.value}))} className="form-control form-select">
                                    <option value={""}>Select</option>
                                    <option value="Success">Success</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Cancel">Cancel</option>
                                </select>
                            </div>
                        </div>
                    </div>
          </Modal.Body>
          <div className="modal-footer">
                    <button onClick={handleSubmit} type="button" className="btn btn-primary">Save</button>
                    <button onClick={()=>setShow(false)} type="button" className="btn btn-danger">
                        Close
                    </button>
                </div>
        </Modal>
    )
};
