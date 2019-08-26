const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = {
  create
}


function create (req, res) {
  const token = req.body.stripeToken;
  return stripe.charges.create({
    amount: parseInt(process.env.STRIPE_COST, 10),
    currency: process.env.STRIPE_CCY,
    source: token,
    description: 'Products',
    metadata: {},
  });
}