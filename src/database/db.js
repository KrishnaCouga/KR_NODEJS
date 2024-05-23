const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://krishnacouga:EuvDrKp2i2de1pOV@cluster0.rlspgs8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("mongo db is connected")
    })
    .catch((err) => {
        console.log("mongo db is not connected", err);
    })

module.exports = mongoose.connection;

