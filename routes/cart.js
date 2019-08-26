var express = require('express');
var router = express.Router();
var chargeCtrl = require('../controllers/charge');

router.get('/', chargeCtrl.cart);
router.post('/products/orders/charge', (req, res, next) => {
  charge(req).then(data => {
    res.render('thanks');
  }).catch(error => {
    res.render('error', error);
  });
});

module.exports = router;