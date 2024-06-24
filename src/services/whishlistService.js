const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");
const wishlistModel = require("../models/wishlistModel")

const createWishlist = async (body) => {
    const userWishlist = await wishlistModel.create(body)
    return userWishlist;
}



// //fetch wishlist data and order data by  logged user_id
// const wishlistFetchData = async (userID) => {
//     const wishlistData = await wishlistModel.find({ userid: userID });
//     if (wishlistData.length === 0) {
//         console.log(`No wishlist data found for user ID: ${userID}`);
//         return []; // Return an empty array if no wishlist data is found
//     }

//     const productId = wishlistData.map(details => details.productid);
//     const products = await productModel.find({ _id: { $in: productId } }, 'productName');
//     console.log(productId, products);
//     return products.map(product => product.productName);
// };

module.exports = { createWishlist }