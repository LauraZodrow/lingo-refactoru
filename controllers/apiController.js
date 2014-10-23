var Words = require('../models/words.js');
var BeGlobal = require('node-beglobal');

var beglobal = new BeGlobal.BeglobalAPI({
	api_token: 'kXo%2FkpxT19pyjQrlR56JGA%3D%3D'
});

var apiController = {
	quiz: function(req, res){
		res.render('quiz')
	},

	// quizTest: function(req, res){
	// 	beglobal.translations.translate(
	// 	  {to: result.name},
	// 		function(err, results) {
	// 		    if (err) {
	// 		    	return console.log(err);
	// 		    } else {
	// 		    	res.redirect('/' + results.translation);
	// 		    };	
	// 	console.log(result.name);
	// });
}

module.exports = apiController;