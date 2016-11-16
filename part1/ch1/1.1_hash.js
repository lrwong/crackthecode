function unique(str){
let hash = [];

//js is dumb and needs to dynamically allocate the array
for(let y = 0; y < 26; y++){
     hash.push(0);
}

//or use this?
let hash = new Array(26);

//iterate across the string and increment the hash table
//if any spot has value > 1 return false
for(let i = 0; i < str.length; i++){
     let x = str.charCodeAt(i);
     hash[x]++;
     if(hash[x] > 1){
          return false;
     }
}

//if the string has been iterated through without returning
//false, all characters are unique
return true;
}