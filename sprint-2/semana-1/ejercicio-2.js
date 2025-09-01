const contrasenaCorrecta = "Jota123";

let contrasenaIngresada = prompt("Ingrese su contraseña: ")

if(contrasenaCorrecta === contrasenaIngresada) {
    alert("¡Acceso Concedido!")
} else if (contrasenaIngresada == ""){
    alert("No se ingresó ninguna contraseña")
} else {
    alert("Contraseña Incorrecta. Acceso denegado.")
}