import RadialChart from "./RadialChart";
import RevenueChart from "./RevenueChart";

export default function Charts() {
    return(
        <div class="row">
            <div class="col-lg-5">
                                <div class="card">
                                    <div class="card-header d-flex justify-content-between align-items-center">
                                        <h4 class="header-title">View Cost Price</h4>
                                        <div class="dropdown">
                                            <a href="#" class="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="mdi mdi-dots-vertical"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                {/* <!-- item--> */}
                                                <a href="javascript:void(0);" class="dropdown-item">Total Sales</a>
                                                {/* <!-- item--> */}
                                                <a href="javascript:void(0);" class="dropdown-item">Total Order</a>
                                                {/* <!-- item--> */}
                                                <a href="javascript:void(0);" class="dropdown-item">Total Commission</a>
                                                {/* <!-- item--> */}
                                                <a href="javascript:void(0);" class="dropdown-item">Last Month</a>
                                            </div>
                                        </div>z
                                    </div>

                                    <div class="card-body pt-0">
                                        <RadialChart />

                                        <div class="row text-center mt-3">
                                            <div class="col-sm-4">
                                                <i class="mdi mdi-send widget-icon rounded-circle bg-warning-lighten text-warning"></i>
                                                <h3 class="fw-normal mt-3">
                                                    <span>6,510</span>
                                                </h3>
                                                <p class="text-muted mb-0 mb-2"><i class="mdi mdi-checkbox-blank-circle text-warning"></i> Total Sales</p>
                                            </div>
                                            <div class="col-sm-4">
                                                <i class="mdi mdi-flag-variant widget-icon rounded-circle bg-primary-lighten text-primary"></i>
                                                <h3 class="fw-normal mt-3">
                                                    <span>3,487</span>
                                                </h3>
                                                <p class="text-muted mb-0 mb-2"><i class="mdi mdi-checkbox-blank-circle text-primary"></i> Total Order</p>
                                            </div>
                                            <div class="col-sm-4">
                                                <i class="mdi mdi-email-open widget-icon rounded-circle bg-success-lighten text-success"></i>
                                                <h3 class="fw-normal mt-3">
                                                    <span>1,568</span>
                                                </h3>
                                                <p class="text-muted mb-0 mb-2"><i class="mdi mdi-checkbox-blank-circle text-success"></i> Total Commission</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- end card body--> */}
                                </div>
                                {/* <!-- end card --> */}
                            </div>

                            <div class="col-lg-7">
                                <div class="card">
                                    <div class="card-header d-flex justify-content-between align-items-center">
                                        <h4 class="header-title">Daily Sales Report</h4>
                                        <div>
                                            <button type="button" class="btn btn-soft-secondary btn-sm">
                                                ALL
                                            </button>
                                            <button type="button" class="btn btn-soft-primary btn-sm">
                                                1M
                                            </button>
                                            <button type="button" class="btn btn-soft-secondary btn-sm">
                                                6M
                                            </button>
                                            <button type="button" class="btn btn-soft-secondary btn-sm">
                                                1Y
                                            </button>
                                        </div>
                                    </div>

                                    <div class="card-body pt-0">
                                        <div class="chart-content-bg">
                                            <div class="row text-center">
                                                <div class="col-sm-6">
                                                    <p class="text-muted mb-0 mt-3">Current Month</p>
                                                    <h2 class="fw-normal mb-3">
                                                        <span>$42,025</span>
                                                    </h2>
                                                </div>
                                                <div class="col-sm-6">
                                                    <p class="text-muted mb-0 mt-3">Previous Month</p>
                                                    <h2 class="fw-normal mb-3">
                                                        <span>$74,651</span>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>

                                        <div dir="ltr">
                                            <RevenueChart />
                                        </div>

                                    </div>
                                    {/* <!-- end card body--> */}
                                </div>
                                {/* <!-- end card --> */}
                            </div>
        </div>
    )
};
