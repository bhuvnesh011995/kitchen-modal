const currencyController = require("../controller/currency.controller")

module.exports = app =>{
    app.post("/cr/api/v1/currency",[],currencyController.addCurrency)
    app.get("/cr/api/v1/currency",[],currencyController.getCurrency)
    app.delete("/cr/api/v1/currency/:id",[],currencyController.deleteCurrency)
    app.put("/cr/api/v1/currency/:id",[],currencyController.updateCurrency)

}  