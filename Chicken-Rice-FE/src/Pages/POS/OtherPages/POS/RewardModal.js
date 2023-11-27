import React from 'react';
import { Modal } from 'react-bootstrap';

export default function RewardModal({ show, setShow }) {
  return (
    <Modal show={show} onHide={() => setShow(false)} >
      <div>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Rewards</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <div className="container2">
                <div className="card2">
                  <div className="main">
                    <div className="co-img">
                      <img src="assets/img/logo.png" alt="" className="img-fluid" />
                    </div>
                    <div className="vertical"></div>
                    <div className="content">
                      <h2>Mr. Chicken Rice</h2>
                      <h1>10% <span>Coupon</span></h1>
                      <p>Valid till 30 April 2024</p>
                    </div>
                  </div>
                  <div className="copy-button">
                    <input id="copyvalue" type="text" readOnly value="GOFREE" />
                    <button  className="copybtn">
                      COPY
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer text-end" style={{ display: 'inline-block' }}>
              <button type="button" className="btn btn-danger">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
