// Distribute to Layers
// Shaun T. White
// Sept. 16, 2012

/*
DESCRIPTION

This will take all selected elments
and put them on thier own layer.
*/

// check if a document is open
if(app.documents.length >0){

	// stores a count selected items	
	var distroCount;
	var oringalLayerCount;

	// checks if an item is selected
	if(selection == null || selection == 0){

	alert("Please select the item(s) you would to distribute to individual layers");

	}else{

	// updates the variable that stores the selection count
	distroCount = selection.length;
	oringalLayerCount = activeDocument.layers.length;

	for(var i = 0; i < distroCount; i++){

		//alert(activeDocument.layers.length);
		activeDocument.layers.add();

		//duplicate each element in the selection array
		selected[i].duplicate( , ElementPlacement.PLACEATEND );
		}
	}

}else{
	alert("Please open a document and select the item(s) you would like to distribute to individual layers");
}
