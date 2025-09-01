let cantidadProductos = prompt("¿Cuántos productos desea agregar a la lista?");
cantidadProductos = parseInt(cantidadProductos);

for (let i = 1; i <= cantidadProductos; i++) {
    console.log(`Producto #${i} agregado`);
}
console.log(`Se han agregado ${cantidadProductos} productos a la lista de compra.`)