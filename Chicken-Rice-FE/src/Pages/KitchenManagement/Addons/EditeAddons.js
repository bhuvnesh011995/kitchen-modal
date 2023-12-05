import { useState } from "react";
import { Modal } from "react-bootstrap";
import BASEURL from "../../../Config/Config";
import axios from "axios";
export default function EditAddons({show,setShow,selectedData,getAllAddons }) {
  const [newData, setNewData] = useState({ ...selectedData });

  async function handleSubmit(id, newData) {
    try {
      console.log(BASEURL + "/addons/" + id);
    
      let response = await axios.put(BASEURL + "/addons/" + id, newData);
       if(response.status===201){
        setShow(false)
        getAllAddons()
    }else{

    }
    } catch (error) {
      console.log(error);
    }
  }


    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Addons</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <form className="needs-validation"  onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(selectedData.id, newData);
          }}>
          <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label for="">Addons Name</label>
                                <input type="text" className="form-control" placeholder="" value={newData.addonsName}   onChange={(e) => setNewData((prev) => ({ ...prev, addonsName: e.target.value }))} />
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
