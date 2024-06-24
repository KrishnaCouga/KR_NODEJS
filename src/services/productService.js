const productModel = require("../models/productModel")

const createProductDetails = async (body) => {
    // const createDate = new Date();
    // const productData = {
    //     createdDate: createDate,
    // };
    const createProduct = await productModel.create({ ...body }); //(...productData)
    return createProduct;
};

const getProducts = async () => {
    const productDetails = await productModel.find({})
    return productDetails;
}

const getSpecificProduct = async (id) => {
    const productDetail = await productModel.findById({ _id: id });
    return productDetail;
}

const getPaginationProducts = async (page) => {
    const allProducts = await productModel.aggregate([
        { $skip: page * 5 },
        { $limit: 5 }
    ]);
    return allProducts;
};

//get product price by sorting
const getProductPriceSorted = async (body) => {
    const sortProductPrice = await productModel.aggregate([
        { $sort: { price: -1 } },
        // { $sort: { price: 1 } }
    ]);
    return sortProductPrice;
}

//get product date by sorting
const getProductDateSorted = async () => {
    const sortProductDate = await productModel.aggregate([
        {
            $match: {
                createdDate: { $exists: true }
            }
        },
        { $sort: { date: 1 } },
        // { $sort: { date: 1 } }
    ]);
    return sortProductDate;
}

//get product price by range 
// const getProductPriceRange = async (body) => {
// const minPrice = 0;
// const maxPrice = 500;
// const pipeline = [
//     { $match: { price: { $gte: minPrice, $lte: maxPrice } } },
//     { $sort: { price: 1 } }
// ];

// }

module.exports = {
    createProductDetails,
    getProducts,
    getSpecificProduct,
    getPaginationProducts,
    getProductPriceSorted,
    getProductDateSorted,

}
