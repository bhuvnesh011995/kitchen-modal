import { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import BASEURL from "../../../../Config/Config";
let initialState= {
    tableNumber:"",
    seatNumber:"",
    status:"",
}
export default function AddNewQrBuilder({show,setShow,getAllTable}) {

    const [table,setTable] = useState(initialState)
    async function handleSubmit(e){
        e.preventDefault();
try {
    let formData = new FormData()

        for(const key in table){
            formData.append(key,table[key])
        }
        console.log(formData)
        let response = await axios({
            url:BASEURL+"/table",
            method:"POST",
            data:formData,
            headers: { "Content-Type": "application/json" }
        })

        if(response.status===201){
            setShow(false)
            getAllTable()
        }else{

        }
} catch (error) {
    console.log(error)
}
        
    }

    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Table</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <form className="needs-validation" onSubmit={(e) => handleSubmit(e)}>
          <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label for="">Table Number</label>
                                <input  required type="number" className="form-control" placeholder="" onChange={e=>setTable(preVal=>({...preVal,tableNumber:e.target.value}))} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label for="">Seat Number</label>
                                <input  required type="number" className="form-control" placeholder="" onChange={e=>setTable(preVal=>({...preVal,seatNumber:e.target.value}))} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                            <div className="mb-3">
                                <label for=""> Status</label> 
                                <select
                   
              className="form-control form-select"
              value={table.status}
              onChange={e=>setTable(preVal=>({...preVal,status:e.target.value}))}
>
  <option value={""}>Select</option>
  <option value={"deActive"}>Deactive</option>
  <option value={"active"}>active</option>
</select>

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
