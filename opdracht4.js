var number=prompt('Your number:');
var standard=1
function tafels(){
	for(var i=1;i<11;i++){
		document.write(i+' x '+standard+' = '+(i*standard)+'<br>');
	}
}
for(var i=0;i<number;i++){
	tafels();
	standard++
	document.write('<br>');
}