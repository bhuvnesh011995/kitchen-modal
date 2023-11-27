import React from 'react';

function VoguePayCredential() {
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0 h6">VoguePay Credential</h5>
        </div>
        <div className="card-body">
          <form className="form-horizontal" action="#" method="POST">
            <div className="form-group mb-2">
              <label className="col-form-label">MERCHANT ID</label>
              <input
                type="text"
                className="form-control"
                name="VOGUE_MERCHANT_ID"
                value=""
                placeholder="MERCHANT ID"
                required
              />
            </div>
            <div className="form-group mb-2">
              <label className="col-form-label">Sandbox Mode</label>
              <div className="switch">
                <input type="checkbox" id="switch10" data-switch="none" />
                <label htmlFor="switch10" data-on-label="" data-off-label=""></label>
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

export default VoguePayCredential;
