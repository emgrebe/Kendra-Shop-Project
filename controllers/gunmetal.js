var Product = require('../models/product');

module.exports = {
  show
};

function show(req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (err) console.error(err)
    res.render('products/gunmetal', {title: 'Gunmetal Products', product});
  });
}