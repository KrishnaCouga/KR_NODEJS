const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");
//const date = moment();
//console.log(date);

const productSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    productName: {
        type: String
    },
    modelnumber: {
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
    createdDate: {
        type: String,
        default: moment().toDate(),
    },
    availability: {
        type: String
    }
})

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;