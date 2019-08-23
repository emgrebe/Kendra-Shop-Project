var mongoose = require('mongoose');

mongoose.connect(process.env.GOOGLE_OAUTH_CALLBACK_LOCAL, {useNewUrlParser: true});

mongoose.connection.on('connected', function() {
  console.log(`Mongoose connected to: ${process.env.GOOGLE_OAUTH_CALLBACK_LOCAL}`);
});

module.exports = mongoose;