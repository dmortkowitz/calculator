

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



var number1 = parseInt(prompt("Add a number:"));
var number2 = parseInt(prompt("Add another number:"));
var result = add(number1, number2);
var result1 = subtract(number1, number2);
var result3 = divide(number1, number2);
var result4 = multiply(number1, number2);
alert(result);
alert(result1);
alert(result3);
alert(result4);
