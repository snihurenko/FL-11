let a1 = Number(window.prompt('Please put x for A'));
let a2 = Number(window.prompt('Please put y for A'));
let b1 = Number(window.prompt('Please put x for B'));
let b2 = Number(window.prompt('Please put y for B'));
let c1 = Number(window.prompt('Please put x for C'));
let c2 = Number(window.prompt('Please put y for C'));
const half = 2;
if ( c1 === (a1 + b1) / half && c2 === (a2 + b2) / half) {
	console.log(true); 
} else if ( c1 !== (a1 + b1) / half || c2 !== (a2 + b2) / half) {
	console.log(false);
}

	