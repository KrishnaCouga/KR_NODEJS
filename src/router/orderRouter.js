const express = require("express")
const router = express.Router()
const orderController = require("../controller/orderController")

//create order API
router.route("/addorder").post(orderController.createOrderDetails)

//get wishlist by userid
router.route("/getorderlistbyid/:id").get(orderController.getUserOrder)

module.exports = router;