var add = function(number1, number2){
	return number1 + number2;
};
var subtract = function(number1, number2){
	return number1 - number2;
};
var divide = function(number1, number2){
	return number1 / number2;
};
var multiply = function(number1, number2){
	return number1 * number2;
};

$(document).ready(function(){
	// var result1 = subtract(number1, number2);
	// var result3 = divide(number1, number2);
	// var result4 = multiply(number1, number2);
	$("form#input").submit(function(event){
		event.preventDefault();
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var result = add(number1, number2);
		$("span#result").text(result);
	});

});
