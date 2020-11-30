$(document).ready(function(){
	$('#example').on('click','.switch',function(){
		console.log($(this));
		$(this).parent().toggleClass('highlighted');
	})
})