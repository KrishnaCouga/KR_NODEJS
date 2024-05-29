const userModel = require("../models/registermodel")

const createUserDetails = async (body) => {
    const createData = await userModel.create(body)
    return createData
}

module.exports = { createUserDetails }
