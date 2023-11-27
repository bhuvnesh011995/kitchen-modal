const authController = require("../controller/auth.controller")
const middWare = require("../middleware")

module.exports = function(app){
    
    app.post("/cr/api/v1/auth/login",[],authController.login)
    app.post("/cr/api/v1/auth/signup",[],authController.signUp)
    app.post("/cr/api/v1/auth/logout",[],authController.logout)
    app.get("/cr/api/v1/auth/user",[middWare.verifyToken],authController.verifyuser)

}