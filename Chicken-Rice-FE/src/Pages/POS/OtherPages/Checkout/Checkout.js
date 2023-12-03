import Common from "../../../../Components/Common/POSCommon/Common";
import cashIcon from "../../../../assets/Images/icons/cash.svg"
import dabitCard from "../../../../assets/Images/icons/debitcard.svg"
import bank from "../../../../assets/Images/icons/bank.png"
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Checkout() {
    const navigate = useNavigate()
    const location = useLocation();
    const { state } = location;
    const totalAmount = state.totalAmount;
    const shoppingCart = state.shoppingCart;
    const [displayedNumber, setDisplayedNumber] = useState('');
    const [totalAmounts, setTotalAmount] = useState({totalAmount});
      console.log('totalAmount',shoppingCart)

    const handleButtonClick = (value) => {
        if (value === 'backspace') {
          setDisplayedNumber((prevNumber) => prevNumber.slice(0, -1));
        } else if (value === '=') {
          const change = parseFloat(displayedNumber) - totalAmounts;
          alert(`Change: $${Math.max(0, change).toFixed(2)}`);
          setDisplayedNumber('');
        } else {
          setDisplayedNumber((prevNumber) => prevNumber + value);
        }
      };

      const change = displayedNumber ? parseFloat(displayedNumber) - totalAmount : 0;
      console.log(displayedNumber)

      const handlePayment = () => {
        navigate('/pos/posorderslipt', { state: { payment: shoppingCart, totalAmounts: totalAmounts } });

      };

    return (
        <Common>
            <div class="page-wrapper ms-0 mt-2">
<div class="content">

  
<div class="row g-0">
    <div class="col-md-3">
        <div class="card">
            <div class="card-body">
                <div class="setvaluecash">
                    <ul>
                    <li>
                    <a class="paymentmethod">
                    <img src={cashIcon} alt="img" class="me-2"/>
                    Cash
                    </a>
                    </li>
                    <li>
                    <a class="paymentmethod">
                    <img src={dabitCard} alt="img" class="me-2"/>
                    Debit
                    </a>
                    </li>
                    <li>
                    <a class="paymentmethod">
                    <img src={bank} alt="img" class="me-2" style={{width: "30px"}}/>
                    Bank
                    </a>
                    </li>
                    </ul>
                    </div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <h5>Summary</h5>
                <ul class="checkout-list-method">
    <li>
      Cash <span className="amount text-end">${totalAmount}</span>
      <a><i className="fa fa-times"></i></a>
    </li>
              </ul>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="card mb-0">
            <div class="card-body">
                <div class="paymentlines-container">
                    <div class="row">
                        <div class="col-md-6">
                           <h5>Remaining ${displayedNumber}</h5>
                           <p>Total Due ${totalAmount}</p>
                        </div>
                        <div class="col-md-6 text-end">
                        <h5>Change: ${Math.max(0, change).toFixed(2)}</h5>
                        </div>
                    </div>
                </div>

                <div className="row no-gutters">
      {[1, 2, 3, '+10', 4, 5, 6, '+20', 7, 8, 9, '+50', '+/-', 0, '.', 'backspace'].map((value, index) => (
        <div key={index} className="col-md-3">
          <div className="num-pad-button num-pad-checkout-btn">
            <button className="btn btn-number w-100 text-dark" onClick={() => handleButtonClick(value)}>
              {value === 'backspace' ? <i className="fas fa-backspace"></i> : value}
            </button>
          </div>
        </div>
      ))}
    
    </div>
               
            </div>
        </div>
        <a class="btn btn-primary w-100 btn-lg" onClick={handlePayment}>Proceed To Payment</a>
          
    </div>
    <div class="col-md-3">
        <div class="card">
            <div class="card-body">
                <ul class="checkout-tips">
                    <li><a> <i class="fa fa-user"></i> Customer</a> </li>
                    <li><a> <i class="fas fa-file-invoice"></i> Invoice</a> </li>
                    <li><a> <i class="fa fa-heart"></i> Tips</a> </li>
                </ul>
            </div>
        </div>
       
    </div>
</div>
</div>
</div>
        </Common>
        // </div>
    )
};
