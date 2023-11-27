import { api } from "../../Context/AuthContext"

// export const deleteRestaurant = async (id)=>{
//     try {
//         let response = await api.delete("/restaurant/"+id)
//         return response
//     } catch (error) {
//        console.log(error)
//        return error.response 
//     }
// }

export const deleteTable = async (id)=>{
    try{
  let response = await api.delete("/table/"+id)
  return response 
    }
    catch(error){
    return error.response
    }
}