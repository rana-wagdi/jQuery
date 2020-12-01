$(document).ready(function(){
	$('.item-box').on('click','a.info-link',function(e){
		e.preventDefault();

		//hide(), toggle()
		//$(this).closest('.item-box').find('.more-info').show();
		$(this).closest('.item-box').find('.more-info').toggle(1000);//slow,,fast,,1000(1s)
	});
})