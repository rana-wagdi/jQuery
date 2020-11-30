$(document).ready(function() {
	//parent()
	var result=$('#cat').parent();
	console.log(result);

	//parentS()
	result=$('#cat').parents('.category');
	console.log(result);

	//closets()
	result=$('#cat').closest('.category');
	console.log(result);
});