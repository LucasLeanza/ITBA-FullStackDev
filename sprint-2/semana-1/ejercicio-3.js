let totalCompra = 0;

while (confirm("¿Desea agregar un producto al carrito?")) {
    let precio = prompt("Ingrese el valor del producto: ")
    let valor = parseFloat(precio)
    if (!isNaN(valor)) {
    totalCompra += valor;
    } else {
    alert("El valor ingresado no es válido, intente nuevamente.");
    }
}

alert(`El total de su compra es: $${totalCompra}`)