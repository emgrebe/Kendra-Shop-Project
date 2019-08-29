var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartSchema = new Schema({
    item: String, 
    price: String
});

var ksUserSchema = new Schema({
  email: String,
  name: String,
  address: String,
  googleId: String,
  cart: [cartSchema]
});



module.exports = mongoose.model('KsUser', ksUserSchema);