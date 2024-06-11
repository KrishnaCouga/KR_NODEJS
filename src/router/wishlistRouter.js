const express = require("express")
const router = express.Router()
const wishlistController = require("../controller/wishlistController");

router.route("/addwishlist").post(wishlistController.createWishlist)

module.exports = router;