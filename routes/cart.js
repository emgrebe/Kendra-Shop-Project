var express = require('express');
var router = express.Router();
var cartCtrl = require('../controllers/cart');
var productsCtrl = require('../controllers/products');

router.get('/cart', cartCtrl.cart);
router.post('/products/addToCart', cartCtrl.addItem);

module.exports = router;