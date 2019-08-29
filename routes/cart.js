var express = require('express');
var router = express.Router();
var cartCtrl = require('../controllers/cart');

router.get('/cart', cartCtrl.cart);
router.post('/products/addToCart', cartCtrl.addItem);

module.exports = router;