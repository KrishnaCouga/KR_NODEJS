const productService = require("../services/productService")

//create product
const createProductDetails = async (req, res) => {
    const productData = await productService.createProductDetails(req.body);
    //  console.log(req.body)
    res.send(productData)
}

//get product
const getProductAll = async (req, res) => {
    const Products = await productService.getProducts();
    res.send(Products);
}

//get by id
const getSpecificProduct = async (req, res) => {
    console.log(req.params.id);
    const Product = await productService.getSpecificProduct(req.params.id);
    res.send(Product);
}

module.exports = { createProductDetails, getProductAll, getSpecificProduct }