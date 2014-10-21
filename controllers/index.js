var Words = require('../models/words.js');
var BeGlobal = require('node-beglobal');

var beglobal = new BeGlobal.BeglobalAPI({
	api_token: 'kXo%2FkpxT19pyjQrlR56JGA%3D%3D'
});

var indexController = {
	index: function(req, res) {
		Words.find({}, function(err, results){
			res.render('index', {
				words: results
			});
		});
	},

	translateForm: function(req, res){
		var wordsData = req.body;
		var word = new Words(wordsData);
		word.save(function(err, result) {
			beglobal.translations.translate(
			  {text: wordsData.word, from: wordsData.languageFrom, to: wordsData.languageTo},
			  function(err, results) {
			    if (err) {
			      return console.log(err);
			    }
				res.redirect('/');
			    console.log('Results:', results);
			    console.log('word: ', word);
			    console.log('wordsData: ', wordsData);
			    console.log('wordsData.word: ', wordsData.word);
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