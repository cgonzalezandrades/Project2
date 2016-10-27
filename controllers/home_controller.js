var express = require('express');
var router = express.Router();
var models = require('../models');


router.get('/', function (req, res) {

	// console.log(models.beer.id);

	res.render('index');
});

module.exports = router;