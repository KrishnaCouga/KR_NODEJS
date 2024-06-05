const express = require("express")
const router = express.Router()
const userController = require("../controller/userController")
//create data
router.route("/register").post(userController.createUserDetails)

//get all data
router.route("/getalluser").get(userController.getUserAll)

//get by id
//router.route("/getbyid/:id").get(userController.getSpecificUser)
router.route("/getbyid/:id/active").get(userController.getSpecificUser)

//delete by id
router.route("/delete/:id").delete(userController.deleteById)
module.exports = router;

//only activeusers
router.route("/activeusers").get(userController.getActiveUsers)

//userLogin
router.route("/login").post(userController.userLogin)
