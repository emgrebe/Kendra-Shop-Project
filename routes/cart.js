var express = require('express');
var router = express.Router();
var cartCtrl = require('../controllers/cart');

router.get('/cart', cartCtrl.cart);
router.post('/products/addToCart', cartCtrl.addItem);
router.delete('/cart/delete/:id', cartCtrl.delete);
router.put('/cart/edit/:id', cartCtrl.edit);

module.exports = router;