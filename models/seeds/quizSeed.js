var mongoose = require('mongoose');
var randomWords = require('random-words');
var Quiz = require('../quiz.js');

Quiz.find({}, function(err, results){
	if (results.length === 0){
		var inputLang = new Quiz({
			questions: [String],
			language: "spa",
			question: [{
				word: "airplane",
				correct: true
			}]
		});
	inputLang.save();
	console.log(inputLang);
	};
});