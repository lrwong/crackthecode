'use strict';

let mat = [
	[1, 2, 4, 15, 6],
	[3, 0, 5, 6, 8],
  	[5, 6, 4, 0, 10]
];
console.log('before');
printM(mat);
console.log('after');
printM(findZeroes(mat));

function findZeroes(mat){
	let m = mat.length;
	let n = mat[0].length;
	let src = [];



	let i, j;
	for(i = 0; i < m; i++){
		for(j = 0; j < n; j++){
			if(mat[i][j] === 0){
				let zero = {
					col: i,
					row: j
				};
				src.push(zero);
			}
		}
	}
	for(let x = 0; x < src.length; x++){
		mat = zeroOut(mat, src[x]);
	}
	return mat;
}

function zeroOut(mat, src){
	let rowL = mat.length;
	let colL = mat[0].length;

	for(let i = 0; i < rowL; i++){
		mat[i][src.row] = 0;
	}

	for(let j = 0; j < colL; j++){
		mat[src.col][j] = 0;
	}
	return mat;
}

function printM(mat){
	let i;
	for(i = 0; i < mat.length; i++){
		console.log(mat[i]);
	}
}