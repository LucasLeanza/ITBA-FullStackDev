const precioBaseSilla = 4500.50;
const iva = 0.21;

let valorIva = precioBaseSilla * iva;
let precioFinal = precioBaseSilla + valorIva;

console.log(`Precio base de la silla: ${precioBaseSilla} \nIVA: ${valorIva} \nPrecio Final: ${precioFinal}`)