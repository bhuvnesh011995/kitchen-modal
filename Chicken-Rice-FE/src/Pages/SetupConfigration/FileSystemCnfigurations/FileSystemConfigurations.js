import React from 'react';
import MainPage from '../../../Components/Common/MainPage';
function FileSystemCredentials() {
  return (
    <MainPage title={"File System Credentials"}>         
    <div className="row">
      <div className="col-md-9">
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">S3 File System Credentials</h5>
          </div>
          <div className="card-body">
            <form className="form-horizontal row" action="#">
              {/* AWS_ACCESS_KEY_ID */}
              <div className="form-group col-md-6 mb-2">
                <label>AWS_ACCESS_KEY_ID</label>
                <input
                  type="text"
                  name="AWS_ACCESS_KEY_ID"
                  className="form-control"
                  placeholder="AWS_ACCESS_KEY_ID"
                />
              </div>
              {/* AWS_SECRET_ACCESS_KEY */}
              <div className="form-group col-md-6 mb-2">
                <label>AWS_SECRET_ACCESS_KEY</label>
                <input
                  type="text"
                  name="AWS_SECRET_ACCESS_KEY"
                  className="form-control"
                  placeholder="AWS_SECRET_ACCESS_KEY"
                />
              </div>
              {/* AWS_DEFAULT_REGION */}
              <div className="form-group col-md-6 mb-2">
                <label>AWS_DEFAULT_REGION</label>
                <input
                  type="text"
                  name="AWS_DEFAULT_REGION"
                  className="form-control"
                  value="us-east-1"
                />
              </div>
              {/* AWS_BUCKET */}
              <div className="form-group col-md-6 mb-2">
                <label>AWS_BUCKET</label>
                <input
                  type="text"
                  name="AWS_BUCKET"
                  className="form-control"
                  placeholder="AWS_BUCKET"
                />
              </div>
              {/* AWS_URL */}
              <div className="form-group col-md-6 mb-2">
                <label>AWS_URL</label>
                <input
                  type="text"
                  name="AWS_URL"
                  className="form-control"
                  placeholder="AWS_URL"
                />
              </div>
              <div className="text-right">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">S3 File System Activation</h5>
          </div>
          <div className="card-body text-center">
            <input type="checkbox" id="switch0" data-switch="none" />
            <label htmlFor="switch0" data-on-label="" data-off-label=""></label>
          </div>
        </div>
      </div>
    </div>
    </MainPage>
  );
}

export default FileSystemCredentials;
