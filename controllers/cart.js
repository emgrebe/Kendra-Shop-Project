const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = {
  create,
  addItem
}

function addItem(req, res, next) {
  req.ksUser.items.push(req.body);
  req.ksUser.save(function(err) {
    res.redirect('/products')
  })
}

function create (req, res, next) {
  const token = req.body.stripeToken;
  return stripe.charges.create({
    amount: parseInt(process.env.STRIPE_COST, 10),
    currency: process.env.STRIPE_CCY,
    source: token,
    description: 'Products',
    metadata: {},
  });
}