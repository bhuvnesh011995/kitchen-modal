import { api } from "../../Context/AuthContext"

export const getAllCurrency = async ()=>{
    try {
        let response = await api.get("/currency")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}
export const deleteCurrencyId  = async (id)=>{
    try {
        let response = await api.delete("/currency/"+id)

        return response
    } catch (error) {
       console.log(error)
       return error.response 
    }
}
