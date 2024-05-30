const express = require("express")
const router = express.Router()
const userController = require("../controller/userController")
//create data
router.route("/register").post(userController.createUserDetails)

//get all data
router.route("/getalluser").get(userController.getUserAll)

//get by id
router.route("/getbyid/:id").get(userController.getSpecificUser)
module.exports = router;
