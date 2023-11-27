import React from 'react';

function PayStackCredential() {
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0 h6">PayStack Credential</h5>
        </div>
        <div className="card-body">
          <form className="form-horizontal" action="#" method="POST">
            <input type="hidden" name="_token" value="UVKhQxopkegphIQXnPsXHJqeTHrcTCTfpDw9BGUM" />
            <input type="hidden" name="payment_method" value="paystack" />
            <div className="form-group mb-2">
              <label className="col-from-label">PUBLIC KEY</label>
              <input
                type="text"
                className="form-control"
                name="PAYSTACK_PUBLIC_KEY"
                value=""
                placeholder="PUBLIC KEY"
                required
              />
            </div>
            <div className="form-group mb-2">
              <label className="col-from-label">SECRET KEY</label>
              <input
                type="text"
                className="form-control"
                name="PAYSTACK_SECRET_KEY"
                value=""
                placeholder="SECRET KEY"
                required
              />
            </div>
            <div className="form-group mb-2">
              <label className="col-from-label">MERCHANT EMAIL</label>
              <input
                type="text"
                className="form-control"
                name="MERCHANT_EMAIL"
                value=""
                placeholder="MERCHANT EMAIL"
                required
              />
            </div>
            <div className="form-group mb-2">
              <label className="col-from-label">PAYSTACK CURRENCY CODE</label>
              <input
                type="text"
                className="form-control"
                name="PAYSTACK_CURRENCY_CODE"
                value=""
                placeholder="PAYSTACK CURRENCY CODE"
                required
              />
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

export default PayStackCredential;
