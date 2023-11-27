import React from 'react';

function ProxyPayCredential() {
  return (
    <div className="col-lg-6">
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0 h6">ProxyPay Credential</h5>
        </div>
        <div className="card-body">
          <form className="form-horizontal" action="#" method="POST">
            <div className="form-group mb-2">
              <label className="col-form-label">PROXYPAY_TOKEN</label>
              <input
                type="text"
                className="form-control"
                name="PROXYPAY_TOKEN"
                value=""
                placeholder="PROXYPAY TOKEN"
                required
              />
            </div>
            <div className="form-group mb-2">
              <label className="col-form-label">PROXYPAY_ENTITY</label>
              <input
                type="text"
                className="form-control"
                name="PROXYPAY_ENTITY"
                value=""
                placeholder="PROXYPAY_ENTITY"
                required
              />
            </div>
            <div className="form-group mb-2">
  <label className="col-form-label">PROXYPAY_END_TIME</label>
  <div className="input-group">
    <input
      type="text"
      className="form-control"
      name="PROXYPAY_END_TIME"
      value=""
      placeholder="PROXYPAY_END_TIME"
      required
    />
    <span className="input-group-text" id="inputGroupPrepend">
      days
    </span>
  </div>
</div>

            <div className="form-group mb-2">
              <label className="col-form-label">Sandbox Mode</label>
              <div className="switch">
                <input type="checkbox" id="switch7" data-switch="none" />
                <label htmlFor="switch7" data-on-label="" data-off-label=""></label>
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

export default ProxyPayCredential;
