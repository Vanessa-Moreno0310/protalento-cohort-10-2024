// objeto document y su método para manejar eventos
/*
DOMContentLoaded – el navegador HTML está completamente cargado y el árbol DOM está construido, pero es posible que los recursos externos como <img> y hojas de estilo aún no se hayan cargado.
*/
document.addEventListener("DOMContentLoaded", function() {
  // (callback / función anónima) para el evento
  // buscar mi elemento del mensaje
  const domLoadedElement = document.querySelector("#dom-loaded");
  // actualizo el elemento
  // domLoadedElement.textContent = "El DOM está listo";

  // La lógica de nuestra página.
  const formElement = document.querySelector("form");
  formElement.addEventListener("submit", function(event) {
    event.preventDefault(); // evita el comportamiento natural del elemento
    console.log("Evento " + event.type);
  });
  // console.log(lista_super);  // repaso del scope/alcance

  // Manejo de clic en botón agregar
  const botonAgregar = document.querySelector("#boton-agregar");
  botonAgregar.addEventListener("click", agregar);
  
  // Manejo de clic en botón calcular
  const botonCalcular = document.querySelector("#boton-calcular");
  botonCalcular.addEventListener("click", calcular);
});

let lista_super = [];

function agregar() {
  let nombre = document.getElementById("nombre")
  let cantidad = document.getElementById("cantidad")
  let precio = document.getElementById("precio")

  // nombre.value 
  const mensajeProductoAgregado = `Nombre: ${nombre.value}, Cantidad: ${cantidad.value}, Precio: ${precio.value}`;
  
  console.log(mensajeProductoAgregado);
  // Agregar el producto a la lista "lista-productos"
  // <li>Nombre: jugo ...</li>
  const productoAgregadoElement = `
    <li>${mensajeProductoAgregado}</li>
  `;
  // buscar el elemenot de la lista de productos (ul)
  const listaProductosElement = document.querySelector("#lista-productos");
  // agregar el elemento con con el nuevo producto (al final)
  listaProductosElement.innerHTML += productoAgregadoElement;

  let total = cantidad.value * precio.value
  lista_super.push(total); // solo cantidades totales
  // Lipiar formulario
  nombre.value = "";
  cantidad.value = "";
  precio.value = "";
  // Eliminar mensaje de cesrta vacía
  document.querySelector("#mensaje-cesta-vacia").remove();
}

function calcular() {
  let total = 0
  for (let i = 0; i < lista_super.length; i++) {
    total += lista_super[i]
  }

  document.getElementById("total").innerHTML = "EL TOTAL ES: <strong>$" + total + "</strong>"

  /*document.getElementById("total").innerHTML = `
  <div class="">
    <p>EL TOTAL ES: </p>
    <p>$${total}</p>
  </div>`*/	
}