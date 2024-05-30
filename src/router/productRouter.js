const express = require("express")
const router = express.Router()
const productController = require("../controller/productController")
//create product API
router.route("/addproduct").post(productController.createProductDetails)

// //get all data
// router.route("/getalluser").get(userController.getUserAll)

// //get by id
// router.route("/getbyid/:id").get(userController.getSpecificUser)

module.exports = router;
