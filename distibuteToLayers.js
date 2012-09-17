// Distribute to Layers
// Shaun T. White
// Sept. 16, 2012

/*

DESCRIPTION

This will take all selected elments
and put them on thier own layer.


*/



if(documents.length >0){
	
var distroCount;

if(selection != null){

	distroCount = selection.length;
	consolr.log(distroCount);

	for(var i = 0; i <= distroCount; i++){

		console.log(Layers.length);
		Layers.add();
	}


}else{
	alert("Please select the item(s) you would to distribute to individual layers");
}



}else{
	alert("Please open a document and select the item(s) you would to distribute to individual layers");
}
