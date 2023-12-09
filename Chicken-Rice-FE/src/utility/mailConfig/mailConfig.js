import { api } from "../../Context/AuthContext"

export const getMailConfiguration = async ()=>{
    try {
        const response = await api.get("/mailConfig")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updateEmailConfig = async data=>{
    try {
        let response = await api.put("/mailConfig",data)
        return response
    } catch (error) {
        console.log(error);
        return error.response
    }
}