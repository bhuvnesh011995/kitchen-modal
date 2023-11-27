import { api } from "../../Context/AuthContext"

export const getAllEmployee = async function(){

    try {
        let response = await api.get("/users")

        return response
    } catch (error) {
        if(error.response){
            console.log(error.response)
            return error.response
        }
    }

}