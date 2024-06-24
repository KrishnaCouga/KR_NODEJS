const productModel = require("../models/productModel");
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

//get products by pagination
const getPaginationProducts = async (req, res) => {
    const getPageProduct = await productService.getPaginationProducts(req.params.page);
    res.send(getPageProduct);
};

//sorting for price
const getProductPriceSorted = async (req, res) => {
    const getProductPrice = await productService.getProductPriceSorted(req.body);
    res.send(getProductPrice);
}

//sorting for date
const getProductDateSorted = async (req, res) => {
    const getProductDate = await productService.getProductDateSorted(req.body);
    res.send(getProductDate);
}

//ranging for price
const getProductPriceRange = async (req, res) => {
    const { minPrice, maxPrice } = req.body;
    const productPriceRange = await productModel.aggregate([
        { $match: { price: { $gte: minPrice, $lte: maxPrice } } },
        { $sort: { price: 1 } }
    ]);
    res.send(productPriceRange);
}

//update many products
const updateManyProducts = async (req, res) => {
    const { availability } = req.body;
    const updateMany = await productModel.updateMany({}, { $set: { availability } });
    res.send(updateMany);
}

module.exports = {
    createProductDetails,
    getProductAll,
    getSpecificProduct,
    getPaginationProducts,
    getProductPriceSorted,
    getProductPriceRange,
    getProductDateSorted,
    updateManyProducts
}