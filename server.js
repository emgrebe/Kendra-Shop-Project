var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
var methodOverride = require('method-override');

var app = express();

require('dotenv').config();
require('./config/database');
require('./config/passport');

var indexRoutes = require('./routes/index');
var cartRoutes = require('./routes/cart');
var productsRoutes = require('./routes/products');
var goldRoutes = require('./routes/gold');
var silverRoutes = require('./routes/silver');
var rsgRoutes = require('./routes/rsg');
var gunmetalRoutes = require('./routes/gunmetal');
var colorfulRoutes = require('./routes/colorful');
var earringsRoutes = require('./routes/earrings');
var necklacesRoutes = require('./routes/necklaces');
var braceletsRoutes = require('./routes/bracelets');
var ringsRoutes = require('./routes/rings');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session( {
  secret: 'KSSale',
  resave: false,
  saveUninitialized: true
}));
app.use(methodOverride('_method'));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRoutes);
app.use('/', cartRoutes);
app.use('/products', productsRoutes);
app.use('/gold', goldRoutes);
app.use('/silver', silverRoutes);
app.use('/rsg', rsgRoutes);
app.use('/gunmetal', gunmetalRoutes);
app.use('/colorful', colorfulRoutes);
app.use('/earrings', earringsRoutes);
app.use('/necklaces', necklacesRoutes);
app.use('/bracelets', braceletsRoutes);
app.use('/rings', ringsRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
