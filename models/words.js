var mongoose = require('mongoose');

var wordsSchema = mongoose.Schema ({
	word: String,
	languageFrom: String,
	languageTo: String
});

module.exports = mongoose.model('translate', wordsSchema);