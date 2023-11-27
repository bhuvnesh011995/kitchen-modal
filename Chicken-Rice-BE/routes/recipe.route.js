const recipeController = require("../controller/recipe.controller")
const { upload } = require("../app")
module.exports = app=>{
    app.post("/cr/api/v1/recipe",[upload.single("file")],recipeController.addNewRecipe)
    app.get("/cr/api/v1/recipe",[],recipeController.getAllRecipes)
    app.put("/cr/api/v1/recipe/:id",[],recipeController.updateRecipe)
    app.delete("/cr/api/v1/recipe/:id",[],recipeController.deleteRecipe)
}