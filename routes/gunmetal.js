var express = require('express');
var router = express.Router();
var productCtrl = require('../controllers/gunmetal');


router.get('/', productCtrl.show);

module.exports = router;