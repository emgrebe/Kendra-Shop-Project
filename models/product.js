var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  style: {
    type: String,
    enum: ['Necklaces', 'Earrings', 'Bracelets', 
    'Rings', 'All'],
    default: 'All',
    required: true
  },
  metal: {
    type: String,
    enum: ['Gold', 'Silver', 'Rosegold', 'Gunmetal'
    , 'Colorful'],
    default: 'Gold',
    required: true
  },
  price: {
    type: Number,
    min: 10,
    max: 150
  },
  availability: {
    type: Boolean,
    default: true
  },
  image: String,
});

module.exports = mongoose.model('Product', productSchema);