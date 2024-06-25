// cambiar el color al presionar las letras


let color_caja = "white";
document.addEventListener ("keydown", function (event) {
    if (event.key === "a"){
        color_caja = "pink";
    }else if (event.key === "s"){
        color_caja = "orange";
    }else if (event.key === "d"){
        color_caja = "deepskyblue";
    }
    ele1.style.backgroundColor = color_caja;

    if (event.key === "q") {
        agregaCaja("blueviolet");
    } else if ( event.key === "w") {
        agregaCaja("gray");
    } else if (event.key === "e") {
        agregaCaja("brown");
    }
});

function agregaCaja(color) {
    const otraCaja = document.createElement("div");
    otraCaja.className = "nuevacaja";
    otraCaja.style.backgroundColor = color;
    const parent = document.getElementById('mascaja');
    parent.appendChild(otraCaja);
  }