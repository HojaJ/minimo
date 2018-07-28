/*	Custom Jquer	*/
$(function() {                    
	$('.menu-icon').click(function () {
		$(this).toggleClass('change');
		$('.menu').slideToggle('linear');
	});
});