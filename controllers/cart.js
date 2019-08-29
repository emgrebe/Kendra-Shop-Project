var User = require('../models/ksUser');

module.exports = {
  cart,
  addItem
}

function addItem(req, res) {
  User.findById(req.user._id)
  .then(user =>{
    user.cart.push(req.body)
    user.save(()=>{
      console.log(req.body);
      console.log(user);
      res.redirect('/products/orders')
    })
  })
}

function cart(req, res) {
  res.render('orders/new', {
    user: req.user
  });
}