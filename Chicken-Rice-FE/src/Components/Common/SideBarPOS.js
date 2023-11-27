import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// import { HashLink as Link } from "react-router-hash-link";


export default function SideBarPOS({ele,i}){
    let {pathname} = useLocation();
    let [isActive,setIsActive] = useState(false)


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


    

    return  (
        
        <li className={ isActive ? "mm-active" : ""}>
            <Link to={ele.to} onClick={()=>setIsActive(!isActive)} className={getClass(ele)}>
                
                <i className={ele.icon}></i>
                <span>{ele.name}</span>
                
            </Link>
            {ele.children && isActive ? (<ul class="sub-menu" aria-expanded="false">
            {ele.children.map(e=>{
                return (
                <li className={pathname === e.to ? "mm-active" : ""}><Link to={e.to}>{e.name}</Link></li>
            ) 
            })}
            </ul>):(<></>)}
            </li>
    )
}


