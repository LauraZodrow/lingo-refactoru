var Words = require('../models/words.js');
var BeGlobal = require('node-beglobal');
var randomWords = require('random-words');
var Quiz = require('../models/quiz.js');

var beglobal = new BeGlobal.BeglobalAPI({
	api_token: 'kXo%2FkpxT19pyjQrlR56JGA%3D%3D'
});

var apiController = {
	quiz: function(req, res){
		res.render('quiz');
		console.log(randomWords(5));
	},

	clickSubmit: function(req, res) {
		res.send('hello');
	}
}

module.exports = apiController;