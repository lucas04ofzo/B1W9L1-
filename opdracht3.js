function vragen(){
	var naam=prompt('Naam:');
	var leeftijd=prompt('Leeftijd');
}
if(naam='stop'){
	write();
}if else(leeftijd='stop'){
	write();
}else(
	vragen();
)

function write(){
	document.write('Hallo '+naam+', je leeftijd is '+leeftijd);
}