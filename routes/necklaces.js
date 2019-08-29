var express = require('express');
var router = express.Router();
var necklacesCtrl = require('../controllers/necklaces');

router.get('/', necklacesCtrl.show);

module.exports = router;