/*
//while
let pass = '';
// repetir mientras 
while (pass != 'hola') { //repetir mientras no sea hola
	pass = prompt('introdusca su contraseña');

	if (pass != 'hola') {
		alert('contraseña erronea');
	}

	else {
		alert("contraseña valida");
	
	}
}

console.log('fin del bucle');

// Do While
// hacer y luego repetir mientras
do{ //hacer esto
	pass = prompt('intrpdusca contraseña');

} while (pass != 'hola'); // y repetir mientras no sea
*/
//for

let n = [1, 3, 1, 4, 1, 2];
let n2 = n.length;

for (let i = 0; i <= n2; i++) { // variable, parada, iterador
	n.splice(1, 0, 88);
	console.log(n);
}
for (let n_i of n) {
	console.log(n_i);

}

for (let values in n) {
	console.log(values);

}

for (let i = 0; i < n.length; i++) {
	console.log(i);
	if (n[i] === 4) {
		break;

	}
}

for (let i = 0; i < n.length; i++) {
	if (n[i] === 4 && n[i] === 3) {
		continue;

	}
	console.log(n);
}
