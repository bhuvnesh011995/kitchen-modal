const languageController = require("../controller/language.controller")
const {Router, application} = require("express")
let router  = Router()

    router.post("/",[],languageController.addLanguage)
    router.get("/",[],languageController.getLanguages)
    router.delete("/:id",[],languageController.deleteLanguage)
    router.put("/:id",[],languageController.updateLanguage)
    router.put("/language/:id",languageController.updateLanguageFields)
    router.get("/:id",languageController.getLanguageById)


    module.exports = app =>{
app.use("/cr/api/v1/languages",router)
} 