import Navbar from "../Navbar";

import { Outlet } from "react-router-dom";


export default function Common({children}) {
    
    return (
        <div className="app">
      <div id="layout-wrapper">
      <Navbar inactive={false} setInactive={()=>{}} show={false} />
      {children}
      {Outlet}
        </div>
        </div>
      
    )
};
