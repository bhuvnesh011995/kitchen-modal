import { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import BASEURL from "../../../Config/Config";
let initialState= {
    name:"",
   
    file:null
}
export default function AddNewCatagory({getallCategory,show,setShow}) {
    const [category,setCategory] = useState(initialState)
    const [selectedImage, setSelectedImage] = useState(null);

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

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setCategory(preVal=>({...preVal,file:e.target.files[0]}))
        
        if (file) {
          const reader = new FileReader();
    
          reader.onload = (e) => {
            const base64URL = e.target.result;
            setSelectedImage(base64URL);
          };
              reader.readAsDataURL(file);
        }
      };

      
    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Category</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <form className="needs-validation" onSubmit={(e) => handleSubmit(e)}>
          <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Category Name</label><span className="text-danger">*</span>
                                <input onChange={e=>setCategory(preVal=>({...preVal,name:e.target.value}))}  type="text" className="form-control" placeholder=""   id="name" required
/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label for="">Category Photo</label> <span className="text-danger">*</span>
                                <input
        onChange={handleImageChange}
        type="file"
        className="form-control"
        placeholder=""
        required
      />
      {selectedImage && (
        <div>
          <p>Selected Image:</p>
          <img src={selectedImage} alt="Avatar" width="100" height="100" />
        </div>
      )}
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
