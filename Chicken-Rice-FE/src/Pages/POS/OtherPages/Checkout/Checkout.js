import Common from "../../../../Components/Common/POSCommon/Common";
import cashIcon from "../../../../assets/Images/icons/cash.svg"
import dabitCard from "../../../../assets/Images/icons/debitcard.svg"
import bank from "../../../../assets/Images/icons/bank.png"
export default function Checkout() {
    return (
        // <div style={{height:"100vh",overflow:"hidden"}}>
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
                    <li>Cash <span class="amount text-end">$20.19 </span> <a><i class="fa fa-times"></i></a></li>
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
                           <h5>Remaining $0.00</h5>
                           <p>Total Due $20.13</p>
                        </div>
                        <div class="col-md-6 text-end">
                            <h5>Change $0.00</h5>
                        </div>
                    </div>
                </div>
                <div class="row no-gutters">
                    <div class="col-md-3">
                        <div class="num-pad-button num-pad-checkout-btn">
                            <button class="btn btn-number w-100 text-dark">1</button>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="num-pad-button num-pad-checkout-btn">
                            <button class="btn btn-number w-100 text-dark">2</button>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="num-pad-button num-pad-checkout-btn">
                            <button class="btn btn-number w-100 text-dark">3</button>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="num-pad-button num-pad-checkout-btn">
                            <button class="btn btn-number w-100 text-dark ">+10</button>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="num-pad-button num-pad-checkout-btn">
                            <button class="btn btn-number w-100 text-dark">4</button>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="num-pad-button num-pad-checkout-btn">
                            <button class="btn btn-number w-100 text-dark">5</button>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="num-pad-button num-pad-checkout-btn">
                            <button class="btn btn-number w-100 text-dark">6</button>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="num-pad-button num-pad-checkout-btn">
                            <button class="btn btn-number w-100 text-dark">  +20</button>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="num-pad-button num-pad-checkout-btn">
                            <button class="btn btn-number w-100 text-dark">7</button>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="num-pad-button num-pad-checkout-btn">
                            <button class="btn btn-number w-100 text-dark">8</button>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="num-pad-button num-pad-checkout-btn">
                            <button class="btn btn-number w-100 text-dark">9</button>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="num-pad-button num-pad-checkout-btn">
                            <button class="btn btn-number w-100 text-dark"><span>+50</span></button>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="num-pad-button num-pad-checkout-btn">
                            <button class="btn btn-number w-100 text-dark">+/-</button>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="num-pad-button num-pad-checkout-btn">
                            <button class="btn btn-number w-100 text-dark">0</button>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="num-pad-button num-pad-checkout-btn">
                            <button class="btn btn-number w-100 text-dark">.</button>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="num-pad-button num-pad-checkout-btn">
                            <button class="btn btn-number w-100 text-dark"><i class="fas fa-backspace"></i></button>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
        <a class="btn btn-primary w-100 btn-lg">Proceed To Payment</a>
          
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
