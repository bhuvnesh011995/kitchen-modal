import React from 'react';

export default function SslcommerzCredential() {
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0 h6">Sslcommerz Credential</h5>
        </div>
        <div className="card-body">
          <form className="form-horizontal" action="#" method="POST">
            <input type="hidden" name="_token" value="UVKhQxopkegphIQXnPsXHJqeTHrcTCTfpDw9BGUM" />
            <input type="hidden" name="payment_method" value="sslcommerz" />
            <div className="form-group mb-2">
              <label className="col-form-label">Sslcz Store Id</label>
              <input
                type="text"
                className="form-control"
                name="SSLCZ_STORE_ID"
                value=""
                placeholder="Sslcz Store Id"
                required
              />
            </div>
            <div className="form-group mb-2">
              <label className="col-form-label">Sslcz store password</label>
              <input
                type="text"
                className="form-control"
                name="SSLCZ_STORE_PASSWD"
                value=""
                placeholder="Sslcz store password"
                required
              />
            </div>
            <div className="form-group mb-2">
              <label className="col-form-label">Sslcommerz Sandbox Mode</label>
              <div className="switch">
                <input type="checkbox" id="switch2" data-switch="none" />
                <label htmlFor="switch2" data-on-label="" data-off-label=""></label>
              </div>
            </div>
            <div className="form-group mb-0 text-right">
              <button type="submit" className="btn btn-sm btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
