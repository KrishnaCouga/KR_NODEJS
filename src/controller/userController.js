const userService = require("../services/userService")

//create user
const createUserDetails = async (req, res) => {
    const userData = await userService.createUserDetails(req.body);
    console.log(req.body)
    res.send(userData)
}

//get user
const getUserAll = async (req, res) => {
    const user = await userService.getUsers();
    res.send(user);
}

module.exports = { createUserDetails, getUserAll }