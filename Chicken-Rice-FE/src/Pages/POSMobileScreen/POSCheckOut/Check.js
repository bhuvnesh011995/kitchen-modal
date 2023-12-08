import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Check = () => {
  return (
    <div className="page">
      <div className="page-content">
        <div className="content-sticky-footer">
          <div className="container">
            <div className="card p-2">
              <div className="card-body p-2">
                <div className="row">
                  <div className="col-6 col-sm-6">
                    <p className="mb-0" style={{ color: '#800' }}><i className="fa-solid fa-table"></i> Table Number 21 </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-2 p-2">
              <div className="card-body p-2">
                <div className="menu-listing">
                  <ul>
                    <li>
                      <p className="mb-0" style={{ overflow: 'hidden', maxWidth: '160px' }}><i className="fa-solid fa-pen"></i> Chicken Breast Omlete </p>
                      <div className="quantity mb-0">
                      <a className="btn btn-secondary btn-sm quantity__minus" >
        <i className="fa fa-minus"></i>
      </a>
      <input
        type="number"
        className="form-control w-50px form-control-sm mx-2 bg-white bg-opacity-25 text-center quantity__input"
        name="quantity"
        
        readOnly
      />
      <a className="btn btn-secondary btn-sm quantity__plus"    >
        <i className="fa fa-plus"></i>
      </a>
                      </div> <span>$ 26.65</span>
                    </li>
                  </ul>
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
                <div style={{ position: "fixed", top: "91%", left: "5%", width: '50%', transform: 'translateY(-50%)', backgroundColor: '#800', height: '35px', borderRadius: '15px',marginLeft:'15%' }}  >
  <span style={{ display: 'flex', alignItems: 'center', height: '100%',justifyContent:'center'}}>
    <span style={{marginLeft:'2%',color:'#fff',justifyContent:'center',alignItems:'center' }}>
        Check Out
   <ShoppingCartIcon/>
    </span>
  </span>
</div>
</div>
      </div>
    </div>
  );
};

export default Check;
