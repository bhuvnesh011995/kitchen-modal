import React from 'react';

export default function PaymentCheckOut() {
  return (
    <div className="page-content">
      <div className="content-sticky-footer">
        <div className="container">
          <div className="card p-1 mb-2">
            <div className="card-body p-2">
              <div className="row ">
                <div className="col-md-6">
                  <p className="mb-2">Payment Mode</p>
                </div>
                <div className="row">
      <div className="col-md-12">
        <input type="radio" id="chkPassport" name="fav_language" value="Cash" style={{ marginRight: '8px' }} />
        <label htmlFor="chkPassport" style={{ marginRight: '16px' }}>Cash</label>
      </div>

      <div className="col-md-12">
        <input type="radio" id="Card" name="fav_language" value="Card" style={{ marginRight: '8px' }} />
        <label htmlFor="Card" style={{ marginRight: '16px' }}>Card</label>
      </div>

      <div className="col-md-12">
        <input type="radio" id="UPI" name="fav_language" value="UPI" style={{ marginRight: '8px' }} />
        <label htmlFor="UPI">UPI</label>
      </div>
    </div>
                <div class="col-md-12">
                                        <div id="dvPassport" >
                                            <label for="">Token</label>
                                            <input type="text" id="txtPassportNumber" class="form-control" />
                                        </div>
                                    </div>
              </div>
            </div>
          </div>
          <div className="card p-2 mb-2">
            <div className="card-body p-1">
              <div className="row">
                <div className="col-6">
                  <p className="mb-0">Order Type</p>
                </div>
                <div className="col-6 text-right">
                  <p className="mb-0" style={{ color: '#800',textAlign:'right' }}>Dine In</p>
                </div>
              </div>
            </div>
          </div>
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
      <div style={{position:"relative",zIndex:"99999",borderRadius:'8%'}}>
                <div style={{ position: "fixed", top: "91%", left: "5%", width: '50%', transform: 'translateY(-50%)', backgroundColor: '#800', height: '40px', borderRadius: '15px',marginLeft:'15%' }}  >
  <span style={{ display: 'flex', alignItems: 'center', height: '100%',justifyContent:'center'}}>
    <span style={{marginLeft:'2%',color:'#fff',justifyContent:'center',alignItems:'center' }}>
        Proceed To Payment
    </span>
  </span>
</div>
</div>
    </div>
  );
}
