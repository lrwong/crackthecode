function unique(str){
     let j = 0;
     for(let i = 0; i < str.length; i++){
          let x = str.charAt(i);
          j = i;
          while(j < str.length){
               if(x === str.charAt(j)){
                    return false;
               }
               j++;
          }
     }
     return true;
}