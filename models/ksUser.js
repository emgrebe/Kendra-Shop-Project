var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartSchema = new Schema({
  owner: String,
  total: Number,
  items: String,
  price: Number
});

var ksUserSchema = new Schema({
  email: String,
  name: String,
  address: String,
  googleId: String,
  cart: [cartSchema]
});



module.exports = mongoose.model('KsUser', ksUserSchema);