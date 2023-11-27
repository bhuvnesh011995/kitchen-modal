import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function CouponCode({ show, setShow }) {
  return (
    <Modal show={show} onHide={() => setShow(false)} size="lg">
          <Modal.Header closeButton>
          <Modal.Title>Coupton Code</Modal.Title>
        </Modal.Header>
            <div className="modal-body">
              <h4 style={{ textAlign: 'left' }}>Enter Code</h4>
              <div className="row">
                <div className="col-md-12 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Please Enter Gift Card or Coupon Code"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer" style={{ textAlign: 'center', display: 'inline-block' }}>
              <Button variant="danger">Apply</Button>
            </div>
    </Modal>
  );
}
