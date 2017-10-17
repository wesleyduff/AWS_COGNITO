/**
 * Module dependencies.
 */

var express = require('express');
var cookieParser = require('cookie-parser');
var compress = require('compression');
var session = require('express-session');
var bodyParser = require('body-parser');
var logger = require('morgan');

var path = require('path');
var expressValidator = require('express-validator');
var connectAssets = require('connect-assets');

/**
 * Controllers (route handlers).
 */

var homeController = require('../controllers/home');

/**
 * API keys and Passport configuration.
 */

/*var secrets = require('./config/secrets');*/

/**
 * Create Express server.
 */

var app = express();

/**
 * Connect to MongoDB.


mongoose.connect(secrets.db);
mongoose.connection.on('error', function() {
  console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});


/**
 * Express configuration.
 */

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'html');
app.use(compress());
app.use(connectAssets({
  paths: [path.join(__dirname, '../assets/css'), path.join(__dirname, '../assets/js')]
}));
app.use('/images/', express.static(path.join(process.cwd(), '../assets/images')))
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../assets'), { maxAge: 31557600000 }));

//assign the swig view engine to .html files
var swig = require('swig');
app.engine('html', swig.renderFile);

/**
 * Main routes.
 */

app.get('/', homeController.index);


/**
 * Start Express server.
 */

app.listen(app.get('port'), function() {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

module.exports = app;