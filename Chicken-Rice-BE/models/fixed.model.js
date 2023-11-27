const { Schema, model } = require("mongoose");

const schema = new Schema({
    category: {
        type: String,
    },
    name: {
        type: String,
    },
    code: {
        type: String,
    },
    assign: {
        type: String,
    },
    working: {
        type: String,
    },
    company: {
        type: String,
    },
    purchaseDate: {
        type: String,
    },
    invoiceNumber: {
        type: String,
    },
    manufacturer: {
        type: String,
    },
    serialNumber: {
        type: String,
    },
    photo:{
        type:String
    },
    note: {
        type: String,
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: Date.now(),
    },
}, {
    collection: "fixed",
    timestamps: true,
});

module.exports = model("fixed", schema);
