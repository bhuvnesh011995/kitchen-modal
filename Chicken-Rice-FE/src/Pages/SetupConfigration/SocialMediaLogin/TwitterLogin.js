import React from 'react';

function TwitterLogin() {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Twitter Login Credential</h5>
          </div>
          <div className="card-body">
            <form className="form-horizontal row" action="#">
              {/* Client ID */}
              <div className="form-group col-md-6 mb-2">
                <label>Client ID</label>
                <input
                  type="text"
                  name="Twitter_Client_ID"
                  className="form-control"
                  placeholder="Twitter Client ID"
                />
              </div>
              {/* Client Secret */}
              <div className="form-group col-md-6 mb-2">
                <label>Client Secret</label>
                <input
                  type="text"
                  name="Twitter_Client_Secret"
                  className="form-control"
                  placeholder="Twitter Client Secret"
                />
              </div>
              <div className="text-end">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwitterLogin;
