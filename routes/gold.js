var express = require('express');
var router = express.Router();
var goldCtrl = require('../controllers/gold');

router.get('/', goldCtrl.show);

module.exports = router;