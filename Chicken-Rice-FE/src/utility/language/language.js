import { api } from "../../Context/AuthContext"

export const getAllLanguage = async ()=>{
    try {
        let response = await api.get("/language")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}
export const deleteLanguageId  = async (id)=>{
    try {
        let response = await api.delete("/language/"+id)

        return response
    } catch (error) {
       console.log(error)
       return error.response 
    }
}
