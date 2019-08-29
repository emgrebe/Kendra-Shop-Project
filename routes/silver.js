var express = require('express');
var router = express.Router();
var silverCtrl = require('../controllers/silver');

router.get('/', silverCtrl.show);

module.exports = router;