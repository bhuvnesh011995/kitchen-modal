const mailConfigController = require("../controller/mailConfig.controller")
const { mailConfig } = require("../models")
const router = require("express").Router()

router.get("/",[],mailConfigController.getMailConfig)
router.put("/",[],mailConfigController.updateMailConfig)

module.exports = app=>{
    app.use("/cr/api/v1/mailConfig",router)
}