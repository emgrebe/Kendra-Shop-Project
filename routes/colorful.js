var express = require('express');
var router = express.Router();
var colorfulCtrl = require('../controllers/colorful');

router.get('/', colorfulCtrl.show);

module.exports = router;