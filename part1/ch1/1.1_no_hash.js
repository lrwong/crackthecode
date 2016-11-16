"use strict";

let argv = require('yargs')
.usage('Usage: node $0 --str ["str"]')
.demand(['str'])
.argv;

function unique(str){
     let j = 0;
     for(let i = 0; i < str.length; i++){
          let x = str.charAt(i);
          j = i+1;
          while(j < str.length){
               if(x === str.charAt(j)){
                    return false;
               }
               j++;
          }
     }
     return true;
}

console.log(unique(argv.str));
