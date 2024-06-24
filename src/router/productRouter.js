const express = require("express")
const router = express.Router()
const productController = require("../controller/productController")

//create product API
router.route("/addproduct").post(productController.createProductDetails)

//get all product
router.route("/getallproduct").get(productController.getProductAll)

//get by id
router.route("/getbyid/:id").get(productController.getSpecificProduct)

//get all products with pagination
router.route("/getAllProducts/:page").get(productController.getPaginationProducts)

//sorting for price
router.route("/pricesorting/price").get(productController.getProductPriceSorted)

//sorting for date
router.route("/datesorting/date").get(productController.getProductDateSorted)

//ranging for price
router.route("/pricerange/price").post(productController.getProductPriceRange)

//update many products
router.route("/updatemany").put(productController.updateManyProducts)

module.exports = router;
