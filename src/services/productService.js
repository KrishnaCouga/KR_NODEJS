const productModel = require("../models/productModel")

const createProductDetails = async (body) => {
    const createProduct = await productModel.create(body)
    return createProduct
}

const getProducts = async () => {
    const productDetails = await productModel.find({})
    return productDetails
}

const getSpecificProduct = async (id) => {
    const productDetail = await productModel.findById({ _id: id });
    return productDetail
}

module.exports = { createProductDetails, getProducts, getSpecificProduct }
