let numeros = [1, 2, 3, 4, 5];
let palabras = ['hola', 'bienvenido', 'a', 'youtube'];
let numero = 4;
console.log(numeros[4] + numeros[4]); // indice de array
console.log(`${palabras[1]} tiene ${palabras[1].length} letras`); //metodo de array que cuenta sus elementos
console.log(numeros.length);
console.log(Array.isArray(numero)); //para berificar si es o no array
console.log(numeros);
numeros.shift(); // elimina el primer elemento
console.log(numeros);
numeros.pop(); // elimina el ultimo elemento
console.log(numeros);
let numero_eliminado = numeros.shift();
console.log(numero_eliminado);
let numero_eliminado2 = numeros.pop();
console.log(numero_eliminado2);
//variable que contiene una longitud de array
let lenght_new = numeros.push(6,7,2,3); // agregar elementos al final
console.log(lenght_new);
let lenght_new2 = numeros.unshift(0); // agregar elementos al inicio
console.log(lenght_new2);
console.log(numeros);
numeros.reverse(); //invierte de forma ordenada el array
console.log(numeros);
console.log(numeros.join('-')); // devuelve un string con un separador que indiquemos
console.log(numeros);
/*  -- splice -- 
	(1, 2, 3) 
	1 - desde que pocicion o indice inicia
	2 - cuantos elementos se borran
	3 - que elemento entra

	(1, 2)
	1 - desde done inicia
	2 - cuantos elimina

	(1)
	1 - elimina todo en adelante desde dicha pocicion

*/
numeros.splice(2, 0, 22);
console.log(numeros);
numeros.splice(0, 1);
console.log(numeros);
numeros.splice(5);
console.log(numeros);



