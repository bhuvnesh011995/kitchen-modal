import Common from "../../../../Components/Common/POSCommon/Common";
import "../../../../assets/css/app.min.css";
import { useState } from "react";
import nonveg1 from "../../../../assets/Images/nonveg1.jpeg"
import nonveg2 from "../../../../assets/Images/nonveg2.jpeg"
import pr1 from "../../../../assets/Images/pos/product-3.jpg"
import pr2 from "../../../../assets/Images/pos/product-4.jpg"
import pr3 from "../../../../assets/Images/pos/product-5.jpg"
import pr4 from "../../../../assets/Images/pos/product-17.jpg"
import pr5 from "../../../../assets/Images/pos/product-6.jpg"
import pr6 from "../../../../assets/Images/pos/product-7.jpg"
import pr7 from "../../../../assets/Images/pos/product-8.jpg"
import pr8 from "../../../../assets/Images/pos/product-9.jpg"
import pr9 from "../../../../assets/Images/pos/product-10.jpg"
import nonveg3 from "../../../../assets/Images/nonveg3.jpeg"
import pr10 from "../../../../assets/Images/pos/product-12.jpg"
import pr11 from "../../../../assets/Images/pos/product-13.jpg"
import pr12 from "../../../../assets/Images/pos/product-14.jpg"
import pr13 from "../../../../assets/Images/pos/product-15.jpg"
import pr14 from "../../../../assets/Images/pos/product-16.jpg"
import pr15 from "../../../../assets/Images/pos/product-1.jpg"
import pr16 from "../../../../assets/Images/pos/product-2.jpg"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductModal from "./ProductModal";
import CustomerNote from "./CustomerNote";
import SplitPaymentModal from "./SplitPaymentModal";
import CouponCode from "./CouponCode";
import RewardModal from "./RewardModal";
import BASEURL from "../../../../Config/Config";
import { useEffect } from "react";
import'./pos.css'
export default function POS(items) {
    const [isOpen,setIsOpen] = useState(false)
  const [open,setOpen] = useState(false)
  const [openSplit,setOpenSplit] = useState(false)
  const [openCoupon,setOpenCoupon] = useState(false)
  const [openReward,setOpenReward] = useState(false)
  const [cart, setCart] = useState([]);
 const [selectedProduct, setSelectedProduct] = useState(null);
 const [categorie, setCategorie] = useState([]);
 const [recipe, setRecipe] = useState([]);
 const [selectedCategory, setSelectedCategory] = useState(null);
 const [selectedItemIndex, setSelectedItemIndex] = useState(null); 
 const [customerNotes, setCustomerNotes] = useState(new Array(cart.length).fill('')); 
 const [isSelected, setIsSelected] = useState(false);

 console.log("dataaaa",recipe);
  console.log("ITEAM",cart) 
 useEffect(() => {
  fetch(`${BASEURL}/category`, {  
    method: 'GET', 
    headers: {
      'Content-Type':'application/json', 
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response.json(); 
    })
    .then((data) => {
      const categories = data.categories;
      setCategorie(categories);
      console.log('Fetched data:', data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}, []); 

 useEffect(() => {
  fetch(`${BASEURL}/recipe`, {  
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json', 
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response.json(); 
    })
    .then((data) => {
      const recipes = data.recipes;
      setRecipe(recipes);
      console.log('Fetched data:', data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}, []); 

const handleQuantityChange = (index, value ,item) => {
  const updatedCart = [...cart];
  const newQuantity = updatedCart[index].quantity + value;
  if (newQuantity < 1) {
    updatedCart[index].quantity = 1;
  } else if (newQuantity > item.ingradients[0].quantity) {
    updatedCart[index].quantity = item.ingradients[0].quantity;
  } else {
    updatedCart[index].quantity = newQuantity;
  }

  setCart(updatedCart);

};



  
const addToCart = (product, quantity, selectedOptionData) => {
  const cartItem = {
    ...product,
    quantity,
    selectedOptionData,
  };
  setCart([...cart, cartItem]);
};
 

  const handleProductClick = (product) => {
    console.log("PRODUCTSSS",product)
    if (parseInt(product.ingradients[0].quantity, 10) > 0) {
            setSelectedProduct(product);
    setIsOpen(true);
    }
   
  };   

  
  const handleNote = (index) => {
    setOpen(true);
  };  
  const handleSplit = () => {
    setOpenSplit(true);
  };  
  const handleCoupon = () => {
    setOpenCoupon(true);
  };  
  const handleReward= () => {
    setOpenReward(true);
  };  
  const handleDelete = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  alert(category)
  };


  const filteredRecipes = selectedCategory
  ? recipe.filter((product) => product.category._id === selectedCategory)
  : recipe;
 
  const handleAllDishesClick = () => {
    setSelectedCategory(null);
  };

  const handleSelectItem = (index) => {
    setSelectedItemIndex(index);
    setIsSelected(!isSelected)

  };

  const handleSaveCustomerNote = () => {
    if (selectedItemIndex !== null) {
      const updatedCustomerNotes = [...customerNotes];
      updatedCustomerNotes[selectedItemIndex] = customerNotes[selectedItemIndex]; 
      setCustomerNotes(updatedCustomerNotes);
      setOpen(false); 
      }
  };

  return (
    <Common>         
      <div id="content" class="app-content p-0"  >
        <div class="pos pos-with-menu pos-with-sidebar"  style={{overflow:"auto"}} id="pos">
          <div class="pos-container">
            <div class="pos-menu"  style={{overflow:"auto"}}>
              <div class="nav-container">
                <div
                  class="h-100"
                  data-scrollbar="true"
                  data-skip-mobile="true"
                  
                  style={{maxHeight:'800px', overflowY:'auto'}}
                >
                   <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="start-session.html" className="nav-link">
            <i className="fa-solid fa-arrow-left"></i> Back
          </Link>
        </li>
        <li className="nav-item">
          <div  className="nav-link "  onClick={handleAllDishesClick}>
            <i className="fa fa-utensils"></i> All Dishes
          </div>
        </li>
        {categorie.map((category) => (
  <li className={`nav-item ${selectedCategory === category._id ? 'selecteds' : 'unselected'}`} key={category._id}>
   <div className="nav-link" onClick={() => handleCategoryClick(category._id)} data-filter={category.id} style={selectedCategory === category._id ? { backgroundColor: '#800' ,color: 'white'} : { backgroundColor: 'initial' }}>
              <div>
              <img
              alt={"photo"}
              height={50}
              src={BASEURL+"/files/"+category.photo}
              loading="photo"
              width={"60%"}
            />
            <div>   
        {category.name}
        </div>
      </div>
             
            </div>
          </li>
        ))}
      </ul>
                </div>
              </div>
            </div>
            <div>


      <div className="pos-content" >
        <div className="pos-content-container h-100">
          <div className="row" style={{marginTop:'65px'}}>
            {filteredRecipes.map((product, index) => (
              <div
                className="col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-sm-6 pb-2"
                data-type="meat"
                key={index}
                style={{ opacity: parseInt(product.ingradients[0].quantity, 10) === 0 ? 0.4 : 1 , display: 'flex',position: 'relative',padding:'2px'}}
                onClick={() => handleProductClick(product)}
                
              >
                
                <div className="pos-product"  style={{ width: "350px", height: "270px" }}>
                <div className="img" style={{ display: 'flex', height: '150px',backgroundPosition:'center' , backgroundSize:' cover',backgroundRepeat:"no repeat"}}>
          <img
            alt={"photo"}
            src={BASEURL + "/files/" + product.photo}
            loading="photo"
            width={"100%"}
            style={{ display: 'flex', height: '100%',backgroundPosition:'center' , backgroundSize:' cover',backgroundRepeat:"no repeat",objectFit:'cover'}}
                    />
          {parseInt(product.ingradients[0].quantity, 10) === 0 && (
          <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

<div className="not-available" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', fontSize: '16px', fontWeight: 'bold' }}>
           Not Available

           </div> 
        </div> 
          )}
        </div>
                  <div className="info" >
                    <div className="title">{product.name}</div>
                    <div className="desc mb-0">{product.description}</div>
                    <div className="row">
                      <div className="col-md-5">
                        <div className="price">${product.totalcost}</div>
                      </div>
                      <div className="col-md-7 text-end text-success">
                        {parseInt(product.ingradients[0].quantity, 10) === 0
                          ? "Out of Stock" 
                          : `${product.ingradients[0].quantity
                            
                            }`} Dishes Left
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
      {isOpen && <ProductModal  product={selectedProduct} show={isOpen} setShow={setIsOpen} addToCart={addToCart}/>}
    </div>

            <div class="pos-sidebar" id="pos-sidebar">
              <div class="h-100 d-flex flex-column p-0">
                <div class="pos-sidebar-header">
                  <div class="back-btn">
                    <button
                      type="button"
                      data-toggle-class="pos-mobile-sidebar-toggled"
                      data-toggle-target="#pos"
                      class="btn"
                    >
                      <i class="fa fa-chevron-left"></i>
                    </button>
                  </div>
                  <div class="icon">
                    <i class="fa fa-plate-wheat"></i>
                  </div>
                  <div class="title">Table 01</div>
                  <div class="order small">
                    Order: <span class="fw-semibold">#0056</span>
                  </div>
                </div>

                <div class="pos-sidebar-nav small">
                  <ul class="nav nav-tabs nav-fill">
                    <li class="nav-item">
                    <Link to="#" 
                        class="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#newOrderTab"
                      >
                        New Order ({cart.length})
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="pos-sidebar-body tab-content" data-scrollbar="true" data-height="100%">
      {cart.map((item, index) => (
        <div className={`pos-order ${selectedItemIndex === index && isSelected ?  'selected' : ''}`} key={index}    onClick={() => handleSelectItem(index)} style={{height:'70%'}} >
          <div className="pos-order-product">
            <div>     <img
              alt={"photo"}
              height={'40%'}
              src={BASEURL+"/files/"+item.photo}
              loading="photo"
              width={"100%"}
              style={{objectFit:'cover'}}
            /></div>
            <div className="flex-1">
              <div className="h6 mb-0">{item.name}</div>
              <div className="small">${parseFloat(item.totalcost) * parseFloat(item.quantity)}</div>
              <div className="small mb-0">
              {item.selectedOptionData && item.selectedOptionData.label && (
            <div>
              - {item.selectedOptionData.label}
            </div>
          )}    - {item.quantity}
              </div>


              <div className="d-flex">
              <a href="#" className="btn btn-secondary btn-sm quantity__minus" onClick={(e) => { e.preventDefault(); handleQuantityChange(index, -1 ,item); }}>
      <i className="fa fa-minus"></i>
    </a>
    <input
      type="number"
      className="form-control w-50px form-control-sm mx-2 bg-white bg-opacity-25 text-center quantity__input"
      value={item.quantity}
      name="quantity"
    />
      <a href="#" className="btn btn-secondary btn-sm quantity__plus" onClick={(e) => { e.preventDefault(); handleQuantityChange(index, 1,item); }}>
      <i className="fa fa-plus"></i>
    </a>
              </div>
              <div className="small">{customerNotes[index]}</div>

            </div>
          </div>
          <div className="pos-order-price d-flex flex-column">
            <div className="flex-1">${item.totalcost}</div>
            <div className="text-end">
              <div className="btn btn-default btn-sm">
                <i className="fa fa-trash"  onClick={() => handleDelete(index)}></i>
              </div>
            </div>
          </div> 
       </div>
      ))} 
     
          
                  <div class="tab-pane fade h-100" id="orderHistoryTab">
                    <div class="h-100 d-flex align-items-center justify-content-center text-center p-20">
                      <div>
                        <div class="mb-3 mt-n5">
                          <svg
                            width="6em"
                            height="6em"
                            viewbox="0 0 16 16"
                            class="text-gray-300"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z"
                            />
                            <path d="M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z" />
                          </svg>
                        </div>
                        <h5>No order history found</h5>
                      </div>
                    </div>
                  </div>
                </div>



                <div class="row no-gutters">
                  <div class="col-md-4">
                    <div class="add-on-cust">
                    <div 
                    onClick={() => handleNote()}
                       
                      >
                        {" "}
                        <i class="fa fa-sticky-note"></i> Customer Note
                      </div>
                      {open && <CustomerNote shows={open} setShows={setOpen} customerNotes={customerNotes} setCustomerNotes={setCustomerNotes} handleSaveCustomerNote={handleSaveCustomerNote} selectedItemIndex={selectedItemIndex} />}
                    </div>
                
                  </div>
                  <div class="col-md-4">
                    <div class="add-on-cust">
                    <div 
                         onClick={() =>handleSplit()}
                      >
                        {" "}
                        <i class="fa fa-star"></i> Split
                      </div>
                    </div>
                    {openSplit && <SplitPaymentModal showSplit={openSplit} setShowSplit={setOpenSplit}/>}
                  </div>
                  <div class="col-md-4">
                    <div class="add-on-cust">
                    <div 
                    onClick={() =>handleCoupon()}
                      >
                        {" "}
                        <i class="fa fa-calculator"></i> Coupon Code
                      </div>
                    </div>
                    {openCoupon && <CouponCode show={openCoupon} setShow={setOpenCoupon}/>}
                  </div>
                  <div class="col-md-4">
                    <div class="add-on-cust">
                    <Link to="#" >
                        {" "}
                        <i class="fa fa-exclamation-circle"></i> Info
                      </Link>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="add-on-cust">
                    <Link to="/pos/refund">
                        {" "}
                        <i class="fa fa-undo"></i> Refund
                      </Link>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="add-on-cust">
                    <div
                       onClick={()=>handleReward()}
                      >
                        {" "}
                        <i class="fa fa-star"></i> Reward
                      </div>
                    </div>
                    {openReward && <RewardModal  show={openReward} setShow={setOpenReward}/>}
                  </div>

                  <div class="col-md-6">
                    <div class="add-on-cust">
                    <Link to="/pos/customer" 
                    >
                        {" "}
                        <i class="fa fa-user-circle"></i> Add Customer
                      </Link>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="add-on-cust">
                      <Link to="/pos/setting/transaction">
                        {" "}
                        <i class="fa fa-calculator"></i> Transaction History
                      </Link>
                    </div>
                  </div>
                </div>



                <div class="pos-sidebar-footer">
                  <div class="row no-gutters">
                    <div class="col-md-3">
                      <div class="num-pad-button">
                        <button class="btn btn-number w-100">1</button>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="num-pad-button">
                        <button class="btn btn-number w-100">2</button>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="num-pad-button">
                        <button class="btn btn-number w-100">3</button>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="num-pad-button bg-btn">
                        <button class="btn btn-number w-100 ">QTY</button>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="num-pad-button">
                        <button class="btn btn-number w-100">4</button>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="num-pad-button">
                        <button class="btn btn-number w-100">5</button>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="num-pad-button">
                        <button class="btn btn-number w-100">6</button>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div
                        class="num-pad-button"
                        style={{ padding: "2px 1px" }}
                      >
                        <button class="btn btn-number w-100">
                          {" "}
                          <i class="fas fa-percent"></i> Disc
                        </button>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="num-pad-button">
                        <button class="btn btn-number w-100">7</button>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="num-pad-button">
                        <button class="btn btn-number w-100">8</button>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="num-pad-button">
                        <button class="btn btn-number w-100">9</button>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="num-pad-button">
                        <button class="btn btn-number w-100">
                          <span>Price</span>
                        </button>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="num-pad-button">
                        <button class="btn btn-number w-100">+/-</button>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="num-pad-button">
                        <button class="btn btn-number w-100">0</button>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="num-pad-button">
                        <button class="btn btn-number w-100">.</button>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="num-pad-button">
                        <button class="btn btn-number w-100">
                          <i class="fas fa-backspace"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <Link to="/pos/checkout" className="btn btn-theme flex-fill d-flex align-items-center justify-content-center">
      <span>
        <span className="small fw-semibold">Checkout</span>
      </span>
    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          class="pos-mobile-sidebar-toggler"
          data-toggle-class="pos-mobile-sidebar-toggled"
          data-toggle-target="#pos"
        >
          <i class="fa fa-shopping-bag"></i>
          <span class="badge">5</span>
        </a>
      </div>
      </Common>
  );
}
