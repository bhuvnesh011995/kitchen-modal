import { Tab, Tabs } from "react-bootstrap";
import MainPage from "../../../Components/Common/MainPage";
import { useState } from "react";
import CatagoryTable from "./Tables/CatagoryTable";
import RecipeTable from "./Tables/RecipeTable";

export default function Recipe(params) {
    const [key,setKey] = useState("catagory")
    return(
        <MainPage title={"Recipe"}>
            <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(e) => setKey(e)}
            className="mb-3 mytabcolor"
            variant="pills"
            >
                <Tab eventKey={"catagory"} title="Catagory">
                    <CatagoryTable/>
                </Tab>
                <Tab eventKey={"recipe"} title="Recipe">
                    <RecipeTable/>
                </Tab>

            </Tabs>
        </MainPage>
    )
};
