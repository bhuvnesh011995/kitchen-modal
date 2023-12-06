const { upload } = require('../app')
const generalSettingController = require('../controller/generalSetting.controller')

module.exports = app=>{
    app.put("/cr/api/v1/system",[upload.fields([
        { name: "logo", maxCount: 1 },
        { name: "fevicon", maxCount: 1 },
        { name: "systemLogo", maxCount: 1 },
    ])],generalSettingController.updatesystem)
    app.get("/cr/api/v1/system",[],generalSettingController.getSystemSetting)
}