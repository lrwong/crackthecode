'use strict';

function isRotation(str1, str2){
	
	if(str1.length !== str2.length){
		return false;
	}
	
	let i;

	for(i = 0; i < str1.length; i++){
		if(isSubstring(str1, str2))
			return true;
		else
			rotate(str2);
	}
	return false;
}

function rotate(str){
	let x = str.pop();
	str.unshift(x);
	return str;
}
