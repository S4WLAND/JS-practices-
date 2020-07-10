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
numeros.splice(2, 0, 22); // - se pueden colocar barios elementos  ej: (2, 0, 22, 23, 24, 25)
console.log(numeros);
numeros.splice(0, 1);
console.log(numeros);
numeros.splice(5);
console.log(numeros);
let nuevos_numeros = numeros.slice(2, 5); //crea una copia del array desde un indice a otro(2, 5)
console.log(nuevos_numeros);


// metodos arrays


let word1 = "hola mundo";
console.log(Array.from(word1)); // convierte cadena en array
console.log(word1.split('')); // vuelve cadena en array en funcion de un separador
lista = ['t', 's', 'e', 'y', 'f', 'a', 'r', 'v', 'b',];
lista2 = [3, 4, 6, 7, 23, 45, 42, 1, 7, 8, 4];
// organiza una array valor unicode, alfabeticamente numericamente
console.log(lista.sort()); 
// algoritmo para ordenar de forma acendente los numero numero a - numero b
// para determinar cual es menor que cual y asi ordenar
console.log(lista2.sort((a, b) => a - b)); 
// recorre un array como lo hace un for in
const numbers = [12, 25, 84, 98 ];
numbers.forEach((number, index) => console.log(number));
// comprueva si elemento cumple la condicion
const words =  ['HTML', 'CSS', 'JAVASCRIPT', 'PHP'];
console.log(words.some(word => word.length > 10));
// comprueva si todos los elementos cumple la condicion
console.log(words.every(word => word.length > 3));
// trasfroma  todo elemeto de array y devuevle otro array
const numbers2 = numbers.map(number => number*2);
console.log(numbers2);






