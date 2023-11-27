import React from 'react'

export default function NagadCredential() {
  return (
    <div className="col-md-6">
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0 h6">Nagad Credential</h5>
      </div>
      <div className="card-body">
        <form
          className="form-horizontal"
          action="http://127.0.0.1:8000/admin/payment_method_update"
          method="POST"
        >
          <input type="hidden" name="_token" value="UVKhQxopkegphIQXnPsXHJqeTHrcTCTfpDw9BGUM" />
          <input type="hidden" name="payment_method" value="nagad" />
          <div className="form-group mb-2">
            <label className="col-form-label">NAGAD MODE</label>
            <input
              type="text"
              className="form-control"
              name="NAGAD_MODE"
              value=""
              placeholder="NAGAD MODE"
              required
            />
          </div>
          <div className="form-group mb-2">
            <label className="col-form-label">NAGAD MERCHANT ID</label>
            <input
              type="text"
              className="form-control"
              name="NAGAD_MERCHANT_ID"
              value=""
              placeholder="NAGAD MERCHANT ID"
              required
            />
          </div>
          <div className="form-group mb-2">
            <label className="col-form-label">NAGAD MERCHANT NUMBER</label>
            <input
              type="text"
              className="form-control"
              name="NAGAD_MERCHANT_NUMBER"
              value=""
              placeholder="NAGAD MERCHANT NUMBER"
              required
            />
          </div>
          <div className="form-group mb-2">
            <label className="col-form-label">NAGAD PG PUBLIC KEY</label>
            <input
              type="text"
              className="form-control"
              name="NAGAD_PG_PUBLIC_KEY"
              value=""
              placeholder="NAGAD PG PUBLIC KEY"
              required
            />
          </div>
          <div className="form-group mb-2">
            <label className="col-form-label">NAGAD MERCHANT PRIVATE KEY</label>
            <input
              type="text"
              className="form-control"
              name="NAGAD_MERCHANT_PRIVATE_KEY"
              value=""
              placeholder="NAGAD MERCHANT PRIVATE KEY"
              required
            />
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
