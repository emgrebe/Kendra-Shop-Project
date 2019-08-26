var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title: 'Kendra Products'});
});
router.get('/products/show', function(req, res) {
  res.render('products/show', {title: 'Kendra Products'});
});
router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email']}
));
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/products',
    failureRedirect: '/'
  }
));
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/products');
});

module.exports = router;
