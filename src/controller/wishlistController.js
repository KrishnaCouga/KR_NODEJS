const wishlistService = require("../services/whishlistService")

const createWishlist = async (req, res) => {
    const wishlist = await wishlistService.createWishlist(req.body)
    res.send(wishlist);
}

module.exports = { createWishlist };