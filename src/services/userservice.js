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

// getall active true users
const getActiveUser = async () => {
    const activeUserData = await userModel.find({});
    return activeUserData;
}

module.exports = { createUserDetails, getUsers, getSpecificUser, deleteById, getActiveUser }
