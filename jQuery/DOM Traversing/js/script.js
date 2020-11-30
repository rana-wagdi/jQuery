$(document).ready(function() {
	
	//CSS selectors
	var result=$('#animals > .creature');
	console.log(result);

	//DOM traversing
	result=$('#animals').children('.creature');
	console.log(result);
});