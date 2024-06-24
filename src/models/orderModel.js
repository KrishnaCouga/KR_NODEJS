const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const orderSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    userid: {
        type: String
    },
    productid: {
        type: String
    },
    quantity: {
        type: Number
    },
    deliverystatus: {
        type: String,
        "default": "Pending",
    },
});

const orderModel = mongoose.model("orders", orderSchema);
module.exports = orderModel;