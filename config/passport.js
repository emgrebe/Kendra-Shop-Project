var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var KsUser = require('../models/ksUser');

passport.use(new GoogleStrategy( {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: process.env.GOOGLE_OAUTH_CALLBACK_LOCAL
},
function(accessToken, refreshToken, profile, cb) {
  KsUser.findOne({'googleId': profile.id}, function(err, ksUser) {
    if(err) return cb(err);
    if(ksUser) {
      return cb(null, ksUser);
    } else {
      var newKsUser = new KsUser ( {
        name: profile.displayName,
        email: profile.emails[0].value,
        googleId: profile.id
      });
      newKsUser.save(function(err) {
        if(err) return cb(err);
        return cb(null, newKsUser);
      });
    }
  });
}
));

passport.serializeUser(function(ksUser, done) {
  done(null, ksUser.id);
});

passport.deserializeUser(function(id, done) {
  KsUser.findById(id, function(err, ksUser) {
    done(err, ksUser);
  });
});