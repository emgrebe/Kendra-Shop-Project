var Product = require('../models/product');

module.exports = {
  show
};


function show(req, res) {
  Product.findById(req.params.id, function(err, product) {
    res.render('products/metals/gunmetal', {title: 'Product Detail', products});
  });
}