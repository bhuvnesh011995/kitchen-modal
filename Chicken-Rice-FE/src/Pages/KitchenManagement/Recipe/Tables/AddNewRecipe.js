import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { addRecipe, getCategories } from "../../../../utility/recipe/recipe";
const initialState = {
    name:"",
    quantity:"",
    uom:"",
    cost:""
}            

const initialExtraCharge = {
    title:"",
    cost:""
}

const initialRecipeState = {
    category:"",
    name:"",
    description:"",
    totalcost:"",
    file:null,
}
export default function AddNewRecipe({getAllRecipe,show,setShow}) {
    const [ingradients,setIngradients] = useState([])
    const [ingradient,setIngradient] = useState(initialState)
    const [extracharges,setExtraCharges] = useState([])
    const [extraCharge,setExtraCharge] = useState(initialExtraCharge)
    const [recipe,setRecipe] = useState(initialRecipeState)
    const [categories,setCategories] = useState([])


    async function getAllCategory(){
        let res = await getCategories()

        if(res.status === 200) setCategories(res.data.categories)
        else setCategories([])
    }

    useEffect(()=>{
        getAllCategory()
    },[])

function handleClickAddingradient(e){
    e.preventDefault()

    if(!ingradient.name || !ingradient.quantity || !ingradient.uom || !ingradient.cost){
        return
    }else{
        setIngradients(preVAl=>([...preVAl,ingradient]))
        setIngradient(initialState)
        return
    }
}


function handleClickAddExtraCharges(e){
    e.preventDefault()

    if(!extraCharge.title) return
    setExtraCharges(preval=>([...preval,{title:extraCharge.title,cost:extraCharge.cost || 0}]))
    setExtraCharge(initialExtraCharge)
    return
}


async function handleSubmit(e){
    e.preventDefault()

    let res = await addRecipe({
        ...recipe,
        extracharges,
        ingradients,
    })

    if(res.status===201){
        setShow(false)
        getAllRecipe()
    }else{
        console.log(res.status)
    }
}



    return(
        <Modal size="xl" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Recipe</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <div class="row">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="">Recipe Name</label>
                                <input value={recipe.name} onChange={e=>setRecipe(preVal=>({...preVal,name:e.target.value}))} type="text" class="form-control" placeholder="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="">Category Photo</label>
                                <input onChange={e=>setRecipe(preVal=>({...preVal,file:e.target.files[0]}))} type="file" className="form-control" placeholder="" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="">Category</label>
                                <select value={recipe.category} onChange={e=>setRecipe(preVal=>({...preVal,category:e.target.value}))} name="" id="" class="form-control select2">
                                    <option value="">Select</option>
                                    {
                                        categories.map((ele,i)=>(
                                            <option key={i} value={ele._id}>{ele.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                     
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label for="">Description</label>
                                <textarea value={recipe.description} onChange={e=>setRecipe(preVal=>({...preVal,description:e.target.value}))} name="" id="" cols="30" rows="10" class="form-control" placeholder=""
                                    style={{height: "70px"}}></textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <div class="table-wrapper">
                                
                                    <div class="table-title">
                                        <div class="row">
                                            <div class="col-sm-8">
                                                <h2>Ingradients</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-2">
                                        <label>item</label>
                                        <input value={ingradient.name} class="form-control" onChange={e=>setIngradient(preVal=>({...preVal,name:e.target.value}))}></input>
                                    </div>
                                    <div className="col-md-2">
                                        <label>quantity</label>
                                        <input value={ingradient.quantity} class="form-control" onChange={e=>setIngradient(preVal=>({...preVal,quantity:e.target.value}))}></input>
                                    </div>
                                    <div className="col-md-2">
                                        <label>UOM</label>
                                        <select class="form-control" value={ingradient.uom} name="uom" onChange={e=>setIngradient(preVal=>({...preVal,uom:e.target.value}))}>
                                        <option value={""}>Select</option>
                                        <option value={"kg"}>kg</option>
                                        <option value={"g"}>g</option>
                                        <option value={"l"}>l</option>
                                        <option value={"ml"}>ml</option>
                                        <option value={"cl"}>cl</option>
                                        <option value={"piece"}>piece</option>
                                        </select>
                                        
                                    </div>
                                    <div className="col-md-2">
                                        <label>Cost</label>
                                        <input value={ingradient.cost} class="form-control" onChange={e=>setIngradient(preVal=>({...preVal,cost:e.target.value}))}></input>
                                    </div>
                                    <div className="col-md-2">
                                        <label></label>
                                        <button className="form-control mt-2 btn btn-primary" onClick={handleClickAddingradient}>Add</button>
                                    </div>
                                </div>
                                    {ingradients.length ? <table
                                        class="w-100">
                                        <thead>
                                            <tr>
                                                <th>SL NO</th>
                                                <th>Items</th>
                                                <th>Net Qty</th>
                                                <th>UOM</th>
                                                <th>Cost Price</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {ingradients.map((ele,i)=>(
                                                <tr key={i}>
                                                <td>{i+1}</td>
                                                <td>{ele.name}</td>
                                                <td>{ele.quantity}</td>
                                                <td>{ele.uom}</td>
                                                <td>{ele.cost}</td>
                                                <td>
                                                    <button index={i} onClick={(e)=>{
                                                        let arr = ingradients.filter((ele,i)=>e.target.getAttribute("index") != i)
                                                        
                                                        setIngradients(arr)
                                                    }} className="btn btn-bg-danger">delete</button>
                                                </td>
                                            </tr>
                                            ))}
                                        </tbody>
                                    </table>:null}
                                </div>
                                
                            </div>
                        </div>

                        <div class="col-md-4 mt-4">
                            <div class="mb-3">
                                <label for="">Total Price</label>
                                <input value={recipe.totalcost} onChange={e=>setRecipe(preVal=>({...preVal,totalcost:e.target.value}))} type="text" class="form-control" placeholder="" />
                            </div>
                        </div>

                        {/* <!-- <div class="col-md-4">
                            <div class="mb-1">
                                <label for="">Customization</label>
                                <input type="text" class="form-control" placeholder="">
                            </div>
                            <div class="mb-3">
                                <input type="checkbox" id="chkPassport" />
                                   Add Charges?
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="mb-3">
                                <div id="dvPassport" style="display: none;">
                                    <label for="">Charges</label>
                                    <input type="text" id="txtPassportNumber" class="form-control" placeholder=""/>
                                </div>

                            </div>
                        </div> --> */}
                        <div class="col-md-8">
                           <div class="row">
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <div class="mb-1">
                                            <label for="">Customization</label>
                                            <input value={extraCharge.title} onChange={e=>setExtraCharge(preVal=>({...preVal,title:e.target.value}))} type="text" class="form-control" placeholder="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <div class="mb-3">
                                            <label for="">Charges</label>
                                            <input value={extraCharge.cost} onChange={e=>setExtraCharge(preVal=>({...preVal,cost:e.target.value}))} type="text" id="yourText" class="form-control"
                                                placeholder=""   />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    {/* <!-- Repeater Remove Btn --> */}
                                    <div class="repeater-remove-btn mb-3 mt-3">
                                        <button onClick={handleClickAddExtraCharges} class="btn btn-primary">
                                            Add
                                        </button>
                                    </div>
                                </div>
                                {extracharges.length ? <table
                                        class="w-90 ms-5">
                                        <thead>
                                            <tr>
                                                <th>SL NO</th>
                                                <th>Title</th>
                                                <th>Charge</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {extracharges.map((ele,i)=>(
                                                <tr key={i}>
                                                <td>{i+1}</td>
                                                <td>{ele.title}</td>
                                                <td>{ele.cost}</td>
                                                <td>
                                                    <button index={i} onClick={(e)=>{
                                                        let arr = extracharges.filter((ele,i)=>e.target.getAttribute("index") != i)
                                                        
                                                        setExtraCharges(arr)
                                                    }} className="btn btn-bg-danger">Remove</button>
                                                </td>
                                            </tr>
                                            ))}
                                        </tbody>
                                    </table>:null}

                                        
                                
                            </div>
                        </div>
                    </div>
          </Modal.Body>
          <div class="modal-footer">
                    <button onClick={handleSubmit} type="button" class="btn btn-primary">Save</button>
                    <button type="button" class="btn btn-danger" onClick={()=>setShow(false)}>
                        Close
                    </button>
                </div>
        </Modal>
    )
};
