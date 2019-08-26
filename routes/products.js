var express = require('express');
var router = express.Router();
var productCtrl = require('../controllers/products');

/* GET users listing. */
router.get('/', productCtrl.index);
router.post('/products/show', productCtrl.show)

module.exports = router;
