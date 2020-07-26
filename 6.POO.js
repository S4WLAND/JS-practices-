//objetos - diccionarios en python pero raros
// key : value

const person = {
	name : "juan",
	age : 26,
	sons : [
	'laura', 
	'diego', 
	'muro', 
	{ 
		n : 123, 
		n2 : 345, 
		n3 : [1, 2, 'soy lo que buscas', 4, 5]
	}, 
	'tomas']
};
// se llaman las propiedades con objeto.propiedad

console.log(person.name);
console.log(person["sons"]);

for (const values in person) {
	console.log(person[values]);
}

for (const son of person.sons) {
	console.log(son);

}
// LLAMADA ENTRE ESTRUCTURAS DE DATOS
console.log(person.sons[3].n3[2]);

// funcion normal 
function  sum(n1, n2) {
	resultado = n1 + n2;
	return resultado;

}

console.log(sum(2, 3));

// funcion modo corto

const rest = (n1, n2) => {
	resultado =n1 - n2; 
	return resultado;
	};

console.log(rest( 3, 2));

//OOP Class, obejetos, propiedades, metodos

class Persona{
	constructor(nombre, apellido, edad){
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;

		this.datos = `me llamo ${this.nombre} ${this.apellido}
		y tengo ${this.edad}`;
	}

	saludar(){
		return `hola me llamo ${this.nombre} y tengo ${this.edad}`;
	}

}
// instanciar clase osea crear objeto
// new class es para aginar clase a instancia
const juan = new Persona('juan', 'garcia', 32);
const marta = new Persona('marta', 'garcia', 24);
// ahora esta instacia tiene propiedades y metodos
console.log(juan);
// acceder a propiedad
console.log(juan.apellido);
// acceder a metodo
console.log(juan.saludar());
console.log(marta.saludar());

const numbers = [-12, 2, 3, 23, 43, 2, 3];
// (...) expande el conetenido de un array
// expacion diseneda para estraccion individual de datos
console.log(...numbers);

const addnumbers = (a, b, c) => {
	console.log(a+b+c);
};

addnumbers(1, 2, 3);
// array a eviar valores a funcion a, b, c
let numberToAdd = [1, 2, 3];
// expande el array y manda los valores a la funcion de forma separada
addnumbers(...numberToAdd);

let user = ["javier", "david", "rosa", "juan", "mercedes"];
let newUsers = ["marta", "jaime", "laura"];
user.push(...newUsers);
console.log(user);
user.splice(5, 0, ...newUsers);
console.log(user);
let arr1 = [1, 2, 3, 4];
let arr2 = [arr1, "str", true];
console.log(arr2);
// copia los objetos del array mas no la estructura del array en si
let arr3 = [...arr1, "str", true];
console.log(arr3);
// concatenar array 
let arrConcat1 = arr1.concat(arr2);
console.log(arrConcat1);
// las dos opciones hacen lo mismo
// pero esta segunda es mas optima
let arrConcat2 = [...arr1, ...arr2];
console.log(arrConcat2);

// parametros REST

const restParams = (...petition) => {
	console.log(petition);
	return petition;
};
// math - valor mas alto y mas bajo

petition_1 = restParams(1, 2, 3, 4, 2, 5, 6, 7, 8);
console.log(petition_1);
console.log(Math.max(...petition_1));
console.log(Math.min(...petition_1));

//eliminar elemento duplicado -- 2 en este caso
console.log([...new Set(petition_1)]);
