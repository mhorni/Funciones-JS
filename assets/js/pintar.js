// cambia de color al hacer clic

let pintar = document.querySelector('#ele1');
pintar.addEventListener('click', function(){ 
    if(pintar.style.backgroundColor!=='green'){
        pintar.style.backgroundColor='green';
    }else{pintar.style.backgroundColor='yellow'}
});








