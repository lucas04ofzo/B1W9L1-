var number=prompt('Your number:');
function tafels(){
	for(var i=1;i<11;i++){
		document.write(i+' x '+number+' = '+(i*number)+'<br>');
	}
}
for(var i=0;i>=number;i++){
	number=number+1
	tafels();
}