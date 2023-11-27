
import MainPage from "../../../Components/Common/MainPage";
import ListAllEmployees from "./ListAllEmployees";
import EmployeeSummery from "./SubComponent/EmployeeSummery";

let cardData = [
    {
        title:"Active",
        icon:"fas fa-users me-2",
        bg:"primary",
        color:"white",
        data:90
    },
    {
        title:"Inactive",
        icon:"fas fa-user-times me-2",
        bg:"secondary",
        color:"white",
        data:2
    },
    {
        title:"Male",
        icon:"fas fa-male me-2",
        bg:"info",
        color:"white",
        data:"75%"
    },
    {
        title:"Female",
        icon:"fas fa-female me-2",
        bg:"pink",
        color:"white",
        data:"25%"
    },
]

export default function Employees() {
    



    return(
        <MainPage title={"EMPOLYEES"}>
            <EmployeeSummery />
            <ListAllEmployees/>
        </MainPage>
    )
};
