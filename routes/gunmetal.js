var express = require('express');
var router = express.Router();
var gunmetalCtrl = require('../controllers/gunmetal');

router.get('/', gunmetalCtrl.show);

module.exports = router;