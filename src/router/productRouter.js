const express = require("express")
const router = express.Router()
const productController = require("../controller/productController")

//create product API
router.route("/addproduct").post(productController.createProductDetails)

//get all product
router.route("/getallproduct").get(productController.getProductAll)

//get by id
router.route("/getbyid/:id").get(productController.getSpecificProduct)

module.exports = router;
