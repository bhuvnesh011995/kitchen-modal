import React, { useState } from 'react';

function GoogleAnalyticsSettings() {
    const [trackingEnabled, setTrackingEnabled] = useState(false);
    const [trackingID, setTrackingID] = useState('');

    const handleTrackingEnabledChange = (event) => {
        setTrackingEnabled(event.target.checked);
    };

    const handleTrackingIDChange = (event) => {
        setTrackingID(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can handle form submission here, e.g., save the settings.
    };

    return (
        <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">Google Analytics Setting</h5>
                </div>
                <div className="card-body">
                    <form className="form-horizontal row" onSubmit={handleSubmit}>
                        <div className="form-group col-md-12 mb-2">
                            <div className="d-flex align-items-center gap-3">
                                <label>Google Analytics</label>
                                <div className="switch">
                                    <input
                                        type="checkbox"
                                        id="switch20"
                                        data-switch="none"
                                        checked={trackingEnabled}
                                        onChange={handleTrackingEnabledChange}
                                    />
                                    <label htmlFor="switch20" data-on-label="" data-off-label=""></label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-12 mb-2">
                            <label>Tracking ID</label>
                            <input
                                type="text"
                                name="tracking_id"
                                className="form-control"
                                placeholder="Tracking ID"
                                value={trackingID}
                                onChange={handleTrackingIDChange}
                            />
                        </div>
                        <div className="text-end">
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default GoogleAnalyticsSettings;
