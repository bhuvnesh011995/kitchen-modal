import React from 'react';

export default function PaypalCredentials() {
  return (
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Paypal Credentials</h5>
          </div>
          <div className="card-body">
            <form className="form-horizontal" action="#" method="POST">
              <div className="form-group mb-2">
                <label for="PAYPAL_CLIENT_ID" className="col-form-label">Paypal Client ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="PAYPAL_CLIENT_ID"
                  name="PAYPAL_CLIENT_ID"
                  value=""
                  placeholder="Paypal Client ID"
                  required
                />
              </div>
              <div className="form-group mb-2">
                <input type="hidden" name="types[]" value="PAYPAL_CLIENT_SECRET" />
                <label for="PAYPAL_CLIENT_SECRET" className="col-form-label">Paypal Client Secret</label>
                <input
                  type="text"
                  className="form-control"
                  id="PAYPAL_CLIENT_SECRET"
                  name="PAYPAL_CLIENT_SECRET"
                  value=""
                  placeholder="Paypal Client Secret"
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label for="paypal_sandbox" className="col-form-label">Paypal Sandbox Mode</label>
                <div className="switch">
                  <input type="checkbox" id="switch0" data-switch="none" />
                  <label for="switch0" data-on-label="" data-off-label=""></label>
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
