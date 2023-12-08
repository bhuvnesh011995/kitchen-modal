import { useState } from "react";
import { Modal } from "react-bootstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getCategories } from "../../../utility/recipe/recipe";
import axios from "axios";
import BASEURL from "../../../Config/Config";
import { useEffect } from "react";
import { getaddons } from "../../../utility/Addons/addons";
import ReactSelect from "react-select";
export default function EditRecipe({show,setShow , selectedProduct,getAllProduct})
 {
  const [selectedImage, setSelectedImage] = useState(BASEURL + "/files/" + selectedProduct.productFile);

const [categories,setCategories] = useState([])
const [product,setProduct] = useState({...selectedProduct})
const [addons,setAddons] = useState([])

console.log("selectedProduct",selectedProduct)

async function getAllAddons(){
    let res =await getaddons()
    if(res.status === 200) setAddons(res.data.addons)
    else setAddons([])
}
useEffect(()=>{
  getAllAddons()
},[])

const addonsOptions = addons.map((addon) => ({
  label: addon.addonsName,
  value: addon._id,
}));
  
const handleAddons = (selectedOptions) => {
  const selectAddons = selectedOptions.map((option) => option.value);
  console.log('selectAddons',selectAddons)
  setProduct({
    ...product,
    addonsName: selectAddons,
  });
};

 

const handleImageChange = (e) => {
  setProduct({ ...product, productFile: e.target.files[0] });
  setSelectedImage(URL.createObjectURL(e.target.files[0])); 
};

  console.log("ressstt",product)
  const modules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image', 'video'],
        [{ 'color': [] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }], 
        ['clean'],
      ],
    },
  };

  const handleQuillChange = (content) => {
    setProduct({
      ...product,
      ingredients: content, 
    });
  };
   
 


  async function handleSubmit(id, product) {
    
    try {
      const dataToSend = new FormData();
      dataToSend.append("file", product.productFile);
      dataToSend.append("category", product.category);
      dataToSend.append("recipeName", product.recipeName);
      dataToSend.append("defaultPrice", product.defaultPrice);
      dataToSend.append("description", product.description);
      dataToSend.append('addonsName', JSON.stringify(product.addonsName));


      dataToSend.append("ingredients", product.ingredients);

      let response = await axios.put(BASEURL + "/product/" + id, dataToSend);
       if(response.status===201){
        setShow(false)
        getAllProduct()
    }else{

    }
    } catch (error) {
      console.log(error);
    }
  }


 
 


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
            <Modal.Title>Add New Edit Recipe</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <form className="needs-validation"   onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(selectedProduct.id, product);
          }}>
          <div className="row">
                    
                        <div className="col-md-6">
                            <div className="mb-6">
                                <label for="">Recipe Name</label>
                                <input required type="text" className="form-control" placeholder=""  value={product.recipeName}   onChange={(e) => setProduct({ ...product, recipeName: e.target.value })}   />
                            </div>
                        </div> 
                        <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="image">Recipe Photo</label> 
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  onChange={handleImageChange}
                />
               
              </div>
            </div>
            <span className="col-md-1 ">
            <img
  src={selectedImage}
  width="50"
  height="50"
  style={{marginTop:'8px'}}
/>
            </span>

          
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label for="">category</label>
                                <select required
                value={product.category}
                onChange={(e) => { setProduct({...product , category:e.target.value})
                }}
                id="category"
                className="form-control select2"
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
                                <ReactSelect  required
      isMulti
      value={addonsOptions.filter((option) => product.addonsName.includes(option.value))}
      onChange={handleAddons}
      options={addonsOptions}
    />

      
                            </div>
                        </div>
                     
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label  for=""> Price</label>
                                <input  type="text" className="form-control" placeholder=""  value={product.defaultPrice}  onChange={(e) => setProduct({ ...product, defaultPrice: e.target.value })}    />
                            </div>
                        </div>
                    
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="">Description</label>
                                <textarea  name="" id="" cols="30" rows="10" class="form-control" placeholder="" value={Array.isArray(product.description) ? product.description.join('\n') : product.description}
  onChange={(e) => {
    const newValue = e.target.value.split('\n');
    setProduct((prevVal) => ({ ...prevVal, description: newValue }));
  }}
                                    style={{height: "165px"}}   ></textarea>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="">Ingredients</label>
                                <ReactQuill
  theme="snow"
  value={product.ingredients} 
  onChange={handleQuillChange}
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
  <button type="submit" className="btn btn-primary"> Save</button>
</div>
                </form>
          </Modal.Body>
        
        </Modal>
    )
};
