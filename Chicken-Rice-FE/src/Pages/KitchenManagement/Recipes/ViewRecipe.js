import { useState } from "react";
import { Modal } from "react-bootstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import BASEURL from "../../../Config/Config";
import { getCategories } from "../../../utility/recipe/recipe";
import { useEffect } from "react";
import { getaddons } from "../../../utility/Addons/addons";
import Select from 'react-select'


export default function ViewRecipe({show,setShow , selectedProduct})
 {
    const [selectedImage, setSelectedImage] = useState(BASEURL + "/files/" + selectedProduct.productFile);
    const [product,setProduct] = useState({...selectedProduct})
    const [categories,setCategories] = useState([])

  console.log('Produce',product)

    const [addons,setAddons] = useState([])
    async function getAllAddons(){
        let res =await getaddons()
        if(res.status === 200) setAddons(res.data.addons)
        else setAddons([])
    }
    useEffect(()=>{
      getAllAddons()
  },[])

      const addonsOptions = addons.map((ele, i) => ({
        value:ele.addonsName, 
        label: ele.addonsName,
      }));

      const handleAddons = (selectedOptions) => {  
        const selectAddons = selectedOptions.map((option) => option.value);
        setProduct({
          ...product,
          addonsName: selectAddons, 
        });
      };
  
    



  const modules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image', 'video'],
        [{ 'color': [] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }], // Added array of header options
        ['clean'],
      ],
    },
  };

  async function getAllCategory() {
    let res = await getCategories();
    if (res.status === 200) {
      setCategories(res.data.categories);
      if (product.category) {
      }
    } else {
      setCategories([]);
    }
  }

 
  useEffect(()=>{
    getAllCategory()
},[])

    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Details Recipe</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <form className="needs-validation">
          <div className="row">
                      
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="">Product Name</label>
                                <input        disabled={selectedProduct.recipeName}   type="text" className="form-control" placeholder=""  value={selectedProduct.recipeName}   />
                            </div>
                        </div> 
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label for="">Product Photo</label>
                                <input type="file"        disabled={product.productFile}  className="form-control" placeholder="" />
                            </div>
                        </div>     <span className="col-md-1 ">
            <img
  src={selectedImage}
  width="60"
  height="60"
  style={{marginTop:'8px'}}
/>
            </span>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label for="">category</label>
                                <select
  required
  value={product.category}
  id="category"
  className="form-control select2"
  disabled={categories.length} 
>
  <option value="">Select</option>
  {categories.map((ele, i) => (
    <option key={i} value={ele._id}>
      {ele.name}
    </option>
  ))}
</select>
                            </div>
                        </div>
                       
                        <div className="col-md-4">
                            <div className="mb-3">

                                <label for="">addons name</label><span className="text-danger">*</span>
                                <Select
                  required
                  isMulti
                  disabled={product.addonsName}
                  isDisabled={product.addonsName}
                  value={product.addonsName
                    ? addonsOptions.filter((option) => product.addonsName.includes(option.value))
                    : []}
                  options={addonsOptions}
                />
      
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="mb-3">
                                <label  for=""> Price</label>
                                <input required type="text" className="form-control" placeholder=""    disabled={selectedProduct.defaultPrice} value={selectedProduct.defaultPrice}   />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="">Description</label>
                                <textarea  name="" id="" cols="30" rows="10" class="form-control" placeholder="" required value={selectedProduct.description} disabled={product.description}
                                    style={{height: "165px"}}   ></textarea>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="">Ingredients</label>
                                <ReactQuill readOnly={product.ingredients}
  theme="snow"
  value={product.ingredients} 
  modules={modules}
  style={{ height: '100px', width: '100%' }}
/>

                            </div>
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-end">
                    <button type="button" className="btn btn-danger" onClick={() => setShow(false)}>
    Close
  </button>
    
</div>
                </form>
          </Modal.Body>
        
        </Modal>
    )
};
