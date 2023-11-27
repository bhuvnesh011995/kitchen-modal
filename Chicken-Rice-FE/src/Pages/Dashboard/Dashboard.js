import { useEffect, useState } from "react";
import Common from "../../Components/Common/Common";
import MainPage from "../../Components/Common/MainPage";
import Charts from "./Charts.js/Charts";
import Datatable from "./DataTable/Datatable";
import Summery from "./Summery";
import { useNavigate } from "react-router-dom";
import { user } from "../../utility/auth/auth";


export default function Dashboard() {
    const [loading,setLoading] = useState(true)
        const navigate = useNavigate()

        async function verifyUser(){
            let res = await user()
            if(!res) return navigate("/error")
            if(res.status!=201 ) navigate("/login")
            setLoading(false)
        }


    useEffect(()=>{
            verifyUser()
    },[])
    return !loading? (
        <Common>
                 <MainPage title={"Dashboard"}>
                <Summery/>
                <Charts/>
                <Datatable/>
            </MainPage>
        </Common>
    ):(
        <div>Loading...</div>
    )
};
