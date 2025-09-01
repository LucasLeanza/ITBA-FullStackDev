async function obtenerProducto(id) {
  try {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const respuesta = await fetch(url);
 
    // fetch no considera un error 404 como un rechazo de la promesa,
    // así que debemos verificar la respuesta manualmente.
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: El estado es ${respuesta.status}`);
    }
 
    // response.json() también devuelve una promesa, ¡así que también usamos await!
    const datosProducto = await respuesta.json();
 
    console.log("Producto obtenido:", datosProducto);
 
  } catch (error) {
    console.error("No se pudo obtener el producto:", error);
  }
}
 
obtenerProducto(1); // Pedimos el producto con ID 1