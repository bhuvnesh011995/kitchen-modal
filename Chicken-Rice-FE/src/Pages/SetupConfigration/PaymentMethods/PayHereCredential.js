import React from 'react';

function PayHereCredential() {
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0 h6">Payhere Credential</h5>
        </div>
        <div className="card-body">
          <form className="form-horizontal" action="#" method="POST">
            <input type="hidden" name="_token" value="UVKhQxopkegphIQXnPsXHJqeTHrcTCTfpDw9BGUM" />
            <input type="hidden" name="payment_method" value="payhere" />
            <div className="form-group mb-2">
              <label className="col-form-label">PAYHERE MERCHANT ID</label>
              <input
                type="text"
                className="form-control"
                name="PAYHERE_MERCHANT_ID"
                value=""
                placeholder="PAYHERE MERCHANT ID"
                required
              />
            </div>
            <div className="form-group mb-2">
              <label className="col-form-label">PAYHERE SECRET</label>
              <input
                type="text"
                className="form-control"
                name="PAYHERE_SECRET"
                value=""
                placeholder="PAYHERE SECRET"
                required
              />
            </div>
            <div className="form-group mb-2">
              <label className="col-form-label">PAYHERE CURRENCY</label>
              <input
                type="text"
                className="form-control"
                name="PAYHERE_CURRENCY"
                value=""
                placeholder="PAYHERE CURRENCY"
                required
              />
            </div>
            <div className="form-group mb-2">
              <label className="col-form-label">Payhere Sandbox Mode</label>
              <div className="switch">
                <input type="checkbox" id="switch5" data-switch="none" />
                <label htmlFor="switch5" data-on-label="" data-off-label=""></label>
              </div>
            </div>
            <div className="form-group mb-0 text-right">
              <button type="submit" className="btn btn-sm btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PayHereCredential;
