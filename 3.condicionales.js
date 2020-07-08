let num = 12 ;

let num2 = "-12";

if (num > 0 && num2 > 0) {
	console.log(`${num} y ${num2} es mayor que 0 `);
	console.log(`${num} y ${num2} es mayor que 0 `);
}

else if (num > 0 || num2 > 0) {
	console.log(`${num} o ${num2} es mayor que 0 `);
	console.log(`${num} o ${num2} es mayor que 0 `);
}

else if (num == 0 && num == 0) { 
	console.log("ambos son igual a cero");
}

else if (num < 0){
	console.log("no es mayor que cero");

}
else {
	num = undefined;
}

let nump = 7;
switch (nump) {
	case 1: console.log('nump tiene el valor de 1');
		break;
	case 2: console.log('nump tiene el valor de 2');
		break;
	default: console.log('no tiene ni 1 ni dos');

}

switch (nump) {
	case 1:
	case 3:
	case 5: 
		console.log(`${nump} es impar`);
	break;
	case 2:
	case 4:
		console.log(`${nump} es par`);	
	break;
	default:

	break;
}

let num3 = 2;
if (num3 % 2 == 0) {
	console.log(`${num3} es par`);
} 

else{
	console.log(`${num3} es inpar`);
}

// operador ternario
(num3 % 2 == 0) ? console.log(`${num3} es par`) : console.log(`${num3} es impar`)

// operador ternario con multiple sentencias
(num3 % 2 == 0) ? 
	(
		console.log(`${num3} es par`),
		console.log(`${num3} es par`)

		) 
	: 
	(
		console.log(`${num3} es impar`),
		console.log(`${num3} es impar`)
		);