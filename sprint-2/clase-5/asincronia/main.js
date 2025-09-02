const traerUsuarios = document.getElementById('cargarUsuarios');
const listaDeUsuarios = document.getElementById('listaDeUsuarios');

async function cargarUsuarios() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        const respuestaAJSON = await respuesta.json();

        
    } catch(error) {
        console.log(error.message);
    }
}