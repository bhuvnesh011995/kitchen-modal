import React from 'react';

function IyzicoCredential() {
  return (
    <div className="col-lg-6">
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0 h6">Iyzico Credential</h5>
        </div>
        <div className="card-body">
          <form className="form-horizontal" action="#" method="POST">
            <input type="hidden" name="_token" value="UVKhQxopkegphIQXnPsXHJqeTHrcTCTfpDw9BGUM" />
            <div className="form-group mb-2">
              <label className="col-form-label">IYZICO_API_KEY</label>
              <input
                type="text"
                className="form-control"
                name="IYZICO_API_KEY"
                value=""
                placeholder="IYZICO API KEY"
                required
              />
            </div>
            <div className="form-group mb-2">
              <input type="hidden" name="types[]" value="IYZICO_SECRET_KEY" />
              <label className="col-form-label">IYZICO_SECRET_KEY</label>
              <input
                type="text"
                className="form-control"
                name="IYZICO_SECRET_KEY"
                value=""
                placeholder="IYZICO SECRET KEY"
                required
              />
            </div>
            <div className="form-group mb-2">
              <label className="col-form-label">IYZICO Sandbox Mode</label>
              <div className="switch">
                <input type="checkbox" id="switch6" data-switch="none" />
                <label htmlFor="switch6" data-on-label="" data-off-label=""></label>
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

export default IyzicoCredential;
