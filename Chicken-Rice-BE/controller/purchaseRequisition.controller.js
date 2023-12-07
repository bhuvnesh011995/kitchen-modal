const db = require("../models/index");

const addPurchaseRequisition = async (req, res, next) => {
  try {
    const { body } = req;
    const newPurchaseRequisition = await db.purchaseRequisition.create(body);
    return res.status(200).send({
      data: newPurchaseRequisition,
      message: "Purchase Requisition Added",
    });
  } catch (err) {
    console.error(err);
  }
};
const allPurchaseRequisitions = async (req, res, next) => {
  try {
    const allPurchaseRequisitions = await db.purchaseRequisition.find({});
    return res.status(200).send(allPurchaseRequisitions);
  } catch (err) {
    console.error(err);
  }
};
const deletePurchaseRequisition = async (req, res, next) => {
  try {
    console.log("inside api", req.params);
    // const deleteSelectedPurchaseRequisition
  } catch (err) {
    console.error(err);
  }
};
const updatePurchaseRequisition = async (req, res, next) => {
  try {
    // const updateSelectedPurchaseRequisition
    console.log("inside api");
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addPurchaseRequisition,
  allPurchaseRequisitions,
  deletePurchaseRequisition,
  updatePurchaseRequisition,
};
