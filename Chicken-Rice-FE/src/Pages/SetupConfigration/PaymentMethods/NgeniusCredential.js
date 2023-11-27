import React from 'react';

function NgeniusCredential() {
  return (
    <div className="col-lg-6">
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0 h6">Ngenius Credential</h5>
        </div>
        <div className="card-body">
          <form className="form-horizontal" action="#" method="POST">
            <input type="hidden" name="payment_method" value="ngenius" />
            <div className="form-group mb-2">
              <label className="col-form-label">NGENIUS OUTLET ID</label>
              <input
                type="text"
                className="form-control"
                name="NGENIUS_OUTLET_ID"
                value=""
                placeholder="NGENIUS OUTLET ID"
                required
              />
            </div>
            <div className="form-group mb-2">
              <label className="col-form-label">NGENIUS API KEY</label>
              <input
                type="text"
                className="form-control"
                name="NGENIUS_API_KEY"
                value=""
                placeholder="NGENIUS API KEY"
                required
              />
            </div>
            <div className="form-group mb-2">
              <label className="col-form-label">NGENIUS CURRENCY</label>
              <input
                type="text"
                className="form-control"
                name="NGENIUS_CURRENCY"
                value=""
                placeholder="NGENIUS CURRENCY"
                required
              />
              <br />
              <div className="alert alert-primary" role="alert">
                Currency must be <b>AED</b> or <b>USD</b> or <b>EUR</b>
                <br />
                If kept empty, <b>AED</b> will be used automatically
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

export default NgeniusCredential;
