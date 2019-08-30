var User = require('../models/ksUser');
var Product = require('../models/product');

module.exports = {
  cart,
  addItem,
  delete: deleteOne,
  edit
}

function edit(req, res) {
  User.findById(req.user.id)
  .then(person => {
    console.log(person)
    let qty = person.cart.id(req.params.id)
    qty.quantity = req.body.quantity
    person.save(() => {
    res.redirect('/products/orders')
    })
  })
}

function deleteOne(req, res) {
  User.findById(req.user.id)
  .then(person => {
    person.cart.remove(req.params.id)
    person.save(()=>{
      res.redirect('/products/orders')
    })
  })
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