import { Tab, Tabs } from "react-bootstrap";
import MainPage from "../../../../../Components/Common/MainPage";
import CashIn from "./CashIn";
import CashOut from "./CashOut";
import Common from "../../../../../Components/Common/Common";
import { useState } from "react";

export default function CashInOut() {
    const [key,setKey] = useState("cashIn")
    return(
        <Common sidebar={"POS"}>
        <MainPage title={"Recipe"}>
            <div className="card card-body">
            <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(e) => setKey(e)}
            className="mb-3"
            variant="pills"
            >
                <Tab eventKey={"cashIn"} title="Cash In">
                    <CashIn/>
                </Tab>
                <Tab eventKey={"cashOut"} title="Cash Out">
                    <CashOut/>
                </Tab>

            </Tabs>
            </div>
        </MainPage>
        </Common>
    )
};
