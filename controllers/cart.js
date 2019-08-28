var Cart = require('../models/cart');

module.exports = {
  cart,
  addItem
}

function addItem(req, res) {
  req.user.cart.push(req.body);
  req.user.save(function(err) {
    res.redirect('/orders/new')
  })
}

function cart(req, res) {
  res.render('orders/new', {
    user: req.user
  });
}