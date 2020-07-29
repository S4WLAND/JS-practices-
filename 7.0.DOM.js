// const title = document.getElementById('title');
// accediendo a contenido del id
// title.textContent = 'DOM - accediendo a nodos/elementos';
// para clases se coloca punto
//const paragraph = document.querySelector('.paragraph');
// const span = paragraph.querySelector('span');
// accediendo desde id hasta elemento con queriselector
// const span = document.getElementById('title').querySelector('span');
const paragraphs = document.querySelectorAll('.paragraph');
// console.log(paragraphs);

const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'));
paragraphsArray.map(p=>p.style.color ='blue');
