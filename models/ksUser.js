var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ksUserSchema = new Schema( {
  name: String,
  email: String,
  city: String,
  avatar: String,
  googleId: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('KsUser', ksUserSchema);