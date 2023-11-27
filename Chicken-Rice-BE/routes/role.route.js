const roleController = require("../controller/role.controller")
const midWare = require("../middleware")

module.exports = function(app){
    app.post("/cr/api/v1/role",[midWare.verifyToken,midWare.verifyPermission()],roleController.addRole)
app.get("/cr/api/v1/role",[midWare.verifyToken,midWare.verifyPermission("200")],roleController.getAllRoles)
    app.put("/cr/api/v1/role/:id",[midWare.verifyToken,midWare.verifyPermission()],roleController.updateRole)
    app.delete("/cr/api/v1/role/:id",[midWare.verifyToken,midWare.verifyPermission()],roleController.deleteRole)
    app.get("/cr/api/v1/role/permission",[midWare.verifyToken],roleController.getPermissions)
}