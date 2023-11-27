import { api } from "../../Context/AuthContext"

export const getCategories = async ()=>{
    try {
        let response = await api.get("/category")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}
export const deleteCategory = async (id)=>{
    try {
        let response = await api.delete("/category/"+id)

        return response
    } catch (error) {
       console.log(error)
       return error.response 
    }
}
