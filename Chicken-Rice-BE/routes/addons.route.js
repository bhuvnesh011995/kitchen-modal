const addonsController = require("../controller/addons.controller")

module.exports = app =>{
    app.post("/cr/api/v1/addons",[],addonsController.addAddons)
    app.get("/cr/api/v1/addons",[],addonsController.getAllAddons)
    app.put("/cr/api/v1/addons/:id",[],addonsController.updateAddons)
    app.delete("/cr/api/v1/addons/:id",[],addonsController.deleteAddons)

}  