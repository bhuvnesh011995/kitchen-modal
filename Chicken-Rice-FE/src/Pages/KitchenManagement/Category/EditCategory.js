import { useState } from "react";
import { Modal } from "react-bootstrap";
import BASEURL from "../../../Config/Config";
import axios from "axios";

export default function EditCategory({ show, setShow, editCategory,getallCategory }) {
  const [newData, setNewData] = useState({ ...editCategory });
  const [selectedImage, setSelectedImage] = useState(BASEURL + "/files/" + editCategory.catagoryPhoto);

  async function handleSubmit(id, newData) {
    try {
      console.log(BASEURL + "/category/" + id);
      const dataToSend = new FormData();
      dataToSend.append("name", newData.catagoryName);
      dataToSend.append("file", newData.catagoryPhoto);
      let response = await axios.put(BASEURL + "/category/" + id, dataToSend);
       if(response.status===201){
        setShow(false)
        getallCategory()
    }else{

    }
    } catch (error) {
      console.log(error);
    }
  }

  const handleNameChange = (e) => {
    setNewData({ ...newData, catagoryName: e.target.value }); 
  };
  const handleImageChange = (e) => {
    setNewData({ ...newData, catagoryPhoto: e.target.files[0] });
    setSelectedImage(URL.createObjectURL(e.target.files[0])); 
  };
  

  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Update Category</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form
          className="needs-validation"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(editCategory.id, newData);
          }}
        >
          <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Category Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  id="name"
                  value={newData.catagoryName} 
                  onChange={handleNameChange}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="image">Category Photo</label> <span className="text-danger" style={{ fontSize: "14px" }}>
                  * Radio(1.1)
                </span>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  onChange={handleImageChange}
                />
               
              </div>
              <img
  src={selectedImage}
  alt="Category"
  width="100"
  height="70"
/>
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
  );
}
