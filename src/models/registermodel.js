const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const registerSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    name: {
        type: String
    },
    rollno: {
        type: Number
    },
    id: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    active: {
        type: Boolean,
        default: true
    }

});

const registerModel = mongoose.model("register", registerSchema);
module.exports = registerModel;