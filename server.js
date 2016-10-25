'use strict';

var express = require('express');
var hB = require('express-handlebars');
var path = require('path');
var models = require('./models');
var user = require('./controllers/user_controller');

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

var api_controller = require('./controllers/api_controller');
var home_controller = require('./controllers/home_controller');

models.beer.sync({force:true});
models.groups.sync({force:true});
models.user.sync({force:true});
models.login.sync({force:true});
models.rankings.sync({force:true});

app.use('/',home_controller);
app.use('/users', user);


app.listen(3000, function (){
	console.log("listening...");
});






