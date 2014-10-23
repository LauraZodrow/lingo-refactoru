$(function(){
	// var quizSubmit = $('#quiz-submit')
	$(document).on('click', '#quiz-submit', function(e){
		e.preventDefault();
		// var langVal = $('.lang-val').val();
		$('#quizModal').modal('show');
		// if(langVal === to.name){}
	})
});