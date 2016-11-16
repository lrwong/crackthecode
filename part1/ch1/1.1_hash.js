"use strict";

let argv = require('yargs')
.usage('Usage: node $0 --str [char]')
.demand(['str'])
.argv;


function unique(str){
let hash = [];
str = str.toLowerCase(0);	//turn everything to lower case to make the hash table work


//js is dumb and needs to dynamically allocate the array
for(let y = 0; y < 26; y++){
     hash.push(0);
}


//iterate across the string and increment the hash table
//if any spot has value > 1 return false
for(let i = 0; i < str.length; i++){
     let x = str.charCodeAt(i) - 97;
     hash[x]++;
     if(hash[x] > 1){
          return false;
     }
}
console.log(hash);
//if the string has been iterated through without returning
//false, all characters are unique
return true;
}

console.log(unique(argv.str));
