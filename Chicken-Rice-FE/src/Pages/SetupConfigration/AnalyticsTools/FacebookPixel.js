import React from 'react';

function FacebookPixelInstructions() {
    return (
        <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">Please be careful when you are configuring Facebook pixel.</h5>
                </div>
                <div className="card-body">
                    <ul className="list-group mar-no">
                        <li className="list-group-item text-dark">1. Log in to Facebook and go to your Ads Manager account.</li>
                        <li className="list-group-item text-dark">2. Open the Navigation Bar and select Events Manager.</li>
                        <li className="list-group-item text-dark">3. Copy your Pixel ID from underneath your Site Name and paste the number into the Facebook Pixel ID field.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FacebookPixelInstructions;
