'use strict';

let argv = require('yargs')
.usage('usage: node $0 --str ["str"]')
.demand(['str1', 'str2'])
.argv;


function anagram(str1, str2){
	let hash1, hash2;
	let i, j, k, x, ch;

	hash1 = [];
	hash2 = [];

	for(i = 0; i < 128; i++){
		hash1.push(0);
		hash2.push(0);
	}

	for(j = 0; j < str1.length; j++){
		ch = str1.charCodeAt(j);
		hash1[ch]++;
	}

	for(k = 0; k < str2.length; k++){
		ch = str2.charCodeAt(k);
		hash2[ch]++;
	}

	for(x = 0; x < 128; x++){
		if(hash1[x] !== hash2[x]){
			return false;
		}
	}

	return true;
}

console.log(anagram(argv.str1, argv.str2));
