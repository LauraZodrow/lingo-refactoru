var mongoose = require('mongoose');

var wordsSchema = mongoose.Schema ({
	word: String,
	languageFrom: String,
	languageTo: String,
	resultTran: [String]
});

module.exports = mongoose.model('translate', wordsSchema);