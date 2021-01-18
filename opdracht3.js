function vragen(){
	var naam=prompt('Naam:');
	var leeftijd=prompt('Leeftijd');
}
function write(){
	document.write('Hallo '+naam+', je leeftijd is '+leeftijd);
}
if(naam='stop'){
	write();
}else{
	vragen();
}