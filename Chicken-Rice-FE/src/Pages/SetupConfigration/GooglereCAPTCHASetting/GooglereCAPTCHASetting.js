import React, { useState } from 'react';
import MainPage from '../../../Components/Common/MainPage';
function GoogleRecaptchaSettings() {
    const [recaptchaEnabled, setRecaptchaEnabled] = useState(false);
    const [siteKey, setSiteKey] = useState('');

    const handleRecaptchaEnabledChange = (event) => {
        setRecaptchaEnabled(event.target.checked);
    };

    const handleSiteKeyChange = (event) => {
        setSiteKey(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can handle form submission here, e.g., save the settings.
    };

    return (
        <MainPage title={"Google reCAPTCHA"}>             
      
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">Google reCAPTCHA Setting</h5>
                        </div>
                        <div className="card-body">
                            <form className="form-horizontal row" onSubmit={handleSubmit}>
                                <div className="form-group col-md-12 mb-2">
                                    <div className="d-flex align-items-center gap-3">
                                        <label>Google reCAPTCHA</label>
                                        <div className="switch">
                                            <input
                                                type="checkbox"
                                                id="switch0"
                                                data-switch="none"
                                                checked={recaptchaEnabled}
                                                onChange={handleRecaptchaEnabledChange}
                                            />
                                            <label htmlFor="switch0" data-on-label="" data-off-label=""></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group col-md-12 mb-2">
                                    <label>Site KEY</label>
                                    <input
                                        type="text"
                                        name="site_key"
                                        className="form-control"
                                        placeholder="Site KEY"
                                        value={siteKey}
                                        onChange={handleSiteKeyChange}
                                    />
                                </div>
                                <div className="text-end">
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        
        </MainPage>
    );
}

export default GoogleRecaptchaSettings;
