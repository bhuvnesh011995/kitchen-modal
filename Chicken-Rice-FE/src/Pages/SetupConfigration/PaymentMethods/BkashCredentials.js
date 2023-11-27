import React from 'react'

export default function BkashCredentials() {
  return (
    <div className="col-md-6">
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0 h6">Bkash Credentials</h5>
      </div>
      <div className="card-body">
        <form className="form-horizontal" action="#" method="POST">
          <div className="form-group mb-2">
            <label htmlFor="BKASH_CHECKOUT_APP_KEY" className="col-form-label">
              BKASH CHECKOUT APP KEY
            </label>
            <input
              type="text"
              className="form-control"
              id="BKASH_CHECKOUT_APP_KEY"
              name="BKASH_CHECKOUT_APP_KEY"
              value=""
              placeholder="BKASH CHECKOUT APP KEY"
              required
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="BKASH_CHECKOUT_APP_SECRET" className="col-form-label">
              BKASH CHECKOUT APP SECRET
            </label>
            <input
              type="text"
              className="form-control"
              id="BKASH_CHECKOUT_APP_SECRET"
              name="BKASH_CHECKOUT_APP_SECRET"
              value=""
              placeholder="BKASH CHECKOUT APP SECRET"
              required
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="BKASH_CHECKOUT_USER_NAME" className="col-form-label">
              BKASH CHECKOUT USER NAME
            </label>
            <input
              type="text"
              className="form-control"
              id="BKASH_CHECKOUT_USER_NAME"
              name="BKASH_CHECKOUT_USER_NAME"
              value=""
              placeholder="BKASH CHECKOUT USER NAME"
              required
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="BKASH_CHECKOUT_PASSWORD" className="col-form-label">
              BKASH CHECKOUT PASSWORD
            </label>
            <input
              type="text"
              className="form-control"
              id="BKASH_CHECKOUT_PASSWORD"
              name="BKASH_CHECKOUT_PASSWORD"
              value=""
              placeholder="BKASH CHECKOUT PASSWORD"
              required
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="bkash_sandbox" className="col-form-label">
              Bkash Sandbox Mode
            </label>
            <div className="switch">
              <input type="checkbox" id="switch1" data-switch="none" />
              <label htmlFor="switch1" data-on-label="" data-off-label=""></label>
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
  )
}
