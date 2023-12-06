import { FormattedMessage } from "react-intl"
import MiniColumnChart from "./Charts.js/MiniColumnChart"

export default function Summery() {
    let chartData = [
        {name:"campain sent",
    data:[25,56,41,89,53,25,44,12,36,9,54]},
    {
        name:"deals",
        data:[12,14,2,47,42,15,47,75,65,19,14]
    },
    {
        name:"booked revenue",
        data:[47,45,74,14,,56,74,14,11,7,39,82]
    }
    ]
    return(
        <div className="row">
                            <div className="col-md-6 col-xl-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col-6">
                                                <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">Daily Sales Report</h5>
                                                <h3 className="my-2 py-1">9,184</h3>
                                                <p className="mb-0 text-muted">
                                                    <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold"></i> 3.27%</span>
                                                </p>
                                            </div>
                                            <div className="col-6">
                                                <div className="text-end">
                                                    <MiniColumnChart data = {[chartData[0]]} color="#800000" />
                                                </div>
                                            </div>
                                        </div> 
                                        {/* <!-- end row--> */}
                                    </div>
                                     {/* <!-- end card-body --> */}
                                </div>
                                 {/* <!-- end card --> */}
                            </div> 
                            {/* <!-- end col --> */}
        
                          

                            <div className="col-md-6 col-xl-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col-6">
                                                <h5 className="text-muted fw-normal mt-0 text-truncate" title="Deals"><FormattedMessage id="Total-Orders" defaultMessage={"Total Orders"} /></h5>
                                                <h3 className="my-2 py-1">8861</h3>
                                                <p className="mb-0 text-muted">
                                                    <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold"></i> 4.87%</span>
                                                </p>
                                            </div>
                                            <div className="col-6">
                                                <div className="text-end">
                                                <MiniColumnChart data = {[chartData[1]]} color="#feb125" />
                                                </div>
                                            </div>
                                        </div> 
                                        {/* <!-- end row--> */}
                                    </div>
                                     {/* <!-- end card-body --> */}
                                </div> 
                                {/* <!-- end card --> */}
                            </div> 
                            {/* <!-- end col --> */}

                            <div className="col-md-6 col-xl-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col-6">
                                                <h5 className="text-muted fw-normal mt-0 text-truncate" title="Booked Revenue">Monthly Sales Report</h5>
                                                <h3 className="my-2 py-1">$253k</h3>
                                                <p className="mb-0 text-muted">
                                                    <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold"></i> 11.7%</span>
                                                </p>
                                            </div>
                                            <div className="col-6">
                                                <div className="text-end">
                                                <MiniColumnChart data = {[chartData[2]]} color="#800000"/>
                                                </div>
                                            </div>
                                        </div>
                                         {/* <!-- end row--> */}
                                    </div> 
                                    {/* <!-- end card-body --> */}
                                </div>
                                 {/* <!-- end card --> */}
                            </div>
                             {/* <!-- end col --> */}
                        </div>
    )
};
