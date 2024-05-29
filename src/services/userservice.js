const userModel = require("../models/registermodel")

const createUserDetails = async (body) => {
    const createData = await userModel.create(body)
    return createData
}

const getUsers = async () => {
    const userDetails = await userModel.find({})
    return userDetails
}

module.exports = { createUserDetails, getUsers }
