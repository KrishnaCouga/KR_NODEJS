const registerModel = require("../models/registerModel")
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

module.exports = { createUserDetails, getUsers, getSpecificUser, deleteById, getActiveUser, updateUserDetails }
