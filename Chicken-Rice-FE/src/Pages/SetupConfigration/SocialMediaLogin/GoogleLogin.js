import React from 'react';

function GoogleLoginCredential() {
  return (
    
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Google Login Credential</h5>
          </div>
          <div className="card-body">
            <form className="form-horizontal row" action="#">
              {/* Client ID */}
              <div className="form-group col-md-6 mb-2">
                <label>Client ID</label>
                <input
                  type="text"
                  name="Google_Client_ID"
                  className="form-control"
                  placeholder="Google Client ID"
                />
              </div>
              {/* Client Secret */}
              <div className="form-group col-md-6 mb-2">
                <label>Client Secret</label>
                <input
                  type="text"
                  name="Google_Client_Secret"
                  className="form-control"
                  placeholder="Google Client Secret"
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

export default GoogleLoginCredential;
