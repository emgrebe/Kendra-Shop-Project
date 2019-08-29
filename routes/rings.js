var express = require('express');
var router = express.Router();
var ringsCtrl = require('../controllers/rings');

router.get('/', ringsCtrl.show);

module.exports = router;