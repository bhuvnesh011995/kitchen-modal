const purchaseRequisitionController = require("../controller/purchaseRequisition.controller.js");

module.exports = (app) => {
  app.post(
    "/cr/api/v1/purchaseRequisition/addPurchaseRequisition",
    [],
    purchaseRequisitionController.addPurchaseRequisition
  );
  app.get(
    "/cr/api/v1/purchaseRequisition/allPurchaseRequisitions",
    [],
    purchaseRequisitionController.allPurchaseRequisitions
  );
  app.delete(
    "/cr/api/v1/purchaseRequisition/deletePurchaseRequisition/:id",
    purchaseRequisitionController.deletePurchaseRequisition
  );
  app.put(
    "/cr/api/v1/purchaseRequisition/updatePurchaseRequisition",
    [],
    purchaseRequisitionController.updatePurchaseRequisition
  );
};
