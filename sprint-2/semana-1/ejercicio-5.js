function aplicarDescuento(precio, porcentajeDescuento) {
    let descuento = precio * (porcentajeDescuento / 100);
    return precio - descuento;
}

let precioMesa = 1500;
let precioSofa = 3000;

let precioFinalMesa = aplicarDescuento(precioMesa, 10)
let precioFinalSofa = aplicarDescuento(precioSofa, 25)

console.log(`Precio original de la mesa: ${precioMesa}. Descuento: 10%. Precio final: $${precioFinalMesa}`)
console.log(`Precio original del sofá: ${precioSofa}. Descuento: 25%. Precio final: $${precioFinalSofa}`)