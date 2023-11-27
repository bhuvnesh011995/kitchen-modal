import { useContext } from "react"
import {api, authContext} from "../../Context/AuthContext"

export const login = async function(data){
    try {
        let response = await api.post("/auth/login",data)
    return response
    } catch (error) {
        return error.response
    }
    
}



export const signup = async function(data){
    try {
        let response = await api.post("/auth/signup",data)

        return response
    } catch (error) {
        console.log(error)

        return error.response
    }
    
}


export const logout = async ()=>{
    try {
        let response = await api.post("/auth/logout")

        return response
    } catch (error) {
        console.log(error)

        return error.response
    }
}



export const user = async function(){
    try {
        let response = await api.get("/auth/user")
    return response
    } catch (error) {
        console.log(error)
        return error.response
    }
    
}