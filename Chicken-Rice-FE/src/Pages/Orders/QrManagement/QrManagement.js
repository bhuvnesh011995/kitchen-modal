import { useState } from "react";
import MainPage from "../../../Components/Common/MainPage";
import AddNew from "./AddNew";
import qrCode from "../../../assets/Images/barcode.png"
export default function QrManagement() {
    const [isOpen,setIsOpen] = useState(false)
    return(
        <MainPage title={"QR Management"}>
            {isOpen && <AddNew show={isOpen} setShow={setIsOpen}/>}
            <div class="row">
                            <div class="col-md-12 text-end">
                                <div class="mb-3">
                                    <button class="btn btn-primary" onClick={()=>setIsOpen(true)}>Add New </button>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="card pe-4 ribbon-box">
                                    <div class="card-body">
                                        <a href="#" class="ribbon ribbon-success float-end"><i class="mdi mdi-access-point me-1"></i> Table No. 1</a>
                                        <h6 class="text-success float-start mt-0">6 Seater Table</h6>
                                        <div class="ribbon-content">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <p class="mb-0"><img src={qrCode} alt="" /></p>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="generat-qr mt-3 text-end">
                                                        <a href="#" class="btn btn-primary">Generate</a>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card pe-4 ribbon-box">
                                    <div class="card-body" >
                                        <a href="#" class="ribbon ribbon-success float-end"><i class="mdi mdi-access-point me-1"></i> Table No. 2</a>
                                        <h6 class="text-success float-start mt-0">4 Seater Table</h6>
                                        <div class="ribbon-content">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <p class="mb-0"><img src={qrCode} alt="" /></p>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="generat-qr mt-3 text-end">
                                                        <a href="#" class="btn btn-primary">Generate</a>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card pe-4 ribbon-box">
                                    <div class="card-body">
                                        <a href="#" class="ribbon ribbon-success float-end"><i class="mdi mdi-access-point me-1"></i> Table No. 3</a>
                                        <h6 class="text-success float-start mt-0">4 Seater Table</h6>
                                        <div class="ribbon-content">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <p class="mb-0"><img src={qrCode} alt="" /></p>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="generat-qr mt-3 text-end">
                                                        <a href="#" class="btn btn-primary">Generate</a>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card pe-4 ribbon-box">
                                    <div class="card-body">
                                        <a href="#" class="ribbon ribbon-success float-end"><i class="mdi mdi-access-point me-1"></i> Table No. 4</a>
                                        <h6 class="text-success float-start mt-0">2 Seater Table</h6>
                                        <div class="ribbon-content">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <p class="mb-0"><img src={qrCode} alt="" /></p>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="generat-qr mt-3 text-end">
                                                        <a href="#" class="btn btn-primary">Generate</a>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </MainPage>
    )
};
