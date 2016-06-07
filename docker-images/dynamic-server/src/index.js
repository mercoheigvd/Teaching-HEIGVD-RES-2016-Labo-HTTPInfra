var Chance = require('chance');
var Express = require('express');
var chance = new Chance();
var exp = Express();

/**
 * On HTTP request
 */
exp.get('/', function(request, result) {
	
	// Get a color list
	/*var colors = colorsList();
	
	// Generate the base HTML code
	var html = "<div style='border: 4px #000 solid; display: inline-block;'>";
	
	// For each color, create a corresponding case
	colors.forEach(function(color){
		html += "<div style='background-color:" + color + ";width:160px; height:160px;float:left;'></div>";
	});
	
	// Close the base div
	html += "</div>";
	
	// Send generated HTML
	result.send(html);*/
	
	result.send(colorsList());
});

/**
 * Launching server 
 */
exp.listen(9876, function() {
	console.log("Dynamic server listening on port 9876");
});

/**
 * Returns a random colors list (between 4 and 10 elements)
 */
function colorsList(){
	var num = chance.integer({min: 4, max: 10});
	var colors = new Array();
	
	for(i = 0; i < num; i++) {
		colors.push(chance.color());
	}
	
	return colors;
}