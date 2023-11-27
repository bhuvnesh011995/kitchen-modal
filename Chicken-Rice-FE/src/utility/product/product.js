import { api } from "../../Context/AuthContext"

export const getProduct = async ()=>{
    try {
        let response = await api.get("/product");
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const deleteProduct = async (id)=>{
    try {
        let response = await api.delete("/product/"+id)

        return response
    } catch (error) {
       console.log(error)
       return error.response 
    }
}


