import React from 'react';
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NewTable({ show, setShow }) {
  const navigate = useNavigate();

  return (
    <Modal  show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Table</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <label htmlFor="tableNumber">Table Number</label>
              <input
                type="text"
                className="form-control"
                id="tableNumber"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <label htmlFor="sittingCapacity">Sitting Capacity</label>
              <input
                type="text"
                className="form-control"
                id="sittingCapacity"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-md-12">
            <button className="btn btn-primary btn-sm">Generate QR Code</button>
          </div>
          <div className="col-md-12">
          <img src="https://img.freepik.com/premium-vector/qr-code-vector-icon_389832-989.jpg" alt="" className="img-fluid my-2" style={{ width: '100px' }} />
           </div>
        </div>
        <div className="col-md-12">
        <button type="button" class="btn btn-primary ">Add Table</button>

          </div>
      </Modal.Body>
    
    </Modal>
  );
}
