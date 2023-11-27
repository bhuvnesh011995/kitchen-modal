import axios from "axios";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import BASEURL from "../../../Config/Config";

let initialState = {
  name: "",
  exchangeRate: "",
  code: "",
  symbol: "",
};

export default function AddNew({ show, setShow }) {
  const [currency, setCurrency] = useState(initialState);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("name", currency.name);
      formData.append("code", currency.code);
      formData.append("symbol", currency.symbol);
      formData.append("exchangeRate", currency.exchangeRate);

      let response = await axios({
        url: BASEURL + "/currency",
        method: "POST",
        data: formData,
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        setShow(false);
      } else {
        // Handle other cases if needed
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Currency</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form className="needs-validation" onSubmit={(e) => handleSubmit(e)}>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="currencyName"> Name</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder=""
                  onChange={(e) =>
                    setCurrency((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="currencySymbol"> Symbol</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder=""
                  onChange={(e) =>
                    setCurrency((prev) => ({
                      ...prev,
                      symbol: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="currencyCode"> Code</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder=""
                  onChange={(e) =>
                    setCurrency((prev) => ({
                      ...prev,
                      code: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="currencyExchangeRate"> Exchange Rate</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder=""
                  onChange={(e) =>
                    setCurrency((prev) => ({
                      ...prev,
                      exchangeRate: e.target.value,
                    }))
                  }
                />
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
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
