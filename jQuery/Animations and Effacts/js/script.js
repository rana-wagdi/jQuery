$(document).ready(function(){
	$('.item-box').on('click','a.info-link',function(e){
		e.preventDefault();

		//slideDown(), slideUp(), slideToggle()
		$(this).closest('.item-box').find('.more-info').slideToggle('slow');
	});
})