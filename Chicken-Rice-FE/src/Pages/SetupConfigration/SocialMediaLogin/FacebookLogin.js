import React from 'react';

function FacebookLogin() {
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0 h6">Facebook Login Credential</h5>
        </div>
        <div className="card-body">
          <form className="form-horizontal row" action="#">
            {/* App ID */}
            <div className="form-group col-md-6 mb-2">
              <label>App ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Facebook Client ID"
              />
            </div>
            {/* App Secret */}
            <div className="form-group col-md-6 mb-2">
              <label>App Secret</label>
              <input
                type="text"
                className="form-control"
                placeholder="Facebook Client Secret"
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
  );
}

export default FacebookLogin;
