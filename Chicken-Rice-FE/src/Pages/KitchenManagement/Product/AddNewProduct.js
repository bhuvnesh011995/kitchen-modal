import { useState } from "react";
import { Modal } from "react-bootstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import BASEURL from "../../../Config/Config";
import { getCategories } from "../../../utility/recipe/recipe";
import { useEffect } from "react";


let initialState= {

    productName: "",
    category: "",
    ingredients: "",
    defaultPrice:"",
     file: null
}

export default function AddNewProduct({show,setShow,getAllProduct}) {
    const [product,setProduct] = useState(initialState)
    const [categories,setCategories] = useState([])
  console.log("ppppppp",product)

  async function handleSubmit(e){
    e.preventDefault();
try {
let formData = new FormData()

    for(const key in product){
        formData.append(key,product[key])
    }
    console.log(formData)
    let response = await axios({
        url:BASEURL+"/product",
        method:"POST",
        data:formData,
        headers:{ "Content-Type": "multipart/form-data" }
    })

    if(response.status===201){
        setShow(false)
        getAllProduct()
    }else{

    }
} catch (error) {
console.log(error)
}
    
}
  
  const handleQuillChange = (content) => {
    setProduct({
      ...product,
      ingredients: content, 
    });
  };

    async function getAllCategory(){
        let res = await getCategories()
        if(res.status === 200) setCategories(res.data.categories)
        else setCategories([])
    }

    useEffect(()=>{
        getAllCategory()
    },[])

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

    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Product</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <form className="needs-validation" onSubmit={handleSubmit} >
          <div className="row">
                       
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="">Product Name</label> <span className="text-danger">*</span>
                                <input required type="text" className="form-control" placeholder=""   value={product.productName}  onChange={e=>setProduct(preVal=>({...preVal,productName:e.target.value}))}   />
                            </div>
                        </div> 
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="">Product Photo</label> <span className="text-danger">*</span>
                                <input  required onChange={e=>setProduct(preVal=>({...preVal,file:e.target.files[0]}))}  type="file" className="form-control" placeholder="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="">category</label> <span className="text-danger">*</span>
                                <select required
                value={product.category}
                onChange={(e)=>setProduct(preVal=>({...preVal,category:e.target.value}))}
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
                       
                   
                
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label  for=""> Price</label> 
                                <input  type="number" className="form-control" placeholder=""   value={product.defaultPrice}  onChange={e=>setProduct(preVal=>({...preVal,defaultPrice:e.target.value}))} />
                            </div>
                        </div>
                    
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="">Description</label> <span className="text-danger">*</span>
                                <textarea  name="" id="" class="form-control" placeholder="" required
                                    style={{height: "165px"}}  value={product.description}  onChange={e=>setProduct(preVal=>({...preVal,description:e.target.value}))} ></textarea>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3" >
                                <label for="">Ingredients</label> <span className="text-danger">*</span>
                                <ReactQuill 
  theme="snow"
  value={product.ingredients} 
  onChange={handleQuillChange}
  modules={modules}
  style={{ width: '100%',display:'flex',flexDirection:'column',height:'170px' }}
/>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-end " style={{display:'flex'}}>
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
