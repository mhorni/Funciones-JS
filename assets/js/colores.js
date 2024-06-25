
//funcion cambia color


function cambiaColor(elemento, color) {
  elemento.style.backgroundColor = color;
}

elemento1 = document.querySelector('#ele1');
elemento2 = document.querySelector('#ele2');
elemento3 = document.querySelector('#ele3');
elemento4 = document.querySelector('#ele4');

elemento1.addEventListener('click', function() {
  cambiaColor(elemento1,'black');
});

elemento2.addEventListener('click', function() {
  cambiaColor(elemento2,'black');
});

elemento3.addEventListener('click', function() {
  cambiaColor(elemento3,'black');
});

elemento4.addEventListener('click', function() {
  cambiaColor(elemento4,'black');
});