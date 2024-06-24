const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
// password hash
registerSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    else {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        next();
    }
});

const registerModel = mongoose.model("register", registerSchema);
module.exports = registerModel;