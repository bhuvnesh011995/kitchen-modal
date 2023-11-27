import React from 'react'
import { Link } from 'react-router-dom'
import RestaurantIcon from '@mui/icons-material/Restaurant';
export default function LeftPane() {
  return (
    <div className="leftpane pane-border" >
    <div className="order-container">
        <div className="order">
            <ul className="orderlines">
                <li className="orderline selected has-change">
                    <span className="product-name">Grill Chicken Chop</span>
                    <span className="price">$40.78</span>
                    <ul className="info-list">
                        <li className="info"><em>Size:</em> Small, Medium</li>
                    </ul>
                </li>
                <li className="orderline has-change">
                    <span className="product-name">Grill Pork Chop</span>
                    <span className="price">$34.16</span>
                    <ul className="info-list">
                        <li className="info"><em>Size:</em> Medium</li>
                    </ul>
                </li>
                <li className="orderline has-change">
                    <span className="product-name">Vegan Salad Bowl</span>
                    <span className="price">$124.72</span>
                    <ul className="info-list">
                        <li className="info"><em>Size:</em> Medium, Large</li>
                    </ul>
                </li>
            </ul>
            <div className="summary clearfix">
                <div className="credit-summary-line line">
                    <div className="entry total">
                        <span className="badge">Total:</span>
                        <span className="value">$225.25</span>
                        <div className="subentry"> Taxes: <span className="value">$65.25</span></div>
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
<RestaurantIcon role="img" aria-label="Pay" title="Pay"/>
</div>
Order
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
