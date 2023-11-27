const { upload } = require("../app");
const fixedController = require("../controller/fixed.controller");

module.exports = app => {
    app.post("/cr/api/v1/fixed",[upload.single("file")], fixedController.addFixed);
    app.get("/cr/api/v1/fixed",[],fixedController.getFixedItems)
    app.delete("/cr/api/v1/fixed/:id",[],fixedController.delateFixed)

    
}
