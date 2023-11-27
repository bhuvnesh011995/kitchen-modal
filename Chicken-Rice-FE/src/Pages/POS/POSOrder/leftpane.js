import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const LeftPane = ({ showProduct, product, setProduct }) => {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, quantity + value);
    setQuantity(newQuantity);
  };

  const updateTotal = () => {
    const totalPrice = showProduct.reduce((acc, item) => {
      return acc + item.defaultPrice * quantity;
    }, 0);

    setTotal(totalPrice);
  };

  useEffect(() => {
    updateTotal();
  }, [quantity, showProduct]);

  return (
    <div className="leftpane pane-border">
      <div className="order-container">
        <div className="order">
          <ul className="orderlines">
            <li className="orderline ">
              {showProduct.map((item) => (
                <div key={item.productId} className="row orderline selected has-change justify-content-end align-items-center" style={{ marginTop: '2%' }}>
                  <div className="col-md-4">{item.productName}</div>
                  <div className="col-md-4 d-flex justify-content-end align-items-center">
                    <a className="btn btn-secondary btn-sm quantity__minus" onClick={(e) => { e.preventDefault(); handleQuantityChange(-1); }}>
                      <i className="fa fa-minus"></i>
                    </a>
                    <input
                      type="number"
                      className="form-control w-50px form-control-sm mx-2 bg-white bg-opacity-25 text-center quantity__input"
                      value={quantity}
                      name="quantity"
                      readOnly
                    />
                    <a className="btn btn-secondary btn-sm quantity__plus" onClick={(e) => { e.preventDefault(); handleQuantityChange(1); }}>
                      <i className="fa fa-plus"></i>
                    </a>
                  </div>
                  <div className="col-md-3 ms-auto">${item.defaultPrice}/item</div>
                  <ul className="info-list">
                    <div className="col-md-2 ms-auto">${quantity * item.defaultPrice}</div>
                    {/* Additional information if needed */}
                  </ul>
                </div>
              ))}
            </li>
          </ul>
          <div className="summary clearfix">
            <div className="credit-summary-line line">
              <div className="entry total">
                <span className="badge">Total:</span>
                <span className="value">${total} </span>
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
          <div className="actionpad">
            <button className="button set-partner">
              <a href="checkout.html">
                <i className="fa fa-chevron-right" role="img" aria-label="Customer" title="Customer"></i>
                Payment
              </a>
            </button>
            <button className="button pay validation pay-order-button">
              <div className="pay-circle">
                <RestaurantIcon role="img" aria-label="Pay" title="Pay" />
              </div>
              Order
            </button>
          </div>
          <div className="numpad">
            <button className="input-button number-char">1</button>
            <button className="input-button number-char">2</button>
            <button className="input-button number-char">3</button>
            <button className="input-button number-char">4</button>
            <button className="input-button number-char">5</button>
            <button className="input-button number-char">6</button>
            <button className="input-button number-char">7</button>
            <button className="input-button number-char">8</button>
            <button className="input-button number-char">9</button>
            <button className="input-button number-char">0</button>
            <button className="input-button number-char">.</button>
            <button className="input-button numpad-minus">+/-</button>
            <button className="mode-button selected-mode backspace-button">Qty</button>
            <button className="input-button numpad-backspace backspace-button">⌫</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPane;
