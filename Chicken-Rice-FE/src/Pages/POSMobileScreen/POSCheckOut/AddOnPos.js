import React from 'react';
import styles from './App.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const AddOnPos = () => {
  return (
    <div className={styles.page}>
      <div className=" page-content">
        <div className="content-sticky-footer">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-4 col-sm-4">
                <div  class="menu-img">
                  <img
                    src="photo/nonveg1.jpeg"
                    alt=""
                    class="imgfluid img-thumbnail"
                   style={{ padding: 0 }}
                  />
                </div>
              </div>
              <div className="col-8 col-sm-8 add-on">
                <div className="menu-item-description ">
                  <h4>Chicken With French Fries</h4>
                </div>
              </div>
              <p style={{marginTop:'1%'}}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est totam ut corrupti incidunt
                voluptatibus at architecto,
              </p>
            </div>
            <hr />
            <div className="container">
              <div id="accordion" className="accordion">
                <div className="card mb-0">
                  <div
                    className="card-header collapsed"
                    data-toggle="collapse"
                    href="#collapseOne"
                  >
                    <a className="card-title">Spicy Level Tum (Pick 1)</a>
                  </div>
                  <div
                    id="collapseOne"
                    className="card-body collapse show"
                    data-parent="#accordion"
                  >
                    <div className="menu-checkbox">
                      <ul>
                        <li>
                          {' '}
                          <input type="checkbox" id="" checked />
                          <label htmlFor="">Non Spicy</label>
                        </li>
                        <li>
                          {' '}
                          <input type="checkbox" id="" />
                          <label htmlFor="">Less Spicy</label>
                        </li>
                        <li>
                          {' '}
                          <input type="checkbox" id="" />
                          <label htmlFor="">Normal Spicy</label>
                        </li>
                        <li>
                          {' '}
                          <input type="checkbox" id="" />
                          <label htmlFor="">More Spicy</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="card-header collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                  >
                    <a className="card-title">Add More Sauce</a>
                  </div>
                  <div
                    id="collapseTwo"
                    className="card-body collapse"
                    data-parent="#accordion"
                  >
                    <div className="menu-checkbox">
                      <ul>
                        <li>
                          {' '}
                          <input type="checkbox" id="" checked />
                          <label htmlFor="">Tomato Sauce</label>
                        </li>
                        <li>
                          {' '}
                          <input type="checkbox" id="" />
                          <label htmlFor="">Chilli Sauce</label>
                        </li>
                        <li>
                          {' '}
                          <input type="checkbox" id="" />
                          <label htmlFor="">Soya Sauce</label>
                        </li>
                        <li>
                          {' '}
                          <input type="checkbox" id="" />
                          <label htmlFor="">Kasundi</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <div className="container mb-5">
              <div className="quantity">
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
              </div>
            </div>
            <hr />
          </div>
        </div>

        <br />
        <div style={{position:"relative",zIndex:"99999",borderRadius:'8%'}}>
                <div style={{ position: "fixed", top: "91%", left: "5%", width: '50%', transform: 'translateY(-50%)', backgroundColor: '#800', height: '35px', borderRadius: '15px',marginLeft:'15%' }}  >
  <span style={{ display: 'flex', alignItems: 'center', height: '100%',justifyContent:'center'}}>
    <span style={{marginLeft:'2%',color:'#fff',justifyContent:'center',alignItems:'center' }}>
        Add To Cart
   <ShoppingCartIcon/>
    </span>
  </span>
</div>


                </div>

      </div>
    </div>
  );
};

export default AddOnPos;
