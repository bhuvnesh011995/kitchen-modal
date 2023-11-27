import React from 'react';

export default function StripeCredentials() {
  return (
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Stripe Credentials</h5>
          </div>
          <div className="card-body">
            <form className="form-horizontal" action="#" method="POST">
              <div className="form-group mb-2">
                <label for="STRIPE_KEY" className="col-form-label">STRIPE KEY</label>
                <input
                  type="text"
                  className="form-control"
                  id="STRIPE_KEY"
                  name="STRIPE_KEY"
                  value=""
                  placeholder="STRIPE KEY"
                  required
                />
              </div>
              <div className="form-group mb-2">
                <input type="hidden" name="types[]" value="STRIPE_SECRET" />
                <label for="STRIPE_SECRET" className="col-form-label">STRIPE SECRET</label>
                <input
                  type="text"
                  className="form-control"
                  id="STRIPE_SECRET"
                  name="STRIPE_SECRET"
                  value=""
                  placeholder="STRIPE SECRET"
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
  );
}
