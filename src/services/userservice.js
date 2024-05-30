const userModel = require("../models/registerModel")

const createUserDetails = async (body) => {
    const createData = await userModel.create(body)
    return createData
}

const getUsers = async () => {
    const userDetails = await userModel.find({})
    return userDetails
}
const getSpecificUser = async (id) => {
    const userDetail = await userModel.findById({ _id: id });
    return userDetail
}

module.exports = { createUserDetails, getUsers, getSpecificUser }
