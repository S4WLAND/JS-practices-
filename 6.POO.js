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
