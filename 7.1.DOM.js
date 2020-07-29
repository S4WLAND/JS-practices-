// const title = document.getElementById('title');
// const name = document.getElementById('name');
/*

// acceder a atributos de HTML 
console.log(name.getAttribute('type'));
// se puede cambiar a los diversos tipos 
// 'date' 'radio' etc 
name.setAttribute('type', 'number');
console.log(name.getAttribute('type'));

// anadir clases
title.classList.add('main-title', 'other-title');
// eliminar clase
title.classList.remove('other-title');
// para revisar si existe o no una clase
 if (title.classList.contains('title')) 
 	console.log('title tiene la case title');
 else console.log('title no tiene la calse title');
// remplazar clase 
title.classList.replace('main-title', 'title2');

// recoje etiquetas y texto
console.log(title.innerHTML);
// recoje solo texto plano
console.log(title.textContent);

console.log(name.value.length);

console.log(title);
console.log(name);

*/

// --- elementos  ----

const button = document.getElementById('button');

button.addEventListener('click', () => {
	console.log('CLICK');

});

button.addEventListener('dblclick', () => {
  console.log('DOBLE CLICK');
});

const input = document.getElementById('name');
// objeto evento (e)
input.addEventListener('keyup',(e) => {
  //console.log(e.path[0].id);
  console.log(e);
});

button.addEventListener('click',(e) => {
	console.dir(e.target);
});
let 