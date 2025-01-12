const express = require('express');
const {addToCart,seeCart} = require('../Controllers/cartControllers');
const {auth} = require('../middleware/auth.middleware');

const cartRouter = express.Router();
cartRouter.post('/addCart',addToCart);
cartRouter.get('/seeCart',seeCart);

module.exports = {cartRouter};