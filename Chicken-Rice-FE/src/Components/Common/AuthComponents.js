// import Cookies from "js-cookie"
// import { useEffect } from "react"
// import { Route, useNavigate } from "react-router-dom"
// import { user } from "../../utility/auth/auth"
// import Login from "../../Pages/Login/Login"

// export default function AuthComponents({component:Component,path,key,auth=false}) {
//     const AuthenticateConponent = ()=>{
//         console.log("hii")
//         const navigate = useNavigate()

//         async function verifyUser(){
//             let res = await user()

//             if(res.status!=201) navigate("/login")
//         }

//         useEffect(()=>{
//             const token = Cookies.get('token')
//             console.log(token)
//             if(!token) navigate("/login")
//             else{
//             verifyUser()
//         }
//         },[navigate])

//         return (
//             <>
//         <Route path={path} element={<Component/>}/> 
//                 <Route path='/login' element={<Login />} />
//                 </>
//                 )
//     }
//     return AuthenticateConponent;

// };
