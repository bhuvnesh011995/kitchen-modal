import dash3 from "../../../assets/Images/icons/dash3.svg"
import dash1 from "../../../assets/Images/icons/dash1.svg"
import dash2 from "../../../assets/Images/icons/dash2.svg"
export default function SummeryDashboard() {
    return (
        <>
        <div class="row">
                    <div class="col-lg-4 col-sm-6 col-12">
                        <div class="dash-widget">
                            <div class="dash-widgetimg">
                                <span><img src={dash1} alt="img"/></span>
                            </div>
                            <div class="dash-widgetcontent">
                                <h5>$<span class="counters" data-count="560062">$560062.00</span></h5>
                                <h6>Total Sales</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12">
                        <div class="dash-widget dash1">
                            <div class="dash-widgetimg">
                                <span><img src={dash2} alt="img"/></span>
                            </div>
                            <div class="dash-widgetcontent">
                                <h5>$<span class="counters" data-count="4385.00">$4,385.00</span></h5>
                                <h6>Total Purchases</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12">
                        <div class="dash-widget dash2">
                            <div class="dash-widgetimg">
                                <span><img src={dash3} alt="img"/></span>
                            </div>
                            <div class="dash-widgetcontent">
                                <h5>$<span class="counters" data-count="385656.50">385,656.50</span></h5>
                                <h6>Total Monthly Sales </h6>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6 col-12 d-flex">
                        <div class="dash-count">
                            <div >
                                <h4 class="text-light">100</h4>
                                <h5 class="text-light">Customers</h5>
                            </div>
                            <div class="dash-imgs">
                                <i className="bx bx-user"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12 d-flex">
                        <div class="dash-count das1">
                            <div class="dash-counts">
                                <h4 class="text-light">100</h4>
                                <h5 class="text-light">Suppliers</h5>
                            </div>
                            <div class="dash-imgs">
                                <i className="bx bx-user-check"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12 d-flex">
                        <div class="dash-count das2">
                            <div class="dash-counts">
                                <h4 class="text-light">100</h4>
                                <h5 class="text-light">Purchase Invoice</h5>
                            </div>
                            <div class="dash-imgs">
                                <i className="far fa-file-alt"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12 d-flex">
                        <div class="dash-count das3">
                            <div class="dash-counts">
                                <h4 class="text-light">105</h4>
                                <h5 class="text-light">Sales Invoice</h5>
                            </div>
                            <div class="dash-imgs">
                                <i class="far fa-file"></i>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
};
