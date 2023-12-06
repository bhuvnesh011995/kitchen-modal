import { api } from "../../Context/AuthContext"

export const getRecipes = async ()=>{
    try {
        let response = await api.get("/recipe")

        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
    
}


export const addRecipe = async (data) => {
    try {
        let response = await api.post("/recipe", data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response;
    } catch (error) {
        console.log(error);
        return error.response;
    }
}


export const getCategories = async ()=>{
    try {
        let response = await api.get("/category")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}




export const getTable = async ()=>{
    try {
        let response = await api.get("/table")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}




export const getFixedItem = async ()=>{
    try {
        let response = await api.get("/fixed")
          
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}




export const getOrder = async ()=>{
    try {
        let response = await api.get("/allOrder")
          
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

export const deleteFixed = async (id)=>{
    try {
        let response = await api.delete("/fixed/"+id)

        return response
    } catch (error) {
       console.log(error)
       return error.response 
    }
}
export const deleteFixeds = async (id)=>{
    try {
        let response = await api.delete("/fixeds/"+id)

        return response
    } catch (error) {
       console.log(error)
       return error.response 
    }
}

