import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function AddNew({ addNew,
  update,
  data,
  setData,show, setShow }) {
    const {register,reset,formState:{errors},handleSubmit}=useForm()
  const [currency, setCurrency] = useState({});
  const [ready,setReady] = useState(false)

  useEffect(()=>{
    if(ready&&data) reset(data)
    else setReady(true)
  return ()=>{
    if(ready) setData(null)
  } 
  },[ready])


  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Currency</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form className="needs-validation" onSubmit={handleSubmit(()=>{
           data?update(data._id,currency):addNew(currency)
        })}>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="currencyName"> Name</label>
                <input
                {...register("name",{required:"this is required filed",onChange:e=>setCurrency(preVal=>({...preVal,name:e.target.value}))})}
                  type="text"
                  className="form-control"
                  placeholder="Enter Currency Name"
                />
                {errors.name && <span style={{color:"red"}}>{errors.name.message}</span>}
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="currencySymbol"> Symbol</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Currency Symbol"
                  {...register("symbol",{required:"this is required filed",onChange:e=>setCurrency(preVal=>({...preVal,symbol:e.target.value}))})}
                />
                {errors.symbol && <span style={{color:"red"}}>{errors.symbol.message}</span>}
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="currencyCode"> Code</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Currency Code"
                  {...register("code",{required:"this is required filed",onChange:e=>setCurrency(preVal=>({...preVal,code:e.target.value}))})}
                />
                {errors.code && <span style={{color:"red"}}>{errors.code.message}</span>}
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="currencyExchangeRate"> Exchange Rate</label>
                <input
                  {...register("exchangeRate",{required:"this is required filed",onChange:e=>setCurrency(preVal=>({...preVal,exchangeRate:e.target.value}))})}
                  type="number"
                  className="form-control"
                  placeholder="Enter Exchange Rate"
                />
                {errors.exchangeRate && <span style={{color:"red"}}>{errors.exchangeRate.message}</span>}
              </div>
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-end">
            <button
              onClick={() => setShow(false)}
              type="button"
              className="btn btn-danger"
            >
              Close
            </button>
            <button type="submit"className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
