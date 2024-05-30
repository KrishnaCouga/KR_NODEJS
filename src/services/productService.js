const productModel = require("../models/productModel")

const createProductDetails = async (body) => {
    const createProduct = await productModel.create(body)
    return createProduct
}

// const getUsers = async () => {
//     const userDetails = await userModel.find({})
//     return userDetails
// }
// const getSpecificUser = async (id) => {
//     const userDetail = await userModel.findById({ _id: id });
//     return userDetail
// }

module.exports = { createProductDetails }
