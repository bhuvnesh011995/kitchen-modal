const currencyController = require("../controller/currency.controller")
const router = require("express").Router()

    router.post("/",[],currencyController.addCurrency)
    router.get("/",[],currencyController.getCurrency)
    router.delete("/:id",[],currencyController.deleteCurrency)
    router.put("/:id",[],currencyController.updateCurrency)


    module.exports = app =>{
        app.use("/cr/api/v1/currency",router)
    }  