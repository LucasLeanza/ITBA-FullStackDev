const formulario = document.getElementById("formularioDeContacto");
const estado = document.getElementById("estado");

function handleSubmit(event) {
    event.preventDefault();

    const nombre = formulario.nombre.value;
    const email = formulario.email.value;
    const mensaje = formulario.mensaje.value;

    if (!nombre || !email || !mensaje) {
        estado.textContent = "Por favor, complete todos los campos.";
        estado.className = "error";
        return;
    }

    const elEmailEsValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!elEmailEsValido) {
        estado.textContent = "Por favor, ingrese un correo electrónico válido.";
        estado.className = "error";
        return;
    }

    estado.textContent = "Enviando...";
    estado.className = "enviando";
}

formulario.addEventListener("submit", handleSubmit);