var Chance = require('chance');
var Express = require('express');
var chance = new Chance();
var exp = Express();

exp.get('/', function(request, result) {
	result.send(mailsArray());
});

exp.listen(9876, function() {
	console.log("Dynamic server listening on port 9876");
});

function mailsArray(){
	var num = chance.integer({min: 1, max: 20});
	var mails = new Array();
	
	for(i = 0; i < num; i++){
		mails.push(chance.email());
	}
	
	return mails;
}