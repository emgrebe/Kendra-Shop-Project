var Cart = require('../models/cart');

module.exports = {
  create,
  addItem
}

function addItem(req, res) {
  req.ksUser.items.push(req.body);
  req.ksUser.save(function(err) {
    res.redirect('/products')
  })
}

function create (req, res) {
  var cart = new Cart(req.body);
  cart.save(function(err) {
    if(err) return res.render('orders/new');
  });
}