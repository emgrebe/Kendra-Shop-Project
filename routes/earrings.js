var express = require('express');
var router = express.Router();
var earringsCtrl = require('../controllers/earrings');

router.get('/', earringsCtrl.show);

module.exports = router;