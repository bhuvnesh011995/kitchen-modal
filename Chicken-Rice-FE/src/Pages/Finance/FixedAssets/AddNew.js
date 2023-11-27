import { Modal } from "react-bootstrap";
import BASEURL from "../../../Config/Config";
import axios from "axios";
import { useState } from "react";
let initialState= {
    category:"",
    name:"",
    code:"",
    working:"",
    company:"",
    assign:"",
    purchase:"",
    invoicenumber:"",
    Manufacturer:"",
    serialNumber:"",
    file:null
}
export default function AddNew({show,setShow}) {
    const [fixed,setFixed] = useState(initialState)
    async function handleSubmit(e) {
        e.preventDefault();
        try {
          let response = await axios({
            url: BASEURL + "/fixed",
            method: "POST",
            data: fixed,
            headers:{ "Content-Type": "multipart/form-data" }
                  });
      
          if (response.status === 201) {
            setShow(false);
          } else {
            console.error("Server returned a non-201 status code");
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      }
      
    return (
        <Modal size="xl" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Empolyee</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <div class="row">
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Category</label>
                            <select
        name="category"
        id="category"
        className="form-select select2"
        value={fixed.category}
        onChange={e => setFixed({ ...fixed, category: e.target.value })}
    >
        <option value="">Select a Category</option>
        <option value="Category 1">Category 1</option>
        <option value="Category 2">Category 2</option>
        <option value="Category 3">Category 3</option>
    </select>
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Asset Name</label>
                            <input type="text" class="form-control" placeholder=""  onChange={e=>setFixed(preVal=>({...preVal,name:e.target.value}))}/>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Company Asset Code</label>
                           <input type="text" class="form-control" placeholder=""  onChange={e=>setFixed(preVal=>({...preVal,code:e.target.value}))}   />
                        </div>
                       
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Is Working?</label>
                            <select name="working"  id="working" class="form-select" value={fixed.working} onChange={e=>setFixed(preVal=>({...preVal,working:e.target.value}))} >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Company</label  >
                            <select
        name="company"
        id="company"
        className="form-select select2"
        value={fixed.company}
        onChange={e => setFixed({ ...fixed, company: e.target.value })}
    >
        <option value="">Select a Category</option>
        <option value="company 1">Category 1</option>
        <option value="company 2">Category 2</option>
        <option value="company 3">Category 3</option>
    </select>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Assign To</label>
                            <select
        name="assign"
        id="assign"
        className="form-select select2"
        value={fixed.assign}
        onChange={e => setFixed({ ...fixed, assign: e.target.value })}
    >
        <option value="">Select a Category</option>
        <option value="Employee 1">Employee 1</option>
        <option value="Employee 2">Employee 2</option>
        <option value="Employee 3">Employee 3</option>
    </select>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Purchase Date</label>
                            <input type="date" class="form-control" placeholder=""   onChange={e=>setFixed(preVal=>({...preVal,purchase:e.target.value}))} />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Invoice Number</label>
                           <input type="text" class="form-control" placeholder="" onChange={e=>setFixed(preVal=>({...preVal,invoiceNumber:e.target.value}))} />
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Manufacturer</label>
                            <input type="text" class="form-control" placeholder=""  onChange={e=>setFixed(preVal=>({...preVal,manufacturer:e.target.value}))} />
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Serial Number</label>
                            <input type="text" class="form-control" placeholder=""  onChange={e=>setFixed(preVal=>({...preVal,serialNumber:e.target.value}))} />
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Warrenty / AMC Date</label>
                            <input type="date" class="form-control" placeholder=""/>
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="">Asset Image</label>
                            <input type="file" class="form-control" placeholder=""  onChange={e=>setFixed(preVal=>({...preVal,file:e.target.files[0]}))}/>
                        </div>
                    </div>
                    
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label for="">Asset Note</label>
                            <textarea name="" id="" cols="30" rows="10" style={{height: "70px"}} class="form-control" onChange={e=>setFixed(preVal=>({...preVal,note:e.target.value}))} ></textarea>
                        </div>
                    </div>    
                </div>
          </Modal.Body>
          <div class="modal-footer">
                <button type="button" class="btn btn-primary"   onClick={handleSubmit} >Send By Mail</button>
                <button type="button" class="btn btn-danger" onClick={()=>setShow(false)}>Close</button>
                </div>
        </Modal>
    )
};
