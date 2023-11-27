const midWare = require("../middleware")
const {upload} = require("../app")
const userController = require("../controller/user.controller")

module.exports = function(app){
    app.get("/cr/api/v1/users/",[midWare.verifyToken,midWare.verifyPermission("190")],userController.getAllusers)
}