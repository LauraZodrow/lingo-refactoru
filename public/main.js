$(function(){
	// var quizSubmit = $('#quiz-submit')
	$(document).on('click', '#quiz-submit', function(e){
		e.preventDefault();
		// var langVal = $('.lang-val').val();
		$('#quizModal').modal('show');

		$.get('/clickSubmit', {}, function(resultData){
			console.log(resultData);
		});
		// if(langVal === to.name){}
	})
});