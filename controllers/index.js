var Words = require('../models/words.js');
var Quiz = require('../models/quiz.js');
var BeGlobal = require('node-beglobal');

var beglobal = new BeGlobal.BeglobalAPI({
	api_token: 'kXo%2FkpxT19pyjQrlR56JGA%3D%3D'
});

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	translate: function(req, res){
		var getTranslation = req.params.translation;
			Words.find({}, function(err, results){
			res.render('translate', {
				words: results,
				translation: req.params
			});
		});
	},
	progress: function(req, res){
		res.render('progress');
	},

	translateForm: function(req, res){
		var wordsData = req.body;
		var word = new Words(wordsData);
		// console.log(word);
		word.save(function(err, result) {
			beglobal.translations.translate(
			  {to: result.languageTo, from: result.languageFrom, text: result.word},
			  function(err, results) {
			    if (err) {
			    	return console.log(err);
			    } else {
			    	res.redirect('/' + results.translation);
			    };
			  }
			);
		});
	},

	deleteWord: function(req,res) {
		Words.remove({_id : req.params.id}, function(err, results){
			res.redirect('/');
		});	
	}	
};

module.exports = indexController;

//pass directly in new word pass in translation of the word to put directly into object
//add translation array to your scheme