var express = require('express');
var router = express.Router();
var productCtrl = require('../controllers/products');

/* GET users listing. */
router.get('/', productCtrl.index);
router.get('/orders', productCtrl.charge)

module.exports = router;
