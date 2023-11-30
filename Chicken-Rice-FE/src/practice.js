import { Modal } from "bootstrap"
import { useState } from "react"

export default function Practice() {

    const [file,setFile] = useState()

    function handleSubmit(){
        fetch("http://localhost:8000/uploads/64fedd36804cc5398e9eef30")
        .then(res=>res.blob())
        .then(blob=>{
            let obj = URL.createObjectURL(blob)
            setFile(obj)
        })
    }



    return(
        <div>
            <button onClick={handleSubmit} className="btn btn-primary">submit</button>
        <img src={file} alt="" />
        </div>
    )
};




export function AddNew({show, setShow}) {
const [isOpen,setIsOpen] = useState(false)
{isOpen && <AddNew show={isOpen} setShow={setIsOpen}/>}
    return (
        <Modal size="xl" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Empolyee</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
    
          </Modal.Body>
        </Modal>
      );
};

///////////////LEFTPane

// import React from 'react'
// import { useState } from 'react';
// import { Link } from 'react-router-dom'
// import RestaurantIcon from '@mui/icons-material/Restaurant';
// import PlusMinusComponent from './PlusMinuxCoponent';
// import { useCart } from './Reducer';

// export default function LeftPane() {
//    const { shoppingCart } = useCart();
   
//    console.log("shoppingCart",shoppingCart)
//   const [currentQuantity, setCurrentQuantity] = useState({});

//   const handleQtyChange = (newValue, productId) => {
//     setCurrentQuantity((prev) => ({
//       ...prev,
//       [productId]: newValue,
//     }));
   
//   };
//   const calculateItemTotal = (item) => {
//     const quantity = currentQuantity[item.productId] || 1;
//     return quantity * item.totalPrice;
//   };

//   const totalAmount = shoppingCart.reduce((total, item) => total + calculateItemTotal(item), 0);


//   return (
//     <div className="leftpane pane-border" >
//     <div className="order-container">
//         <div className="order">
//             <ul className="orderlines">
//                 <li className="orderline ">
//                 {shoppingCart.map((item) => (
//     <div key={item.productId} className="row orderline  selected has-change justify-content-end align-items-center" style={{marginTop:'2%'}} >
//     <div className="col-md-4">{item.productName}</div>
//     <div className="col-md-4 d-flex justify-content-end align-items-center">
//     <PlusMinusComponent   quentity={currentQuantity}  onChange={(value) => handleQtyChange(value, item.productId)} />
//     </div>
//     <div className="col-md-3 ms-auto">${item.price}/item</div>
//     <ul className="info-list">
//     <div className="col-md-2 ms-auto">${calculateItemTotal(item)}</div>
//     </ul>
//   </div>
// ))}
//             </li>
//             </ul>
//             <div className="summary clearfix">
//                 <div className="credit-summary-line line">
//                     <div className="entry total">
//                         <span className="badge">Total:</span>
//                         <span className="value">${totalAmount}  </span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className="pads">
// <div className="control-buttons">
// <div className="control-button">

// <Link to="/pos/refund">
// <i className="fa fa-undo" role="img" aria-label="Refund" title="Refund"></i> Refund
// </Link>
// </div>
// </div>
// <div className="subpads">
// <div className="actionpad">
// <button className="button set-partner">
// <a href="checkout.html">
// <i className="fa fa-chevron-right" role="img" aria-label="Customer" title="Customer"></i>
// Payment
// </a>
// </button>
// <button className="button pay validation pay-order-button">
// <div className="pay-circle">
// <RestaurantIcon role="img" aria-label="Pay" title="Pay"/>
// </div>
// Order
// </button>
// </div>
// <div className="numpad">
// <button className="input-button number-char" >1</button>
// <button className="input-button number-char">2</button>
// <button className="input-button number-char">3</button>
// <button className="input-button number-char">4</button>
// <button className="input-button number-char">5</button>
// <button className="input-button number-char">6</button>
// <button className="input-button number-char">7</button>
// <button className="input-button number-char">8</button>
// <button className="input-button number-char" >9</button>
// <button className="input-button number-char">0</button>
// <button className="input-button number-char">.</button>
// <button className="input-button numpad-minus">+/-</button>
// <button className="mode-button selected-mode backspace-button">Qty</button>
// <button className="input-button numpad-backspace backspace-button">⌫</button>
// </div>
// </div>
// </div>
// </div>
// )
// }
// ////////////////////


////////////////////Reducer

// import React, { createContext, useReducer, useContext } from 'react';

// const CartContext = createContext();

// const initialState = [];

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return [...state, action.payload];
//     case 'UPDATE_CART_ITEM_QUANTITY':
//       const { productId, newQuantity } = action.payload;
//       const updatedCart = state.map(item =>
//         item.productId === productId ? { ...item, quantity: newQuantity } : item
//       );
//       return updatedCart;
//     case 'REMOVE_FROM_CART':
//       const { removedProductId } = action.payload;
//       const updatedCartAfterRemoval = state.filter(item => item.productId !== removedProductId);
//       return updatedCartAfterRemoval;
//     default:
//       return state;
//   }
// };

// const CartProvider = ({ children }) => {
//   const [shoppingCart, dispatch] = useReducer(cartReducer, initialState);

//   return (
//     <CartContext.Provider value={{ shoppingCart, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

// export { CartProvider, useCart };

////////POSMAIN

// import React, { useState } from 'react';
// import Common from '../../../Components/Common/POSCommon/Common';
// import { getProduct } from '../../../utility/product/product';
// import BASEURL from '../../../Config/Config';
// import './POSDetail.css';
// import { useEffect } from 'react';
// import { getCategories } from '../../../utility/categories/category';
// import LeftPane from './leftpane';
// import { useCart } from './Reducer';
// export default function POSMain(){
//      const [category, setCategory] =useState('All Dishes')
//      const [showCategoryList , setShowCategoryList] = useState(false)
//      const [product,setProduct] =useState([])
//      const [showProduct ,setShowProduct] = useState([])
//      const [categories ,setCategories] = useState([])
    
//      const { shoppingCart, dispatch } = useCart();
//      const [currentQuantity, setCurrentQuantity] = useState(1);

//      const handleProductClick = (item) => {
//         const existingCartItem = shoppingCart.find((cartItem) => cartItem.productId === item._id);
//         const quantityToAdd = currentQuantity || 1;
      
//         if (existingCartItem) {
//           dispatch({
//             type: 'UPDATE_CART_ITEM_QUANTITY',
//             payload: { productId: item._id, newQuantity: existingCartItem.quantity + quantityToAdd },
//           });
//           console.log('Item updated in the cart:', item);
//         } else {
//           addToCart(item, quantityToAdd);
//           console.log('Item added to the cart:', item);
//         }
//       };
      
//       const addToCart = (product, quantity) => {
//         const totalPrice = product.defaultPrice * quantity;
      
//         const cartItem = {
//           productId: product._id,
//           productName: product.productName,
//           price: product.defaultPrice,
//           quantity: quantity,
//           totalPrice: totalPrice,
//         };
      
//         dispatch({ type: 'ADD_TO_CART', payload: cartItem });
//         console.log('Item added to the cart:', cartItem);
//       };
      
     

//      console.log("product",shoppingCart)

//        const handleCategoryClick = (category) =>{
//            setCategory(category)
//            setShowCategoryList(false)
//        }
    
//     //    const handleProductClick = (product) => {
//     //     setShowProduct((prevProducts) => {
//     //       const existingProductIndex = prevProducts.findIndex((p) => p._id === product._id);
      
//     //       if (existingProductIndex !== -1) {
//     //         const updatedProducts = [...prevProducts];
//     //         updatedProducts[existingProductIndex].quantities += 1;
//     //         return updatedProducts;
//     //       } else {
//     //         return [...prevProducts, { ...product, quantities: 1 }];
//     //       }
//     //     });
//     //   };
      
  
//        async function getAllProduct(){
//           let res = await  getProduct()
//           if(res.status === 200) setProduct(res.data.product)
//           else setProduct([])
//        }


  
//        async function getAllCategory(){
//         let res = await getCategories()
//         if(res.status === 200) setCategories(res.data.categories)
//         else setCategories([])
//        }
    
//        useEffect(()=>{
//           getAllProduct()
//           getAllCategory()
//        },[])
//        const filteredProducts = category === 'All Dishes'? product: product.filter((product) => product.category.name === category);
//       console.log('filteredProducts',filteredProducts)


//     return (
//         <div id="content" >
//          <Common/>
//             <div className="container-fluid pos">
//                 <div className="pos-content">
//                     <div className="window">
//                         <div className="subwindow">
//                             <div className="subwindow-container">
//                                 <div className="subwindow-container-fix screens">
//                                     <div className="product-screen screen">
//                                         <div className="screen-full-width row">
                                                                                         
//                                     <LeftPane   showProduct={showProduct} setCurrentQuantity={setCurrentQuantity} currentQuantity={currentQuantity} />

//                                             <div className="rightpane ">
//             <div className="products-widget">
//                 <div className="products-widget-control">
//                     <div className="rightpane-header" >
//                         <div className="search-bar-container sb-product">
//                             <div className="pos-search-bar">
//                                 <i className="fa fa-search"></i>
//                                 <input placeholder="Search Products..." type="text" />
//                             </div>
//                         </div>
//                         <div className="categories-header">
//                             <div className="breadcrumb">
//                                 <span className="breadcrumb-button">Select Category:</span>
//                                 <span className="breadcrumb-button category" id="selected-category" onClick={()=> setShowCategoryList(true)}  >
//                                    {category}
//                                 </span>
//                                 <i className="breadcrumb-arrow fa fa-caret-down" aria-hidden="true"></i>
//                                     {showCategoryList && (               
//                                   <span>                 
//                                       {categories.map((category) => (

//               <span
//                 key={category}
//                 className="breadcrumb-button"
//                  onClick={() => handleCategoryClick(category.name)}
//               >
//                 {category.name}
//               </span>
//             ))}
//                       </span>    
//                           ) }             
                                      
                                    
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="product-list-container">
//                     <div className="grid product-list">

//                       {filteredProducts.map((item,index)=>(  
//                         <article tabIndex="0" className="product grid" data-product-id="24" aria-labelledby="article_product_24"   onClick={() => handleProductClick(item, index)}
//                         >
//                             <div className="product-img">
                               
//                                 <img src={BASEURL+"/files/"+item.file} />

//                             </div>

//                              <div className="product-content">
//                                 <div className="product-name" id="article_product_24">
//                                     {item.productName}
//                                 </div>
//                                 <span className="price-tag">${item.defaultPrice}</span>
//                             </div>
//                         </article>
//                          ))}
//                     </div>
//                     <div className="portal search-database-button no-results-message oe_hidden"></div>
//                 </div>
//             </div>
//         </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// import React from 'react'
// import { useState } from 'react';
// import { Link } from 'react-router-dom'
// import RestaurantIcon from '@mui/icons-material/Restaurant';
// import PlusMinusComponent from './PlusMinuxCoponent';
// import { useCart } from './Reducer';
// import { useNavigate } from 'react-router-dom';

// export default function LeftPane() {
//    const { shoppingCart,dispatch } = useCart({});
//    const navigate=useNavigate()

//    const handleNavigate = () => {
  
//     const shoppingCartWithAllTotal = shoppingCart.map(item => ({
//       ...item,
//       allTotalPrice: totalAmount,
//     }));
//     navigate('/pos/checkout', { state: { shoppingCart: shoppingCartWithAllTotal,totalAmount:totalAmount } });
//   };
  

//    console.log("shoppingCart",shoppingCart)
//   const [currentQuantity, setCurrentQuantity] = useState({});

//   const handleQtyChange = (newValue, productId) => {
//     setCurrentQuantity(prev => ({
//       ...prev,
//       [productId]: newValue,
//     }));
//     dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity: newValue } });
//   };

//   const calculateItemTotal = (item) => {
//     const quantity = currentQuantity[item.productId] || 1;
//     return quantity * item.totalPrice;
//   };

//   const totalAmount = shoppingCart.reduce((total, item) => total + calculateItemTotal(item), 0);


//   return (
//     <div className="leftpane pane-border" >
//     <div className="order-container">
//         <div className="order">
//             <ul className="orderlines">
//                 <li className="orderline ">
//                 {shoppingCart.map((item) => (
//     <div key={item.productId} className="row orderline  selected has-change justify-content-end align-items-center" style={{marginTop:'2%'}} >
//     <div className="col-md-4">{item.productName}</div>  
//     <div className="col-md-4 d-flex justify-content-end align-items-center">

//     <PlusMinusComponent quantity={currentQuantity[item.productId] || 1}   currentQuantity={currentQuantity}  onChange={(value) => handleQtyChange(value, item.productId) }    productId={item.productId} />    </div>


//     <div className="col-md-3 ms-auto">${item.price}/item</div>
//     <ul className="info-list">
//     <div className="col-md-2 ms-auto">${calculateItemTotal(item)}</div>
//     </ul>
//   </div>
// ))}
//             </li>
//             </ul>
//             <div className="summary clearfix">
//                 <div className="credit-summary-line line">
//                     <div className="entry total">
//                         <span className="badge">Total:</span>
//                 {totalAmount !=0 &&     <span className="value">${totalAmount}  </span>   }  
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className="pads">
// <div className="control-buttons">
// <div className="control-button">

// <Link to="/pos/refund">
// <i className="fa fa-undo" role="img" aria-label="Refund" title="Refund"></i> Refund
// </Link>
// </div>
// </div>
// <div className="subpads">
// <div className="actionpad">
// <button className="button set-partner">
// <a  onClick={handleNavigate}>
// <i className="fa fa-chevron-right" role="img" aria-label="Customer" title="Customer"></i>
// Payment
// </a >
// </button>
// </div>
// <div className="numpad">
// <button className="input-button number-char" >1</button>
// <button className="input-button number-char">2</button>
// <button className="input-button number-char">3</button>
// <button className="input-button number-char">4</button>
// <button className="input-button number-char">5</button>
// <button className="input-button number-char">6</button>
// <button className="input-button number-char">7</button>
// <button className="input-button number-char">8</button>
// <button className="input-button number-char" >9</button>
// <button className="input-button number-char">0</button>
// <button className="input-button number-char">.</button>
// <button className="input-button numpad-minus">+/-</button>
// <button className="mode-button selected-mode backspace-button">Qty</button>
// <button className="input-button numpad-backspace backspace-button">⌫</button>
// </div>
// </div>
// </div>
// </div>
// )
// }
