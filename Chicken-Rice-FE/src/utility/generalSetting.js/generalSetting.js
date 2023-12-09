import { api, formApi } from "../../Context/AuthContext";

export const getGeneralSetting = async ()=>{
    try {
        const response = await api.get("/system")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const updateGeneralSetting = async (data)=>{
    try {
        const response = await formApi.put("/system/",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const deleteLogos = async field =>{
    try {
        const response = await api.delete("/system/"+field)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}