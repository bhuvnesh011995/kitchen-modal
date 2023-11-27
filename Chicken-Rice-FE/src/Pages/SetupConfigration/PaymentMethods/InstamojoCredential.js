import React from 'react';

function InstamojoCredential() {
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0 h6">Instamojo Credential</h5>
        </div>
        <div className="card-body">
          <form className="form-horizontal" action="#" method="POST">
            <input type="hidden" name="payment_method" value="instamojo" />
            <div className="form-group mb-2">
              <input type="hidden" name="types[]" value="IM_API_KEY" />
              <label className="col-form-label">API KEY</label>
              <input
                type="text"
                className="form-control"
                name="IM_API_KEY"
                value=""
                placeholder="IM API KEY"
                required
              />
            </div>
            <div className="form-group mb-2">
              <label className="col-form-label">AUTH TOKEN</label>
              <input
                type="text"
                className="form-control"
                name="IM_AUTH_TOKEN"
                value=""
                placeholder="IM AUTH TOKEN"
                required
              />
            </div>
            <div className="form-group mb-2">
              <label className="col-form-label">Instamojo Sandbox Mode</label>
              <div className="switch">
                <input type="checkbox" id="switch4" data-switch="none" />
                <label htmlFor="switch4" data-on-label="" data-off-label=""></label>
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

export default InstamojoCredential;
