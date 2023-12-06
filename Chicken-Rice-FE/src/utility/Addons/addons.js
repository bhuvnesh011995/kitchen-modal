import { api } from "../../Context/AuthContext"

export const getaddons = async ()=>{
    try {
        let response = await api.get("/addons")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}
export const deleteAddonsId  = async (id)=>{
    try {
        let response = await api.delete("/addons/"+id)

        return response
    } catch (error) {
       console.log(error)
       return error.response 
    }
}
