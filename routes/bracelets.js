var express = require('express');
var router = express.Router();
var braceletsCtrl = require('../controllers/bracelets');

router.get('/', braceletsCtrl.show);

module.exports = router;