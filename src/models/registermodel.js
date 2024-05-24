const mongoose = require("mongoose");
const registerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    rollno: {
        type: number
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