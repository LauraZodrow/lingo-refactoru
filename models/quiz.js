var mongoose = require('mongoose');
var randomWords = require('random-words');

var quizSchema = mongoose.Schema ({
	questions: [String],
	language: String,
	question: [{
		word: String,
		correct: Boolean
	}]
});

module.exports = mongoose.model('quizCollection', quizSchema);