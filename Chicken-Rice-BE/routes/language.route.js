const languageController = require("../controller/language.controller")

module.exports = app =>{
    app.post("/cr/api/v1/languages",[],languageController.addLanguage)
    app.get("/cr/api/v1/languages",[],languageController.getLanguages)
    app.delete("/cr/api/v1/languages/:id",[],languageController.deleteLanguage)
    app.put("/cr/api/v1/languages/:id",[],languageController.updateLanguage)
    app.put("/cr/api/v1/languages/language/:id",languageController.updateLanguageFields)
    app.get("/cr/api/v1/languages/:id",languageController.getLanguageById)
} 