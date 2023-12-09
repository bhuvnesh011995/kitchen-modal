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
    const deleteRequisition = await db.purchaseRequisition.deleteOne({
      _id: req.params.id,
    });
    return res
      .status(200)
      .send({ message: "requisition deleted successfully !" });
    // const deleteSelectedPurchaseRequisition
  } catch (err) {
    console.error(err);
  }
};
const updatePurchaseRequisition = async (req, res, next) => {
  try {
    const { body } = req;
    const updatedRequisition = await db.purchaseRequisition.updateOne(
      { _id: req.body._id },
      {
        $set: body,
      }
    );
    return res.status(200).send({
      message: "Purchase Requisition Updated",
    });
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
