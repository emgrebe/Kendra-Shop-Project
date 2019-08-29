var Product = require('../models/product');

module.exports = {
  show,
  silver
};

function show(req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (err) console.error(err)
    res.render('products/gunmetal', {title: 'Gunmetal Products', product});
  });
}

function silver(req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (err) console.error(err)
    res.render('/products/silver', {title: 'Silver Products', product});
  });
}
