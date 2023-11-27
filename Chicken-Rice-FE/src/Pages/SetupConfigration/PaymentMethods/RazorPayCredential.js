import React from 'react';

function RazorPayCredential() {
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0 h6">RazorPay Credential</h5>
        </div>
        <div className="card-body">
          <form className="form-horizontal" action="#" method="POST">
            <input type="hidden" name="_token" value="UVKhQxopkegphIQXnPsXHJqeTHrcTCTfpDw9BGUM" />
            <input type="hidden" name="payment_method" value="razorpay" />
            <div className="form-group mb-2">
              <label className="col-from-label">RAZOR KEY</label>
              <input
                type="text"
                className="form-control"
                name="RAZOR_KEY"
                value=""
                placeholder="RAZOR KEY"
                required
              />
            </div>
            <div className="form-group mb-2">
              <input type="hidden" name="types[]" value="RAZOR_SECRET" />
              <label className="col-from-label">RAZOR SECRET</label>
              <input
                type="text"
                className="form-control"
                name="RAZOR_SECRET"
                value=""
                placeholder="RAZOR SECRET"
                required
              />
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

export default RazorPayCredential;
