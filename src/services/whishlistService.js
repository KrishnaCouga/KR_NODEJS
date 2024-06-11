const wishlistModel = require("../models/wishlistModel")

const createWishlist = async (body) => {
    const userWishlist = await wishlistModel.create(body)
    return userWishlist;
}

module.exports = { createWishlist }