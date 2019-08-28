var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  // quantity: Number,
  item: String,
  price: Number
});

var ksUserSchema = new Schema({
  email: String,
  name: String,
  address: String,
  googleId: String,
  cart: [itemSchema]
});



module.exports = mongoose.model('KsUser', ksUserSchema);