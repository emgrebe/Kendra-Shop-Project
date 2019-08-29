var express = require('express');
var router = express.Router();
var rsgCtrl = require('../controllers/rsg');

router.get('/', rsgCtrl.show);

module.exports = router;