import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomerNote({ shows, setShows ,customerNotes, setCustomerNotes ,selectedItemIndex ,handleSaveCustomerNote}) {


  return (
    <Modal show={shows} onHide={() => setShows(false)}>
       <Modal.Header closeButton>
          <Modal.Title>Customer Note</Modal.Title>
        </Modal.Header>
      <div className="modal-body">
        <div className="row">
          <div className="col-md-12">
          <textarea
  name=""
  id=""
  cols="30"
  rows="10"
  className="form-control"
  style={{ height: '70px' }}
  placeholder="Enter Customer Notes Here"
  value={customerNotes[selectedItemIndex] || ''}
  onChange={(e) => {
    const updatedCustomerNotes = [...customerNotes];
    updatedCustomerNotes[selectedItemIndex] = e.target.value;
    setCustomerNotes(updatedCustomerNotes); 
  }}
></textarea>
          </div>
        </div>
      </div>
      <div className="modal-footer text-end" style={{ justifyContent: 'center' }}>
        <button type="button" className="btn btn-danger"  onClick={handleSaveCustomerNote} >Save</button>
      </div>
</Modal>

  );
}

export default CustomerNote;




// {parseInt(product.ingradients[0].quantity, 10) === 0 && (
//   <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

// <div className="not-available" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', fontSize: '16px', fontWeight: 'bold' }}>
//    Not Available

//    </div>
//    </div>
//   )}