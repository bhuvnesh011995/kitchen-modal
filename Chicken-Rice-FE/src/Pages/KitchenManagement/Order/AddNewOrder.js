import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import BASEURL from "../../../Config/Config";
import axios from "axios";
import { getProduct } from "../../../utility/product/product";
import { useEffect } from "react";
let initialState= {
    orderId:"",
    customerName:"",
    product:"",
      size:"",
    addons:"",
    note:"",
    payMentMode:"",
    status:"",
    qty:"",
    totalcosts:"",
    cost:"",
    email:"",
    contact:"",
}

export default function AddNewOrder({show,setShow,getAllOrder}) {

    const [order, setOrder] = useState(initialState);
    const [products, setProduct] = useState([]);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedCost, setSelectedCost] = useState('');
    const [availableSizes, setAvailableSizes] = useState([]);
    const [availableAddons, setAvailableAddons] = useState([]);
 
  const handleSizeChange = (e) => {
    const selectedSize = e.target.value;
    setSelectedSize(selectedSize);

     console.log("selectedSize",selectedSize) 

    const selectedProduct = products.find((ele) =>
      ele.sizeCosts.some((sizeCost) => sizeCost.size === selectedSize)
    );

    console.log('selectedProduct', selectedProduct);

    if (selectedProduct) {
      const selectedSizeCost = selectedProduct.sizeCosts.find(
        (sizeCost) => sizeCost.size === selectedSize
      );

      console.log('selectedSizeCost', selectedSizeCost);

      setOrder((prevOrder) => ({
        ...prevOrder,
        cost: selectedSizeCost.cost,
        totalcosts: selectedSizeCost.totalCost,
        size: selectedSize,
      }));

      setSelectedCost(selectedSizeCost.totalCost);
    }
  };

   

  console.log('pr',products)
    async function getAllProduct(){
        let res = await getProduct()
        if(res.status === 200) setProduct(res.data.product)
        else setProduct([])
    }

    
    useEffect(()=>{
        getAllProduct()
    
    },[])
    

    async function handleSubmit(e) {
      e.preventDefault();
      try {
        let formData = new FormData();
        formData.append("orderId", order.orderId);
        formData.append("payMentMode", order.payMentMode);
        formData.append("product", order.product);
        formData.append("note", order.note);
        formData.append("status", order.status);
        formData.append("qty", order.qty);
        formData.append("cost", order.cost);
        formData.append("email", order.email);
        formData.append("contact", order.contact);
        formData.append("totalcosts", order.totalcosts);

        let response = await axios({
          url: BASEURL + "/allOrder",
          method: "POST",
          data: formData,
          headers: { "Content-Type": "application/json" },
        });
  
        if (response.status === 201) {
          setShow(false);
          getAllOrder()
        } else {
        
        }
      } catch (error) {
        console.log(error);
      }
    }

    const handleProductChange = (e) => {
      const selectedProductName = e.target.value;
  
      const selectedProduct = products.find(
        (product) => product.productName === selectedProductName
      );
  
      setOrder((prevOrder) => ({
        ...prevOrder,
        product: selectedProductName,
        size: '',
        addons: [], 
        cost: '',
        totalcosts: '',
      }));
  
      if (selectedProduct) {
        setAvailableSizes(selectedProduct.sizeCosts.map((sizeCost) => sizeCost.size));
        setAvailableAddons(selectedProduct.addons);
      } else {
        setAvailableSizes([]);
        setAvailableAddons([]);
      }
    };
  
    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Order</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <form className="needs-validation" onSubmit={handleSubmit}>
          <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for=""> OrderId</label>
                                <input    type="text" className="form-control" placeholder=""   onChange={e=>setOrder(preVal=>({...preVal,orderId:e.target.value}))}    />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for=""> customerName</label>
                                <select  class="form-control" >
                                  <option>choose..</option>
</select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="">Product </label>
                                <select class="form-control" name="product"  onChange={(e) => handleProductChange(e)}
>
                                        <option value={""}>Select</option>
                                        {products.map((ele, i) => (
  <option key={i} value={ele.productName}>
    {ele.productName}
  </option>
))}
                                      
                                        </select>                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                      <label>Select Size:</label>
                                      <select
            class="form-control"
            name="product"
            value={order.size}
            onChange={handleSizeChange}
          >
            <option value="">Select</option>
            {availableSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>

    </div>
    </div>
    {selectedSize && (
                <div className="row">
          <div className="col-md-6 mb-3">
          <label>Total Cost:</label>
          <input type="text" class="form-control" value={order.totalcosts} onChange={e=>setOrder(preVal=>({...preVal,totalcosts:e.target.value}))} readOnly />
          </div>
          
        </div>
      )}
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for=""> addons</label>
                                <select class="form-control" name="product" onChange={e=>setOrder(preVal=>({...preVal,addons:e.target.value}))}>
                                        <option value={""}>Select</option>
                                        {availableAddons.map((addons) => (
              <option key={addons} value={addons}>
                {addons}
              </option>
            ))}
                                      
                                        </select>       
                                         </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for=""> customerNotes</label>
                                <input    type="text" className="form-control" placeholder=""   onChange={e=>setOrder(preVal=>({...preVal,note:e.target.value}))}    />
                            </div>
                        </div>
                
                        <div className="col-md-6">
    <div className="mb-3">
        <label for=""> quntity</label>
        <input
            type="number"
            className="form-control"
            placeholder=""
            onChange={(e) => {
                const newQty = e.target.value;
                const newTotalCost = selectedSize
                    ? selectedCost * newQty
                    : 0;

                setOrder((prevOrder) => ({
                    ...prevOrder,
                    qty: newQty,
                    totalcosts: newTotalCost,
                }));
            }}
        />
    </div>
</div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="">payMentMode</label>
                                <select class="form-select" name="status"  required   id="floatingSelect"   onChange={e=>setOrder(preVal=>({...preVal,payMentMode:e.target.value}))}   aria-label="Floating label select example">
    <option selected>choose...</option>
    <option value="cash">cash</option>
    <option value="card">card</option>
  </select>                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="">status</label>
                                <select class="form-select" name="status"  required   id="floatingSelect"   onChange={e=>setOrder(preVal=>({...preVal,status:e.target.value}))}   aria-label="Floating label select example">
    <option selected> select Status</option>
    <option value="Pending">Pending</option>
    <option value="complete">complete</option>
    <option value="cancle">cancle</option>
  </select>
                            </div>
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
