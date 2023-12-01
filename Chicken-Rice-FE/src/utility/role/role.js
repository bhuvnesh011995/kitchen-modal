import { api } from "../../Context/AuthContext"

export const getAllRole = async function(){
    try {
       let response = await api.get("/role")

       if(response.status === (200 || 201)) return response
       else return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const addRole = async function(data){
    try {
        let response = await api.post("/role",data)

        return response
    } catch (error) {
       console.log(error.response)
       return error.response
    }
}



export const deleteRole = async (id)=>{
    try {
        let response = await api.delete("/role/"+id)

        return response
    } catch (error) {
        console.log(error)
        return error.response
    }

}


export const updateRole = async (id,data)=>{
    try {
        let response = await api.put("/role/"+id,data)
        return response
    } catch (error) {
        return error.response
    }
}

export const getPermissionsById = async (id)=>{
    try {
        let response = await api.get("/permissions/"+id)
        return response
    } catch (error) {
        console.log(error.response)
        return error.response
    }
}