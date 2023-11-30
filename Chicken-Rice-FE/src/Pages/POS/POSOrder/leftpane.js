import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import PlusMinusComponent from './PlusMinuxCoponent';
import { useCart } from './Reducer';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function LeftPane() {
   const { shoppingCart,dispatch } = useCart({});
   const [clickedItems, setClickedItems] = useState([]);
   const navigate=useNavigate()

   const handleNavigate = () => {
  
    const shoppingCartWithAllTotal = shoppingCart.map(item => ({
      ...item,
      allTotalPrice: totalAmount,
    }));
    navigate('/pos/checkout', { state: { shoppingCart: shoppingCartWithAllTotal,totalAmount:totalAmount } });
  };
  

   console.log("shoppingCart",shoppingCart)
  const [currentQuantity, setCurrentQuantity] = useState({});

  const handleQtyChange = (newValue, productId) => {
    setCurrentQuantity(prev => ({
      ...prev,
      [productId]: newValue,
    }));
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity: newValue } });
  };

  const calculateItemTotal = (item) => {
    const quantity = currentQuantity[item.productId] || 1;
    return quantity * item.totalPrice;
  };

  const totalAmount = shoppingCart.reduce((total, item) => total + calculateItemTotal(item), 0);

  const handleItemClick = (item) => {
    setClickedItems((prevClickedItems) => [...prevClickedItems, item]);
    console.log('Clicked items:', clickedItems);
  };
  console.log('clickedItems',clickedItems)

  return (
    <div className="leftpane pane-border" >
    <div className="order-container">
        <div className="order">
            <ul className="orderlines">
                <li className="orderline ">
                {shoppingCart.map((item) => (
    <div key={item.productId} className="row orderline  selected has-change justify-content-end align-items-center"     onClick={() => handleItemClick(item)}    style={{marginTop:'2%'}}>
    <div className="col-md-4">{item.productName}</div>  
    <div className="col-md-4 d-flex justify-content-end align-items-center">
    <PlusMinusComponent quantity={currentQuantity[item.productId] || 1}   currentQuantity={currentQuantity}  onChange={(value) => handleQtyChange(value, item.productId) }    productId={item.productId} />    </div>

    <div className="col-md-3 ms-auto">${item.price}/item</div>
    <ul className="info-list">
    <div className="col-md-2 ms-auto">${calculateItemTotal(item)}</div>
    </ul>
  </div>
))}
            </li>
            </ul>
            <div className="summary clearfix">
                <div className="credit-summary-line line">
                    <div className="entry total">
                        <span className="badge">Total:</span>
                {totalAmount !=0 &&     <span className="value">${totalAmount}  </span> }
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="pads">
<div className="control-buttons">
<div className="control-button">

<Link to="/pos/refund">
<i className="fa fa-undo" role="img" aria-label="Refund" title="Refund"></i> Refund
</Link>
</div>
</div>
<div className="subpads">
<div className="actionpad"  >
<button className="button pay validation pay-order-button" style={{height:'100%'}}>
<div className="pay-circle  "  onClick={handleNavigate}>
<ArrowForwardIosIcon/>
</div>
payment
</button>
</div>
<div className="numpad">
<button className="input-button number-char" >1</button>
<button className="input-button number-char">2</button>
<button className="input-button number-char">3</button>
<button className="input-button number-char">4</button>
<button className="input-button number-char">5</button>
<button className="input-button number-char">6</button>
<button className="input-button number-char">7</button>
<button className="input-button number-char">8</button>
<button className="input-button number-char" >9</button>
<button className="input-button number-char">0</button>
<button className="input-button number-char">.</button>
<button className="input-button numpad-minus">+/-</button>
<button className="mode-button selected-mode backspace-button">Qty</button>
<button className="input-button numpad-backspace backspace-button">⌫</button>
</div>
</div>
</div>
</div>
)
}
