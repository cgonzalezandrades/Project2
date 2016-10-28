'use strict';

var express = require('express');
var hB = require('express-handlebars');
var path = require('path');
var models = require('./models');
var user = require('./controllers/user_controller');
var session = require('express-session');
var cookieParser = require('cookie-parser');

var app = express();

var override = require('method-override');


app.use(override('_method'));

app.set('views',path.join(__dirname,'views'));

app.engine('handlebars', hB({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(process.cwd() + '/public'));


var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
	type: 'application/vnd.api+json'
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({secret: 'app', cookie: { maxAge:60000}, resave: true, saveUninitialized: true}));
app.use(cookieParser());

var api_controller = require('./controllers/api_controller');
var home_controller = require('./controllers/home_controller');

models.beer.sync();
// models.beer1.sync({force:true});
models.groups.sync({force:true});
models.user.sync({force:true});

app.use('/',home_controller);
app.use('/user', user);


app.listen(3000, function (){
	console.log("listening...");
});






