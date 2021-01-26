var naam
var leeftijd
var stop
function vragen(){
	naam=prompt('Naam:');
	leeftijd=prompt('Leeftijd:');
	stop=prompt('Stop?');
}
function write(){
	document.write('Hallo '+naam+', je leeftijd is '+leeftijd);
}
do{
	vragen();
}while(stop!='stop');
write();