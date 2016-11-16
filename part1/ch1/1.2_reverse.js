function reverse(str){
     let stack = []; //contains the current str
     let reversed = ""; //will contain the reversed string
     for(let i = 0; i < str.length; i++){
          stack.push(str.charAt(i));
     }
     for(let x = 0; x < stack.length(); x++){
          reversed = reversed + stack.pop();
     }
     return reversed;
}