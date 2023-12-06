
import { api } from "../../Context/AuthContext"

export const getAllLanguage = async ()=>{
    try {
        let response = await api.get("/languages")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const deleteLanguageById  = async (id)=>{
    try {
        let response = await api.delete("/languages/"+id)

        return response
    } catch (error) {
       console.log(error)
       return error.response 
    }
}

export const updateLanguage = async (id,data)=>{
    try {
        let response = await api.put("/languages/"+id,data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const updateLanguageFields = async (id,data)=>{
    try {
        let response = await api.put("/languages/language/"+id,data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const getLanguageById = async id=>{
    try {
        let response = await api.get("/languages/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const addLanguage = async data=>{
    try {
        let response  = await api.post("/languages",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}