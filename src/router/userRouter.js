const express = require("express")
const router = express.Router()
const userController = require("../controller/userController")

router.route("/register").post(userController.createUserDetails)

module.exports = router;
