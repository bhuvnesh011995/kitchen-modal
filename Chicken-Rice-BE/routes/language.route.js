const languageController = require("../controller/language.controller")

module.exports = app =>{
    app.post("/cr/api/v1/language",[],languageController.addLanguage)
    app.get("/cr/api/v1/language",[],languageController.getLanguage)
    app.delete("/cr/api/v1/language/:id",[],languageController.deleteLanguage)
    app.put("/cr/api/v1/language/:id",[],languageController.updateLanguage)

}  