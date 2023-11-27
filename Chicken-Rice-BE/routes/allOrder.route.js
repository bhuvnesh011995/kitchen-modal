const allOrderController = require("../controller/allOrder.controller")

module.exports = app =>{
    app.post("/cr/api/v1/allOrder",[],allOrderController.addAllOrder)
    app.get("/cr/api/v1/allOrder",[],allOrderController.getAllOrder)
}  