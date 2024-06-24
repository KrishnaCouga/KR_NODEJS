const registerModel = require("../models/registerModel")
const userModel = require("../models/registerModel")
const productModel = require("../models/productModel")

const createUserDetails = async (body) => {
    const createData = await userModel.create(body)
    return createData
}

const getUsers = async () => {
    const userDetails = await userModel.find({})
    return userDetails
}

const getSpecificUser = async (id) => {
    // const userDetail = await userModel.findById({ _id: id });
    // return userDetail

    const userDetails = await userModel.aggregate([
        // {
        //   $match: {
        //     _id: id,
        //   },
        // },
        // {
        //   $match: {
        //     $and: [{ _id: { $eq: id } }, { name: { $eq: "Alice" } }],
        //   },
        // },
        // {
        //     $match: {
        //         $or: [{ _id: { $eq: id } }, { name: { $eq: "Alice" } }],
        //     },
        // },
        {
            $match: {
                $and: [{ _id: { $eq: id } }, { active: { $eq: true } }]
            }
        }
    ]);
    return userDetails;
};

const deleteById = async (id) => {
    const deleteUserId = await userModel.findById({ _id: id });
    if (!deleteUserId) {
        console.log("user not found");
    }
    else {
        const deleteId = await userModel.findByIdAndDelete({ _id: id });
        console.log("Id deleted");
    }
    return deleteUserId;
}

// getall active true users-filter method
// const getActiveUser = async () => {
//     const activeUserData = await userModel.find({});
//     return activeUserData;
// }

// getall active true users- aggregate method
const getActiveUser = async () => {
    const userActive = await userModel.aggregate([
        {
            $match: {
                active: true,
            },
        }
    ]);
    return userActive;
}

//update id
const updateUserDetails = async (id, body) => {
    const checkId = await registerModel.findById({ _id: id });
    if (!checkId) {
        console.log("User not found");
    }
    const updateDetails = await registerModel.findByIdAndUpdate({ _id: id }, body, { new: true });
    return updateDetails;
};

//get wishlist by id
const getUserWishlist = async (id) => {
    const wishlistDetails = await registerModel.aggregate([
        {
            $match: {
                _id: id,
            },
        },
        {
            $lookup: {
                from: "wishlists", // collection name from mongodb
                localField: "_id",
                foreignField: "userid",
                as: "wishlistData",
            },
        },
        { $unwind: "$wishlistData" },
        {
            $lookup: {
                from: "products",
                localField: "wishlistData.productid",
                foreignField: "_id",
                as: "productdata",
            },
        },
        { $unwind: "$productdata" },
        {
            $group: {
                _id: {
                    name: "$name",
                    rollno: "$rollno",
                    id: "$id",
                    email: "$email",
                },
                productData: {
                    $push: {
                        Productname: "$productdata.productName",
                        Modelnumber: "$productdata.modelnumber",
                        Price: "$productdata.price",
                        Category: "$productdata.category",
                        Quantity: "$productdata.qty"
                    }
                }
            }
        },
        {
            $project: {
                _id: 0,
                name: "$_id.name",
                rollno: "$_id.rollno",
                id: "$_id.id",
                email: "$_id.email",
                productData: 1,
            }
        }
    ]);
    return wishlistDetails;
}

// user login authentication
const userLoginAuthentication = async (name, password) => {
    const loginAuthentication = await userModel.findOne({ name, password })
    return loginAuthentication
}

module.exports = {
    createUserDetails, getUsers, getSpecificUser, deleteById, getActiveUser,
    updateUserDetails, getUserWishlist, userLoginAuthentication
}
