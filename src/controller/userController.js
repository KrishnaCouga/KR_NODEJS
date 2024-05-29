const userService = require("../services/userService")

const createUserDetails = async (req, res) => {
    const userData = await userService.createUserDetails(req.body);
    console.log(req.body)
    res.send(userData)
}

module.exports = { createUserDetails }