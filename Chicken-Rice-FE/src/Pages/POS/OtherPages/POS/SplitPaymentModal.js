import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './Modal.css'; 
function SplitPaymentModal({ showSplit, setShowSplit }) {
  return (
    <Modal show={showSplit} onHide={() => setShowSplit(false)} size="xl" >
        <div className="modal-content ">
        <Modal.Header closeButton>
          <Modal.Title>Split Payment</Modal.Title>
        </Modal.Header>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6">
                <div className="pos-order">
                  <div className="pos-order-product">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-2 d-flex align-items-center">
                        <input type="checkbox" />
                      </div>
                      <div className="col-md-3">
                        <div className="img">
                          <img src="assets/img/chicken kari.jpeg" alt="" style={{ width: '4.5rem', height: '4.5rem' }} />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="flex-1">
                          <div className="h6 mb-1">Grill Pork Chop</div>
                          <div className="">$12.99</div>
                          <div className="small mb-2">- size: large</div>
                          <div className="d-flex">
                            <a href="#" className="btn btn-secondary btn-sm"><i className="fa fa-minus" /></a>
                            <input
                              type="number"
                              className="form-control w-50px form-control-sm mx-2 bg-white bg-opacity-25 bg-white bg-opacity-25 text-center"
                              value="01"
                            />
                            <a href="#" className="btn btn-secondary btn-sm"><i className="fa fa-plus" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row d-flex align-items-center">
                      <div className="col-md-2 d-flex align-items-center">
                        <input type="checkbox" />
                      </div>
                      <div className="col-md-3">
                        <div className="img">
                          <img src="assets/img/chicken-item.jpeg" alt="" style={{ width: '4.5rem', height: '4.5rem' }} />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="flex-1">
                          <div className="h6 mb-1">Grill Pork Chop</div>
                          <div className="">$12.99</div>
                          <div className="small mb-2">- size: large</div>
                          <div className="d-flex">
                            <a href="#" className="btn btn-secondary btn-sm"><i className="fa fa-minus" /></a>
                            <input
                              type="number"
                              className="form-control w-50px form-control-sm mx-2 bg-white bg-opacity-25 bg-white bg-opacity-25 text-center"
                              value="01"
                            />
                            <a href="#" className="btn btn-secondary btn-sm"><i className="fa fa-plus" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-grid align-items-center">
                <div className="setvaluecash">
                  <ul>
                    <li>
                      <a href="javascript:void(0);" className="paymentmethod">
                        <img src="assets/img/icons/cash.svg" alt="img" className="me-2" />
                        Cash
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="paymentmethod">
                        <img src="assets/img/icons/debitcard.svg" alt="img" className="me-2" />
                        Debit
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="paymentmethod">
                        <img src="assets/img/icons/bank.png" alt="img" className="me-2" style={{ width: '30px' }} />
                        Bank
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer text-end" style={{ display: 'inline-block' }}>
            <button type="button" className="btn btn-danger">Proceed To Payment</button>
          </div>
        </div>
    </Modal>
  );
}

export default SplitPaymentModal;
