import { Link, NavLink, useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import SideBarMenu from "./SideBarMenus";
import HRMSMenu from "./HRMSMenu";
import POSMenu from "./Input/POSMenu";
import SideBarPOS from "./SideBarPOS";

export default function LeftSideBar({sidebar}){
    
    let list =  sidebar==="HRMS" ? HRMSMenu.map((ele,i)=>{
        return(
            <SideBarMenu key={i} ele={ele} i={i} />
        )
    }) : sidebar==="POS" ? POSMenu.map((ele,i)=>(
        <SideBarPOS key={i} ele={ele} i={i} />
    )) : MenuItem.map((ele,i)=>{
        return(
            <SideBarMenu key={i} ele={ele} i={i} />
        )
    }) 
    return(
        <div className="vertical-menu">

                <div data-simplebar className="h-100">

                    {/* <!--- Sidemenu --> */}
                    <div id="sidebar-menu">
                        {/* <!-- Left Menu Start --> */}
                        <ul className="metismenu list-unstyled" id="side-menu">
                            <li className="menu-title">Navigation</li>

                            {/* <li>
                                <Link to="/dashboard" className="waves-effect">
                                    <i className="bi bi-house"></i>
                                    <span key="t-dashboards">Dashboards</span>
                                </Link>
                            </li>*/}

                            {/* <li>
                                <a href="javascript: void(0);" className="waves-effect">
                                    <i className="bi bi-person"></i>
                                    <span key="t-dashboards">Admin User Management</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript: void(0);" className="waves-effect">
                                    <i class="bi bi-ev-front"></i>
                                    <span key="t-dashboards">Make Management</span>
                                </a>
                            </li>  */}
                            {list}
                        </ul>
                    </div>
                    {/* <!-- Sidebar --> */}
                </div>
            </div>
    )
}