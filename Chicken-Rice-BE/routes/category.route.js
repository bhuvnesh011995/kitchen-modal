const { upload } = require("../app")
const categoryController = require("../controller/category.controller")

module.exports = app =>{
    app.post("/cr/api/v1/category",[upload.single("file")],categoryController.addCatagory)
    app.get("/cr/api/v1/category",[],categoryController.getAllCategory)
    app.put("/cr/api/v1/category/:id",[upload.single("file")],categoryController.updateCategory)
    app.delete("/cr/api/v1/category/:id",[],categoryController.delateCategory)

}  