'use strict';

var express = require('express');
var hB = require('express-handlebars');

var app = express();

app.engine('handlebars', hB({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
	res.render('index');
});

app.listen(3000, function (){
	console.log("listening...");
});