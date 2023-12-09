import React from 'react';
import Navbar from '../../../Components/Common/Navbar';
import { useNavigate } from 'react-router-dom';
export default function OrderSummary() {
    const navigate = useNavigate()
  return (
    <div className="page-content">
        <Navbar/>
      <div className="content-sticky-footer">
        <div className="container">
          <div className="card p-2 mb-2" >
          <div class="row" >
                                    <div class="col-6">
                                        <p class="mb-0">Order Status</p>
                                    </div>
                                    <div class="col-6 text-right ">
                                        <p class="mb-0 text-success" style={{ textAlign: 'right' }}>Accepted</p>
                                    </div>
                                </div>   
                                       </div>
          <div className="card p-1 mb-2">
          <div class="card-body p-1">
                                <div class="card-title bg-light p-1">
                                    <h6 class="m-0">Order Summary</h6>
                                </div>

                                <p class="mb-0 mt-2">Order <strong>#2322966528</strong> </p>
                                <div class="row mt-2">
                                    <div class="col-5">
                                        <p class="mb-0"><i class="fa-regular fa-calendar"></i> 27/08/2023</p>
                                    </div>
                                    <div class="col-7 text-right">
                                        <p class="mb-0" style={{ textAlign: 'right' }}> <i class="fa-regular fa-clock"></i> Sunday, 10:12:19 AM</p>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-5">
                                        <p class="mb-0">Table NO. 21</p>
                                    </div>
                                    <div class="col-7 text-right">
                                        <p class="mb-0" style={{ textAlign: 'right' }}> Token NO. <strong style={{color:'#800'}}>#05</strong> </p>
                                    </div>
                                </div>
                            </div>          </div>
          <div className="card p-1">
          <div class="card_body p-1">
                                <div class="card_title bg-light p-1">
                                    <h6 class="m-0">Order Details</h6>
                                </div>


                                <div class="row mt-2">
                                    <div class="col-5">
                                        <p class="mb-0">Total </p>
                                    </div>
                                    <div class="col-7 text-right">
                                        <p class="mb-0" style={{ textAlign: 'right' }}> $23.65</p>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-5">
                                        <p class="mb-0">No of items</p>
                                    </div>
                                    <div class="col-7 text-right">
                                        <p class="mb-0" style={{ textAlign: 'right' }}> 1 Item </p>
                                    </div>
                                </div>
                                <hr/>
                                <div class="row">
                                    <div class="col-7">
                                        <p class="mb-1">Scramble Egg Fried Rice </p>
                                        <p class="mb-1">Price: <strong>$23.65</strong> </p>
                                        <p class="mb-1">Portion: Normal (23.65)</p>
                                    </div>
                                    <div class="col-5 text-right">
                                        <div class="row">
                                            <div class="col-5 col-sm-6 text-right">
                                                <button class="btn btn-default p-1">$23.65</button>
                                            </div>
                                            <div class="col-5 col-sm-6">
                                                <button class="btn btn-primary p-1">Repeat</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>          </div>
                        
        </div>
      </div>

      <div className="footer-details">
        <div className="container">
          <div id="accordion" className="accordion">
            <div className="card mb-0">
              <div className="card-header collapsed" data-toggle="collapse" href="#collapseOne">
                <a className="card-title">
                  View Summary
                </a>
              </div>
              <div id="collapseOne" className="card-body collapse show" data-parent="#accordion">
                <div className="row">
                  <div className="col-6 col-sm-6">
                    <div className="bill-details">
                      <ul>
                        <li>GST</li>
                        <li>Packing Charges</li>
                        <li><strong>Grand Total</strong></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6" style={{ textAlign: 'right' }}>
                    <div className="bill-details">
                      <ul>
                        <li>$2.10</li>
                        <li>$1.19</li>
                        <li><strong>$22.96</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* <div className="container text-center">
        <div className="checkout_btn cart-btn">
          <a href="#">Order Status</a>
        </div>
      </div> */}
        <div style={{position:"relative",zIndex:"99999",borderRadius:'8%'}}>
                <div style={{ position: "fixed", top: "91%", left: "5%", width: '50%', transform: 'translateY(-50%)', backgroundColor: '#800', height: '40px', borderRadius: '15px',marginLeft:'15%' }}  >
  <span style={{ display: 'flex', alignItems: 'center', height: '100%',justifyContent:'center'}} >
    <span style={{marginLeft:'2%',color:'#fff',justifyContent:'center',alignItems:'center' }}>
        Order Status
    </span>
  </span>
</div>
</div>
    </div>
  );
};

