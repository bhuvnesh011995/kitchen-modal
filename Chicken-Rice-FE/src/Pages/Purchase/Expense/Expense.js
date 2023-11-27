import { Tab, Tabs } from "react-bootstrap";
import MainPage from "../../../Components/Common/MainPage";
import OverallTable from "./Tables/OverallTable";
import ProjectTable from "./Tables/ProjectTable";
import { useState } from "react";

export default function Expense() {
    const [key,setKey] = useState("project")



    return (
        <MainPage title={"Purchase Expenses"}>
            
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(e) => setKey(e)}
                className="mb-3">
                <Tab eventKey={"project"} title="Project">
                    <ProjectTable/>
                </Tab>
                <Tab eventKey={"overall"} title="Overall">
                    <OverallTable/>
                </Tab>

            </Tabs>
        </MainPage>
    )
};
