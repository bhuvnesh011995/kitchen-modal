import React from 'react';
import { Modal } from "react-bootstrap";

export default function ViewOrder({show,setShow,selectedOrder}) {
  console.log(selectedOrder)
    return (
    <Modal size="xl" show={show} onHide={() => setShow(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Order Details</Modal.Title>
    </Modal.Header>

    <Modal.Body>
            <div className="row">
              <div className="col-lg-5 col-xl-4">
                {/* Card 1 */}
                <div className="card mb-3" style={{ border: '1px solid #800' }}>
                  <div className="card-body">
                    {/* Card Header */}
                    <div className="card-header text-center" style={{ border: '1px solid #800', backgroundColor: 'rgb(136 0 0 / 7%)', color: '#800' }}>
                      <h4 className="card-title mb-0">{selectedOrder.orderId}</h4>
                    </div>
                    <div className="basic-list-group">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item px-0 d-flex justify-content-between">
                          Order Type
                          <span>Takeaway</span>
                          <input type="hidden" name="order_type" id="order_type" value="2" />
                        </li>
                        <li className="list-group-item px-0 d-flex justify-content-between">
                          Payment Type
                          <span>{selectedOrder.payMentMode}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="card border-0 mb-3">
                  <div className="card-body">
                    <div className="media d-flex align-items-center mb-2">
                      <img src="assets/images/users/avatar-1.jpg" alt="user-image" width="50" className="rounded-circle" />
                      <h3 className="mb-0 mx-3">
                        {selectedOrder.customerName}
                      </h3>
                    </div>
                    <div className="basic-list-group">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item px-0 d-flex align-items-center">
                          <h5 className="m-2"><i className="uil-phone-alt"></i></h5>
                        {selectedOrder.contact}
                        </li>
                        <li className="list-group-item px-0 d-flex align-items-center">
                          <h5 className="m-2"><i className="uil-envelope-alt"></i></h5>
                          {selectedOrder.email}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-xl-8">
                <div className="row">
                  <div className="col-md-12 my-2 d-flex justify-content-end">
                    <a href="#" className="btn btn-info mx-1">
                      <i className="uil-document" aria-hidden="true"></i> Print
                    </a>
                    <button type="button" className="btn btn-sm btn-dark dropdown-toggle" data-bs-toggle="dropdown">
                      Action
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item w-auto">Accept</a>
                      <a className="dropdown-item w-auto">Ready</a>
                      <a className="dropdown-item w-auto">Ready for pickup</a>
                      <a className="dropdown-item w-auto">Complete</a>
                      <a className="dropdown-item w-auto">Reject</a>
                    </div>
                  </div>
                </div>
                <div className="card border-0 mb-3">
                  <div className="card-body">
                    <div className="progress-barrr">
                      <div className="progress-step is-active">
                        <div className="step-count">      <i className="fas fa-bell"></i></div>
                        <div className="step-description">New order</div>
                      </div>
                      <div className="progress-step">
                        <div className="step-count" ><i className="fas fa-list-ul"></i></div>
                        <div className="step-description">Preparing</div>
                      </div>
                      <div className="progress-step">
                        <div className="step-count">    <i className="fas fa-thumbs-up"></i></div>
                        <div className="step-description">Ready</div>
                      </div>
                      <div className="progress-step">
                        <div className="step-count"> <i className="fas fa-clock"></i></div>
                        <div className="step-description">Waiting pickup</div>
                      </div>
                      <div className="progress-step">
                        <div className="step-count" style={{backgroundColor:'brown'}}> <i className="fas fa-check" ></i></div>
                        <div className="step-description">Completed</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card border-0 mb-3">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table" style={{ minWidth: '100%', tableLayout: 'auto' }}>
                        <thead>
                          <tr>
                            <th>S.No</th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Addons</th>
                            <th>customerNote</th>
                            <th className="text-end">Unit cost</th>
                            <th className="text-end">Qty</th>
                            <th className="text-end">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td><img src="assets/images/users/avatar-1.jpg" className="rounded-circle" width="50" alt="" /></td>
                            <td>
                              <img src="assets/images/veg.png" className="item-type-img" width="15" alt="" />
                              {selectedOrder.product} <br />
                            </td>
            
                            <td>{selectedOrder.addons}</td>
                            <td>{selectedOrder.note}</td>
                            <td className="text-end">{selectedOrder.cost}$</td>
                            <td className="text-end">{selectedOrder.qty}</td>
                            <td className="text-end">{selectedOrder.totalcosts}$</td>
                          </tr>
                          <tr>
                            <td className="text-end" colSpan="8"> <strong>Subtotal</strong> </td>
                            <td className="text-end"><strong>{selectedOrder.totalcosts}$</strong></td>
                          </tr>
                          <tr>
                            <td className="text-end" colSpan="8"> <strong>Tax</strong> </td>
                            <td className="text-end"><strong>0.00$</strong></td>
                          </tr>
                          <tr>
                            <td className="text-end" colSpan="8"> <strong>Total Amount</strong></td>
                            <td className="text-end"><strong>{selectedOrder.totalcosts}$</strong></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <style>
        {`
          .table-wrapper {
              width: 100%;
              margin: auto;
              background: #fff;
              padding: 20px;
              box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
          }

          .table-title {
              padding-bottom: 10px;
              margin: 0 0 10px;
          }

          .table-title h2 {
              margin: 6px 0 0;
              font-size: 22px;
          }

          .table-title .add-new {
              float: right;
              height: 30px;
              font-weight: bold;
              font-size: 12px;
              text-shadow: none;
              min-width: 100px;
              border-radius: 50px;
              line-height: 13px;
          }

          .table-title .add-new i {
              margin-right: 4px;
          }

          table.table tr th,
          table.table tr td {
              border-color: #e9e9e9;
          }

          table.table th i {
              font-size: 13px;
              margin: 0 5px;
              cursor: pointer;
          }

          table.table th:last-child {
              width: 100px;
          }

          table.table td a {
              cursor: pointer;
              display: inline-block;
              margin: 0 2px;
              min-width: 20px;
          }

          table.table td a.add {
              color: #27C46B;
          }

          table.table td a.edit {
              color: #FFC107;
          }

          table.table td a delete {
              color: #E34724;
          }

          table.table td i {
              font-size: 19px;
          }

          table.table td a.add i {
              font-size: 24px;
              margin-right: -1px;
              position: relative;
              top: 3px;
          }

          table.table .form-control {
              height: 32px;
              line-height: 32px;
              box-shadow: none;
              border-radius: 2px;
          }

          table.table .form-control.error {
              border-color: #f50000;
          }

          table.table td .add {
              display: none;
          }

          .progress-barrr {
              width: 100%;
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
          }

          .progress-step {
              text-align: center;
              position: relative;
              z-index: 1;
          }

          .progress-step:before,
          .progress-step:after {
              background-color: #800;
              content: "";
              height: 2px;
              position: absolute;
              z-index: -1;
              top: 15px;
          }

          @media screen and (min-width: 640px) {
              .progress-step:first-of-type:before {
                  right: 50%;
                  width: 50%;
              }
          }

          .progress-step .step-count {
              background-color: #fff;
              height: 35px;
              width: 35px;
              margin: 0 auto;
              border-radius: 50%;
              color: #800;
              line-height: 35px;
              z-index: 100;
              border: 1px solid #800;
              font-size: 1rem;
              font-weight: 500;
          }

          .progress-step.is-active .step-description {
              font-weight: 500;
          }

          .step-description {
              font-size: 0.8rem;
          }

          .progress-step.is-active:after {
              background-color: gray;
          }

          .progress-step:after {
              left: 50%;
              width: 100%;
          }

          .progress-step:last-of-type:after {
              left: 50%;
              width: 50%;
          }
        `}
      </style>
                </div>
              </div>
            </div>
        
            <div className="modal-footer d-flex justify-content-end">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        
    
    </Modal.Body>
    
    </Modal>
  );
};

