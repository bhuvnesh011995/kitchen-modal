import React from 'react'
import MainPage from '../../../Components/Common/MainPage'
export default function SMPTSetting() {
  return (
    <MainPage title={"SMT SETTING"}>
    <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <form action="#">
              <div className="form-group">
                <label className="col-form-label">Type</label>
                <select className="form-select mb-2 mb-md-0" id="mailTypeSelect">
                  <option value="smtp">SMTP</option>
                  <option value="mailgun">Mailgun</option>
                </select>
              </div>
              <div id="smtp" className="mt-2">
                <div className="form-group mb-2">
                  <label className="col-from-label">MAIL HOST</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="mailhog"
                    placeholder="MAIL HOST"
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="col-from-label">MAIL PORT</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="1025"
                    placeholder="MAIL PORT"
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="col-from-label">MAIL USERNAME</label>
                  <input
                    type="text"
                    className="form-control"
                    value=""
                    placeholder="MAIL USERNAME"
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="col-from-label">MAIL PASSWORD</label>
                  <input
                    type="text"
                    className="form-control"
                    value=""
                    placeholder="MAIL PASSWORD"
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="col-from-label">MAIL ENCRYPTION</label>
                  <input
                    type="text"
                    className="form-control"
                    value=""
                    placeholder="MAIL ENCRYPTION"
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="col-from-label">MAIL FROM ADDRESS</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="hello@example.com"
                    placeholder="MAIL FROM ADDRESS"
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="col-from-label">MAIL FROM NAME</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Laravel"
                    placeholder="MAIL FROM NAME"
                  />
                </div>
              </div>
              <div id="mailgun" style={{ display: 'none' }} className="mt-2">
                <div className="form-group mb-2">
                  <label className="col-from-label">MAILGUN DOMAIN</label>
                  <input
                    type="text"
                    className="form-control"
                    value=""
                    placeholder="MAILGUN DOMAIN"
                  />
                </div>
                <div className="form-group">
                  <label className="col-from-label">MAILGUN SECRET</label>
                  <input
                    type="text"
                    className="form-control"
                    value=""
                    placeholder="MAILGUN SECRET"
                  />
                </div>
              </div>
              <div className="form-group mb-0 mt-3 text-end">
                <button type="submit" className="btn btn-primary">Save Configuration</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Test SMTP configuration</h5>
          </div>
          <div className="card-body">
            <form action="#" method="post">
              <div className="row">
                <div className="col">
                  <input type="email" className="form-control" name="email" value="superadmin@gmail.com" placeholder="Enter your email address" />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary">Send test email</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Instruction</h5>
          </div>
          <div className="card-body">
            <p className="text-danger">Please be careful when configuring SMTP. Incorrect configuration can result in errors during order placement, new registrations, and newsletter sending.</p>
            <h5 className="fw-bold" style={{ color: '#800000' }}>For Non-SSL</h5>
            <ul className="list-group">
              <li className="list-group-item text-dark">Select 'sendmail' for Mail Driver if you face any issues after configuring SMTP as the Mail Driver.</li>
              <li className="list-group-item text-dark">Set Mail Host according to your server Mail Client Manual Settings.</li>
              <li className="list-group-item text-dark">Set Mail port as 587.</li>
              <li className="list-group-item text-dark">Set Mail Encryption as SSL if you face issues with TLS.</li>
            </ul>
            <br />
            <h5 className="fw-bold" style={{ color: '#800000' }}>For SSL</h5>
            <ul className="list-group mar-no">
              <li className="list-group-item text-dark">Select 'sendmail' for Mail Driver if you face any issues after configuring SMTP as the Mail Driver.</li>
              <li className="list-group-item text-dark">Set Mail Host according to your server Mail Client Manual Settings.</li>
              <li className="list-group-item text-dark">Set Mail port as 465.</li>
              <li className="list-group-item text-dark">Set Mail Encryption as SSL.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  </MainPage>
    )
}
