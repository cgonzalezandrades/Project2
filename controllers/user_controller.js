/**
 * Created by Patrick on 10/22/2016.
 */
var bcrypt = require('bcryptjs');
var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/new', function(req,res) {
	res.render('new');
});


router.get('/sign-out', function(req,res) {
	req.session.destroy(function(err) {
		res.redirect('/')
	})
});
router.post('/login', function(req, res) {
	models.user.findOne({
		where: {email: req.body.email}
	}).then(function(user) {

		if (user == null){
			res.redirect('/users/sign-in')
		}

		// Solution:
		// =========
		// Use bcrypt to compare the user's password input
		// with the hash stored in the user's row.
		// If the result is true,
		bcrypt.compare(req.body.password, user.password_hash, function(err, result) {
			// if the result is true (and thus pass and hash match)
			if (result == true){

				// save the user's information
				// to req.session, as the comments below show

				// so what's happening here?
				// we enter the user's session by setting properties to req.

				// we save the logged in status to the session
				req.session.logged_in = true;
				// the username to the session
				req.session.username = user.username;
				// the user id to the session
				req.session.user_id = user.id;
				// and the user's email.
				req.session.user_email = user.email;

				res.redirect('/');
			}
			// if the result is anything but true (password invalid)
			else{
				// redirect user to sign in
				res.redirect('/users')
			}
		})
	})
});


// register a user
router.post('/create', function(req,res) {
	console.log("got here")
	models.user.findAll({
		where: {email: req.body.email}
	}).then(function(users) {

		if (users.length > 0){
			console.log(users)
			res.send('we already have an email or username for this account')
		} else {

			// Solution:
			// =========

			// Using bcrypt, generate a 16-round salt,
			// then use that salt to hash the user's password.
			bcrypt.genSalt(16, function(err, salt) {
				bcrypt.hash(req.body.password, salt, function(err, hash) {

					// Using the User model, create a new user,
					// storing the email they sent and the hash you just made
					models.user.create({
						name: req.body.name,
						email: req.body.email,
						password: hash
					})
					// In a .then promise connected to that create method,
					// save the user's information to req.session
					// as shown in these comments
					      .then(function(user){


						      // so what's happening here?
						      // we enter the user's session by setting properties to req.

						      // we save the logged in status to the session
						      req.session.logged_in = true;
						      // the username to the session
						      req.session.username = user.username;
						      // the user id to the session
						      req.session.user_id = user.id;
						      // and the user's email.
						      req.session.user_email = user.email;

						      // redirect to home on login
						      res.redirect('/')
					      })
				})
			})
		}
	})
});

module.exports = router;