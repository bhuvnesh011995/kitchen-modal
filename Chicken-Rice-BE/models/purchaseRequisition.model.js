const mongoose = require("mongoose");

const newPurchaseRequisitionSchema = new mongoose.Schema(
  {
    requesterName: { type: String },
    requesterCode: { type: String },
    billingAddress: { type: String },
    shippingAddress: { type: String },
    shippingIsBilling: { type: Boolean },
    requesterReference: { type: String },
    requesterDeliveryDate: { type: Date },
    reasonForPurchase: { type: String },
    orderLines: [],
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const newPurchaseRequisitionModel = mongoose.model(
  "purchaserequisition",
  newPurchaseRequisitionSchema
);

module.exports = newPurchaseRequisitionModel;
