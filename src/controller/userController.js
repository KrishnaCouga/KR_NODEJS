const registerModel = require("../models/registerModel");
const userService = require("../services/userService")
const wishlistService = require("../services/whishlistService")
const orderService = require("../services/orderService")

//create user
const createUserDetails = async (req, res) => {
    const userData = await userService.createUserDetails(req.body);
    //  console.log(req.body)
    res.send(userData)
}

//get user
const getUserAll = async (req, res) => {
    const users = await userService.getUsers();
    res.send(users);
}

//get by id
const getSpecificUser = async (req, res) => {
    console.log(req.params.id);
    const user = await userService.getSpecificUser(req.params.id);
    res.send(user);
}

//delete id
const deleteById = async (req, res) => {
    console.log(req.params.id);
    const deleteId = await userService.deleteById(req.params.id);
    res.send(deleteId);
}

//get only active users- filter method
// const getActiveUsers = async (req, res) => {
//     const users = await userService.getActiveUser();
//     const activeUsers = users.filter(users => users.active)
//     res.send(activeUsers);
// }

//get only active users - aggregate method
const getActiveUser = async (req, res) => {
    const user = await userService.getActiveUser();
    res.send(user);
}

//create userlogin
// const userLogin = async (req, res) => {
//     const { name, password } = req.body;
//     console.log(name, password);
//     const login = await registerModel.findOne({ name, password });
//     console.log(login);
//     if (login) {
//         res.status(200).send({ message: "Logged in successfully", user: login });
//     } else {
//         res.status(401).send({ message: "Login failed" });
//     }
// };
const userlogin = async (req, res) => {
    const { name, password } = req.body;
    const checkData = await registerModel.find({ name: name, password: password })
    const userId = checkData[0]._id
    //console.log(userId)
    if (checkData.length === 0) {
        res.status(401).send({ message: "UserId not Found" });
    }

    const getUserDetails = await registerModel.aggregate([
        {
            $match: {
                _id: userId
            }
        },
        {
            $lookup: {
                from: 'wishlists',
                localField: '_id',
                foreignField: 'userid',
                as: 'wishlistData'
            }
        },
        {
            $lookup: {
                from: 'products',
                localField: 'wishlistData.productid',
                foreignField: '_id',
                as: 'productData'
            }
        },
        // { $unwind: "$productData" },
        {
            $lookup: {
                from: 'orders',
                localField: '_id',
                foreignField: 'userid',
                as: 'orderData',
            }
        },
        {
            $lookup: {
                from: 'products',
                localField: 'orderData.productid',
                foreignField: '_id',
                as: 'orderProductDetails'
            }
        },
        {
            $project: {
                _id: 0,
                name: 1,
                id: 1,
                email: 1,
                Wishlist: "$productData.productName"
            }
        },
    ]);
    res.send(getUserDetails)
}

// const userlogin = async (req, res, next) => {
//     const { name, password } = req.body;
//     //console.log(name, password);
//     const loggedUser = await userService.userLoginAuthentication(name, password);
//     //console.log(login);
//     if (loggedUser) {
//         const wishlistFetch = await wishlistService.wishlistFetchData(loggedUser._id);
//         const orderlistFetch = await orderService.orderlistFetchData(loggedUser._id);
//         res.status(200).send({
//             message: "Logged in successfully",
//             loggedUser,
//             wishlist: wishlistFetch,
//             orders: orderlistFetch
//         });
//     }
//     else {
//         res.status(401).send({ message: "Login failed" });
//     }
// };

//update id
const updateUserDetails = async (req, res) => {
    const updateUser = await userService.updateUserDetails(req.params.id, req.body)
    res.send(updateUser)
}

//get wishlist by id
const getUserWishlist = async (req, res) => {
    const getWishlist = await userService.getUserWishlist(req.params.id)
    res.send(getWishlist)
}

module.exports = {
    createUserDetails, getUserAll, getSpecificUser, deleteById, getActiveUser,
    userlogin, updateUserDetails, getUserWishlist
}