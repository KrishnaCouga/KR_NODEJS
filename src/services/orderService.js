const orderModel = require("../models/orderModel")
const registerModel = require("../models/registerModel")
const productModel = require("../models/productModel")

const createOrderDetails = async (body) => {
    const createOrder = await orderModel.create(body)
    return createOrder
}
//get orderlist by id with total sum amount
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const getUserOrder = async (id) => {

    const orderDetails = await registerModel.aggregate([
        {
            $match: {
                _id: id,
            },
        },
        {
            $lookup: {
                from: "orders", // collection name from MongoDB
                localField: "_id",
                foreignField: "userid",
                as: "orderData",
            },
        },
        { $unwind: "$orderData" },
        {
            $lookup: {
                from: "products",
                localField: "orderData.productid",
                foreignField: "_id",
                as: "productData",
            },
        },
        { $unwind: "$productData" },
        {
            $group: {
                _id: {
                    name: "$name",
                    rollno: "$rollno",
                    id: "$_id", // corrected to use MongoDB ObjectId
                    email: "$email",
                },
                TotalAmount: { $sum: { $multiply: ["$orderData.quantity", "$productData.price"] } },
                orderData: {
                    $push: {
                        Productname: "$productData.productName",
                        Modelnumber: "$productData.modelnumber",
                        Price: "$productData.price",
                        Category: "$productData.category",
                        Quantity: "$orderData.quantity", // corrected to reference orderData
                    }
                }
            }
        },
        {
            $project: {
                _id: 0,
                Name: "$_id.name",
                Rollno: "$_id.rollno",
                id: "$_id.id",
                Email: "$_id.email",
                orderData: 1,
                productData: 1,
                TotalAmount: 1
            }
        }
    ]);

    return orderDetails;
}


//fetch wishlist data and order data by  logged user_id
const orderlistFetchData = async (userID) => {
    const orderlistData = await orderModel.find({ userid: userID });
    // if (orderlistData.length === 0) {
    //     console.log(`No orderlist data found for user ID: ${userID}`);
    //     return [];
    // }

    const productId = orderlistData.map(details => details.productid);
    const products = await orderModel.find({ _id: { $in: productId } }, 'productName');
    console.log(productId, products);
    return products.map(product => product.productName);
}

module.exports = { createOrderDetails, getUserOrder, orderlistFetchData }