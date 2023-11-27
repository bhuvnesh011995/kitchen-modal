import { useEffect, useState } from "react";
import Common from "../../../../Components/Common/Common";
import MainPage from "../../../../Components/Common/MainPage";
import Tables from "./Tables";
import AddTable from "./AddTable";
import EditTable from "./EditTable";

export default function TablesManagement() {
    const [isAddNewTable,setIsAddNewTable] = useState(false)
    const [isEditTable,setIsEditTable] = useState(false)
    useEffect(()=>{
        document.body.classList
        .add("sidebar-enable","vertical-collpsed")

            return ()=>document.body.classList.remove("sidebar-enable","vertical-collpsed")
    },[])
    return (
        <Common sidebar={"POS"}>
            <MainPage title={"Table Booking"}>
            {isAddNewTable ? <AddTable show={isAddNewTable} setShow={setIsAddNewTable}/>:null}
            {isEditTable ? <EditTable show={isEditTable} setShow={setIsEditTable}/>:null}
            <div class="row">
                    <div class="col-lg-12 text-end mb-3">

                        <button onClick={()=>setIsEditTable(true)} class="btn btn-primary me-1"
                            >Edit/Delete</button>
                        <button onClick={()=>setIsAddNewTable(true)} class="btn btn-success">Add
                            New</button>
                    </div>
                </div>
                <Tables/>
            </MainPage>
        </Common>
    )
};
