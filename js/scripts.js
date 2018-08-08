

var GToL = function(number1){
	return number1 * 3.78541;
};
var LToG = function(number2){
	return number2 / 3.78541;
};

$(document).ready(function() {
	$("#gallonConvert").submit(function(event){
		var inputGallon = parseInt($("input#gallon").val());
		var outputLiter = GToL(inputGallon).toFixed(2);
		$("#outputLiter").text(outputLiter);
		event.preventDefault();
	});

	$("#literConvert").submit(function(event){
		var inputLiter = parseInt($("input#liter").val());
		var outputGallon = LToG(inputLiter).toFixed(2);
		$("#outputGallon").text(outputGallon);
		event.preventDefault();
	});
});
