function helloWorld(a){
	for(var i=1;i<=a;i++){
		document.write(i+'. '+'Hello World!'+'<br>');
	}
}
helloWorld(7);

var number1=prompt('Getal 1;');
var number2=prompt('Getal 2:');
if(number1>number2){
	alert(number1);
}else{
	alert(number2);
}