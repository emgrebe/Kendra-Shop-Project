var User = require('../models/ksUser');


module.exports = {
  cart,
  addItem
}

function addItem(req, res) {
  // this should be the Cart object
  User.findById(req.user._id)
  .then(user =>{
    user.cart.push(req.body)
    user.save(()=>{
      console.log(req.body);
      console.log(user);
      res.redirect('/products/orders')
    })
  })
  // req.user.cart.push(req.body);
  // req.user.save(function(err) {
  //   res.redirect('/orders/new')
  // })
}

function cart(req, res) {
  res.render('orders/new', {
    user: req.user
  });
}