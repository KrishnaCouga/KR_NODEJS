const registerModel = require("../models/registerModel");
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

//delete id
const deleteById = async (req, res) => {
    console.log(req.params.id);
    const deleteId = await userService.deleteById(req.params.id);
    res.send(deleteId);
}

//get only active users
const getActiveUsers = async (req, res) => {
    const users = await userService.getActiveUser();
    const activeUsers = users.filter(users => users.active)
    res.send(activeUsers);
}

//create userlogin
const userLogin = async (req, res) => {
    const { name, password } = req.body;
    console.log(name, password);
    const login = await registerModel.findOne({ name, password });
    console.log(login);
    if (login) {
        res.status(200).send({ message: "Logged in successfully", user: login });
    } else {
        res.status(401).send({ message: "Login failed" });
    }
};


module.exports = { createUserDetails, getUserAll, getSpecificUser, deleteById, getActiveUsers, userLogin }