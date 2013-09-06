/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , hbs = require('hbs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.engine('handlebars', hbs.__express);

// app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'www/public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function (req, res) {
  res.locals = {
    removed: 'removed'
  };
  res.render('index');
});

app.post('/rsvp', function (req, res) {
  var msg = req.body.response === 'true' ? 'Thanks!' : 'Maybe next time!';

  if (req.is('application/x-www-form-urlencoded')) {
    res.locals = {
      removed: '',
      message: msg
    };
    res.render('index');
  } else {
    res.json({
      response: msg
    });
  }

});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
