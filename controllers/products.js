var Product = require('../models/product');

module.exports = {
  index,
  show
};

function show(req, res) {
  Product.findById(req.params.id, function(err, product) {
    res.render('products/show', {title: 'Product Deatil', products});
  });
}

function index(req, res) {
  Product.find({}, function(err, products) {
    res.render('products/index', {title: 'View Products', products, ksUser:req.user});
  });
}