import React from 'react';
import MainPage from '../../Components/Common/MainPage';

export default function FeaturesActivation() {
  return (
    <MainPage title={"Features Activation"}>
      <h4 className="text-center fw-bold activation-title col-lg-12">System</h4>
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6 text-center">HTTPS Activation</h5>
            </div>
            <div className="card-body text-center">
              <input type="checkbox" id="switch0" data-switch="none" />
              <label htmlFor="switch0" data-on-label="" data-off-label=""></label>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6 text-center">Maintenance Mode Activation</h5>
            </div>
            <div className="card-body text-center">
              <input type="checkbox" id="switch1" data-switch="none" />
              <label htmlFor="switch1" data-on-label="" data-off-label=""></label>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6 text-center">Disable image optimization?</h5>
            </div>
            <div className="card-body text-center">
              <input type="checkbox" id="switch2" data-switch="none" />
              <label htmlFor="switch2" data-on-label="" data-off-label=""></label>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
      <h4 class="text-center fw-bold activation-title">Business Related</h4>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="mb-0 h6 text-center">Vendor System Activation</h5>
                                    </div>
                                    <div class="card-body text-center">
                                        <input type="checkbox" id="switch3" data-switch="none" />
                                        <label for="switch3" data-on-label="" data-off-label=""></label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="mb-0 h6 text-center">Classified Product</h5>
                                    </div>
                                    <div class="card-body text-center">
                                        <input type="checkbox" id="switch4" data-switch="none" />
                                        <label for="switch4" data-on-label="" data-off-label=""></label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="mb-0 h6 text-center">Wallet System Activation</h5>
                                    </div>
                                    <div class="card-body text-center">
                                        <input type="checkbox" id="switch5" data-switch="none" />
                                        <label for="switch5" data-on-label="" data-off-label=""></label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="mb-0 h6 text-center">Coupon System Activation</h5>
                                    </div>
                                    <div class="card-body text-center">
                                        <input type="checkbox" id="switch6" data-switch="none" />
                                        <label for="switch6" data-on-label="" data-off-label=""></label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="mb-0 h6 text-center">Pickup Point Activation</h5>
                                    </div>
                                    <div class="card-body text-center">
                                        <input type="checkbox" id="switch7" data-switch="none" />
                                        <label for="switch7" data-on-label="" data-off-label=""></label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="mb-0 h6 text-center">Conversation Activation</h5>
                                    </div>
                                    <div class="card-body text-center">
                                        <input type="checkbox" id="switch8" data-switch="none" />
                                        <label for="switch8" data-on-label="" data-off-label=""></label>
                                    </div>
                                </div>
                            </div>
                            </div>

      </div>
    </MainPage>
  );
}
