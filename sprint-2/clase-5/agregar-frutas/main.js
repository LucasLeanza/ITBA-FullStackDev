const botonAgregarNaranjas = document.getElementById("agregarNaranjas");
const botonAgregarPeras = document.getElementById("agregarPeras");
const botonAgregarManzanas = document.getElementById("agregarManzanas");

const lista = document.getElementById("listaFrutas");

function agregarFrutas(fruta) {
    const elementoLista = document.createElement("li");

    elementoLista.textContent = fruta;
    lista.appendChild(elementoLista);
}

botonAgregarNaranjas.addEventListener("click", () => agregarFrutas("Naranja"));
botonAgregarPeras.addEventListener("click",() => agregarFrutas("Pera"));
botonAgregarManzanas.addEventListener("click",() => agregarFrutas("Manzana"));