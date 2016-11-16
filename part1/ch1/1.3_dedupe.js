'use strict';

let argv = require('yargs')
.usage('usage: node $0 --str ["str"]')
.demand(['str'])
.argv;


function dedupe(str){
	let hash = [];
	let i, j;
	
	let out = "";
	str = str.toLowerCase();
	for(let x = 0; x < 26; x++){
		hash.push(0);
	}

	i = 0;
	while(i < str.length){
		let ch = str.charCodeAt(i) - 97;
		if(hash[ch] === 0){
			out += str[i];
			hash[ch]++;
		}
		i++;
	}
	return out;
}

console.log(dedupe(argv.str));
