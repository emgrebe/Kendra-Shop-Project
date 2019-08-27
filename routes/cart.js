var express = require('express');
var router = express.Router();
var cartCtrl = require('../controllers/cart');

router.get('/', cartCtrl.cart);
router.post('/products', cartCtrl.addItem);

module.exports = router;