var Product = require('../models/product')

module.exports = {
  show
};

function show(req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (err) console.error(err)
    res.render('products/rings', {title: 'Rings', product});
  });
}