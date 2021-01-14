function addition(number1,number2){
	document.write(number1+' + '+number2+' = '+(number1+number2)+'<br>');
}
function subtraction(number1,number2){
	document.write(number1+' - '+number2+' = '+(number1-number2)+'<br>');
}
function multiplication(number1, number2){
	document.write(number1+' x '+number2+' = '+(number1*number2)+'<br>');
}
function division(number1, number2){
	document.write(number1+' : '+number2+' = '+(number1/number2)+'<br>');
}
function increment(number){
	document.write(number+' + '+' 1 '+' = '+(number+1)+'<br>');
}
function decrement(number){
	document.write(number+' - '+' 1 '+' = '+(number-1)+'<br>');
}

addition(10,12);
subtraction(58,34);
multiplication(6,7);
division(144,12);
increment(12);
decrement(34);