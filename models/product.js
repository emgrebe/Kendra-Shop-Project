var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
});

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
  quantity: {
    type: Number,
    default: 1
  },
  image: String,
  reviews: [reviewSchema]
});

module.exports = mongoose.model('Product', productSchema);