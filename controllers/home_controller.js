var express = require('express');
var router = express.Router();
var models = require('../models');


router.get('/', function (req, res) {

	// console.log(models.beer.id);

	models.beer.findAll()
		.then(function (beers) {

			var beerList = beers;

			// console.log(beers);


			res.render('index',{beerList:beerList});



		});
});

router.get('/list',function (req,res) {

	models.beer.findAll({})
		.then(function (result) {


			console.log(result[0].id);
			res.json(result);



		})

})

router.get('/userPage', function (req, res) {

    models.beer.findAll({})

        .then(function (beerList) {
            models.user.findAll({})
                .then(function (user) {

                    res.render('userPage', {beerList: beerList, user:user});
                })


        });


});

module.exports = router;