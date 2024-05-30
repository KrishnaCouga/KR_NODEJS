const productService = require("../services/productService")

//create product
const createProductDetails = async (req, res) => {
    const productData = await productService.createProductDetails(req.body);
    //  console.log(req.body)
    res.send(productData)
}

// //get user
// const getUserAll = async (req, res) => {
//     const users = await userService.getUsers();
//     res.send(users);
// }

// //get by id
// const getSpecificUser = async (req, res) => {
//     console.log(req.params.id);
//     const user = await userService.getSpecificUser(req.params.id);
//     res.send(user);
// }

module.exports = { createProductDetails }