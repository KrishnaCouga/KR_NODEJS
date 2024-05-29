const express = require("express")
const router = express.Router()
const userController = require("../controller/userController")

router.route("/register").post(userController.createUserDetails)
router.route("/getalluser").get(userController.getUserAll)

module.exports = router;
