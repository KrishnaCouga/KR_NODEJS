const userService = require("../services/userService")

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

module.exports = { createUserDetails, getUserAll, getSpecificUser }