var mongoose = require('mongoose');
var randomWords = require('random-words');

var quizSchema = mongoose.Schema ({
	questions: [{
		question: [{
			word: String,
			correct: true
		}]
	}];
});

module.exports = mongoose.model('quizCollection', quizSchema);