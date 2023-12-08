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
export const deleteCurrencyById  = async (id)=>{
    try {
        let response = await api.delete("/currency/"+id)

        return response
    } catch (error) {
       console.log(error)
       return error.response 
    }
}

export const updateCurrency = async (id,data)=>{
    try {
        let response = await api.put("/currency/"+id,data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const addCurrency = async data=>{
    try {
        let response = await api.post("/currency/",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}