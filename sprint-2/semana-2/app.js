let catalogoMuebles = [
    {id: 1, nombre: "Mesa", precio: 10000, imagenURL: "https://placehold.co/600x400"},
    {id: 2, nombre: "Silla", precio: 6000, imagenURL: "https://placehold.co/600x400"},
    {id: 3, nombre: "Sofa", precio: 15000, imagenURL: "https://placehold.co/600x400"},
    {id: 4, nombre: "Cama", precio: 18000, imagenURL: "https://placehold.co/600x400"},
    {id: 4, nombre: "Cama", precio: 18000, imagenURL: "https://placehold.co/600x400"},
    {id: 4, nombre: "Cama", precio: 18000, imagenURL: "https://placehold.co/600x400"},
    {id: 4, nombre: "Cama", precio: 18000, imagenURL: "https://placehold.co/600x400"},
    {id: 4, nombre: "Cama", precio: 18000, imagenURL: "https://placehold.co/600x400"},
    {id: 4, nombre: "Cama", precio: 18000, imagenURL: "https://placehold.co/600x400"},
    {id: 4, nombre: "Cama", precio: 18000, imagenURL: "https://placehold.co/600x400"},
    {id: 4, nombre: "Cama", precio: 18000, imagenURL: "https://placehold.co/600x400"},
    {id: 4, nombre: "Cama", precio: 18000, imagenURL: "https://placehold.co/600x400"},
    {id: 4, nombre: "Cama", precio: 18000, imagenURL: "https://placehold.co/600x400"},
    {id: 4, nombre: "Cama", precio: 18000, imagenURL: "https://placehold.co/600x400"},
    {id: 4, nombre: "Cama", precio: 18000, imagenURL: "https://placehold.co/600x400"},
    {id: 4, nombre: "Cama", precio: 18000, imagenURL: "https://placehold.co/600x400"},
];

const container = document.getElementById('product-container')

catalogoMuebles.forEach(producto => {
    // Crear tarjeta
    let card = document.createElement("div");
    card.classList.add("product-card");

    // Nombre
    let nombre = document.createElement("h3");
    nombre.textContent = producto.nombre;

    // Precio
    let precio = document.createElement("p");
    precio.textContent = `$${producto.precio}`;

    // Imagen
    let img = document.createElement("img");
    img.src = producto.imagenURL;
    img.alt = producto.nombre;

    // Agregar elementos a la tarjeta
    card.appendChild(nombre);
    card.appendChild(precio);
    card.appendChild(img);

    // Agregar tarjeta al contenedor
    container.appendChild(card);
});
