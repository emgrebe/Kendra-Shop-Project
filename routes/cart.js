var express = require('express');
var router = express.Router();
var chargeCtrl = require('../controllers/cart');

router.get('/', chargeCtrl.cart);
// router.post('/products/orders/charge', (req, res, next) => {
//   charge(req).then(data => {
//     res.render('thanks');
//   }).catch(error => {
//     res.render('error', error);
//   });
// });
router.post('/items', chargeCtrl.addItem);

router.delete('/items/:id', isLoggedIn, chargeCtrl.delItem);

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;