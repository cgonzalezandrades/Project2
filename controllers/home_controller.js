var express = require('express');
var router = express.Router();
var models = require('../models');


router.get('/', function (req, res) {

	// console.log(models.beer.id);

	res.render('index');
});

router.get('/list',function (req,res) {

	models.beer.findAll({})
		.then(function (result) {


			console.log(result[0].id);
			res.json(result);



		})

})

module.exports = router;