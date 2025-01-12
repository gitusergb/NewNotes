const express = require('express');
const {addProduct,seeProduct} = require('../Controllers/cartControllers');
const {auth} = require('../middleware/auth.middleware');

const productRouter = express.Router();
productRouter.post('/addPro',auth,addProduct);
productRouter.get('/getPro',auth,seeProduct);

module.exports = {productRouter};