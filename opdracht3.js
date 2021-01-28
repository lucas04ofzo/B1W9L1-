var naam
var leeftijd
var stop1
var stop2
function vragen(){
	naam=prompt('Naam:');
	leeftijd=prompt('Leeftijd:');
	stop1=prompt('Stop?');
	stop2=stop1.toLowerCase();
}
function write(){
	document.write('Hallo '+naam+', je leeftijd is '+leeftijd);
}
do{
	vragen();
}while(stop2!='stop');
write();