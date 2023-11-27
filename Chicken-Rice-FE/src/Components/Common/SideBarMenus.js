import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { authContext } from "../../Context/AuthContext";
// import { HashLink as Link } from "react-router-hash-link";


export default function SideBarMenu({ele,i}){
    let {pathname} = useLocation();
    let [isActive,setIsActive] = useState(false)
    const {permissions} = useContext(authContext)

    function getActive(){
        if(ele.children){
            for(i=0;i<ele.children.length;i++){
                if(ele.children[i].to===pathname) return true
            }
        }
        return false
    }

    function getClass(ele){
        let str =""
        if(pathname === ele.to || getActive()) str +="waves-effect mm-active"
        else str =+ "wave-effect"
        if(ele.children) str += " has-arrow"
        return str
    }


    function getPermission(route){
       
        if(permissions){
            if(permissions.includes(route.permissionCode) || childPermission() || permissions.includes("All")) return true
            else return false
        } else return false


        function childPermission(){
            
            if(!route.children) return false
            
            for(i=0;i<route.children.length;i++){
                if(permissions.includes(route.children[i].permissionCode) || permissions.includes("All")) return true
            }
            return false
        }
    }

    return getPermission(ele) ? (
        
        <li className={ isActive ? "mm-active" : ""}>
            <Link to={ele.to} onClick={()=>setIsActive(!isActive)} className={getClass(ele)}>
                
                <i className={ele.icon}></i>
                <span>{ele.name}</span>
                
            </Link>
            {ele.children && isActive ? (<ul class="sub-menu" aria-expanded="false">
            {ele.children.map(e=>{
                return permissions.includes(e.permissionCode) || permissions.includes("All")? (
                <li className={pathname === e.to ? "mm-active" : ""}><Link to={e.to}>{e.name}</Link></li>
            ) : null
            })}
            </ul>):(<></>)}
            </li>
    ):null
}