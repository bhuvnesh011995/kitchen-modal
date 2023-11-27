import { Tab, Tabs } from "react-bootstrap";
import MainPage from "../../../Components/Common/MainPage";
import { useState } from "react";
import PurchaseTable from "./Tables/PurchaseTable";
import LabourTable from "./Tables/LabourTable";
import SalesTable from "./Tables/SaleTable";
import ProfitTable from "./Tables/ProfitTable";

export default function StoreCosting() {
    const [key,setKey] = useState("purchase")
    
    return(
        <MainPage title={"Store Costing"}>
            
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(e) => setKey(e)}
            className="mb-3"
            >
                <Tab eventKey={"purchase"} title="Purchase">
                    <PurchaseTable/>
                </Tab>
                <Tab eventKey={"labour"} title="Labour Costing">
                    <LabourTable/>
                </Tab>
                <Tab eventKey={"sale"} title="Sale">
                    <SalesTable/>
                </Tab>
                <Tab eventKey={"profit"} title="Profit">
                    <ProfitTable/>
                </Tab>

            </Tabs>
        </MainPage>
    )
};
