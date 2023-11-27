const { upload } = require("../app")
const productController = require("../controller/product.controller")
module.exports = app =>{
    app.post("/cr/api/v1/product",[upload.single("file")],productController.addProduct)
    app.get("/cr/api/v1/product",[],productController.getAllProduct)
    app.delete("/cr/api/v1/product/:id",[],productController.deleteProduct)
    app.put("/cr/api/v1/product/:id",[upload.single("file")],productController.updateProduct)

}
