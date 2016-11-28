'use strict';

let argv = require('yargs')
.usage('usage: node $0 --n [num]')
.demand(['n'])
.argv;

let mat = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8]
];

//rotate an NxN matri 90 degrees in place
function rotateInPlace(mat){

}

//rotate an NXN matrix 90 degrees
function rotate(mat){
	let out = [[],[]];
	let layer = 0;

	for(let x = 0; x < mat.length; x++){
		for(let y = 0; y < mat.length; y++){
			
		}
	}


	mat[5][2] = 0;

	return mat;

//[0][0] -> [0][n-1] -> [n-1][n-1] -> [n-1][0] -> [0][0]
	for(let i = layer; i < mat.length-layer; i++){
		for(let j = 0; j < mat.length-layer; j++){
			
		}
	}
	for(let i = 0; i < mat.length; i++){
		for(let j = 0; j < mat.length; j++){
			
		}
	}


	return mat.length;
}

console.log(rotate(mat));
