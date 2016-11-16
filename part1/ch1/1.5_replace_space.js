'use strict';

let argv = require('yargs')
.usage('usage: node $0 --str ["str"]')
.demand(['str'])
.argv;

//using built in js replace method
function replaceSpace(str){
	//searches for a regular expression to replace all spaces with %20
	return str.replace(/ /g, "%20");
}

function repSplace(str){
	let i;
	let out = "";

	for(i = 0; i < str.length; i++){
		if(str[i] === " "){
			out+='%20'
		} else {
			out+=str[i];
		}
	}
	return out;
}


console.log('using built in method: ' + replaceSpace(argv.str));
console.log('using own method: ' + repSplace(argv.str));
