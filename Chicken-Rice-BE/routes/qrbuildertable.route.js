const qrbuildertableController = require("../controller/qrbuildertable.controller")

module.exports = app =>{
    app.post("/cr/api/v1/table",[],qrbuildertableController.addTable)
    app.get("/cr/api/v1/table",[],qrbuildertableController.getAllTable)
    app.delete("/cr/api/v1/table/:id",qrbuildertableController.deleteQrBuilder)
    app.put("/cr/api/v1/table/:id",[],qrbuildertableController.updateTable)

}