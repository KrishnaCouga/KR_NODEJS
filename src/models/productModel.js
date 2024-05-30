const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const productSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    productName: {
        type: String
    },
    ModelNumber: {
        type: Number
    },
    price: {
        type: Number
    },
    category: {
        type: String
    },
    qty: {
        type: Number,
    },
    active: {
        type: Boolean,
        default: true,
    },
});

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;