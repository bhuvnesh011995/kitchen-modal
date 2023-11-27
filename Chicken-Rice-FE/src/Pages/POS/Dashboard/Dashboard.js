import { Button } from "react-bootstrap";
import Common from "../../../Components/Common/Common";
import MainPage from "../../../Components/Common/MainPage";
import DashChart from "./DashChart";
import ExpiredProduct from "./ExpiredProduct";

import "../../../assets/css/style.css"
import SummeryDashboard from "./SummeryDashboard";
import StartSession from "./StartSession";
import { useState } from "react";
export default function Dashboard() {
    const [isOpen,setIsOpen] = useState(false)

    return(
        <Common sidebar={"POS"}>
            <MainPage title={"Dashboard"}>
            {/* {isOpen && <StartSession show={isOpen} setShow={setIsOpen}/>}
                <div style={{position:"relative",zIndex:"99999"}}>
                    <Button onClick={()=>setIsOpen(true)}  style={{position:"fixed",top:"80%",left:"85%"}}>Start Session</Button>
                </div> */}
                <SummeryDashboard/>
                <DashChart/>
                <ExpiredProduct/>
            </MainPage>
        </Common>
    )
};
