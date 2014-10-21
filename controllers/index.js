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
			  {to: result.languageTo, from: result.languageFrom, text: result.word},
			  function(err, results) {
			    if (err) {
			      return console.log(err);
			    } else {
					word.resultTran.push(results.translation);
					console.log(word.resultTran);
			    };
				res.redirect('/');
				return word.resultTran;
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