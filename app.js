var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/apiController.js');
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/translate');
var randomWords = require('random-words');

require('./models/seeds/quizSeed.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/translate', indexController.translate);
app.get('/progress', indexController.progress);
// Where the params will go
app.get('/:translation', indexController.translate);


app.get('/delete/:id', indexController.deleteWord);
app.post('/translateSubmit', indexController.translateForm);

app.get('/view/quiz', apiController.quiz);

var server = app.listen(5678, function() {
	console.log('Express server listening on port ' + server.address().port);
});
