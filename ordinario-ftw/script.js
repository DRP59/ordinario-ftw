// Buscador de recursos
function buscarRecurso() {
  let texto = document.getElementById("busqueda").value.toLowerCase();
  let recursos = document.querySelectorAll(".recurso");

  recursos.forEach(r => {
    r.style.display = r.textContent.toLowerCase().includes(texto)
      ? "block"
      : "none";
  });
}

function enviarFormulario(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  document.getElementById("respuesta").textContent =
    `Gracias, ${nombre}. Tu mensaje ha sido enviado a nuestro buzón.`;
}

// Filtrado de recursos
function buscarRecurso() {
  let texto = document.getElementById("busqueda").value.toLowerCase();
  let recursos = document.querySelectorAll(".recurso");
  recursos.forEach(r => {
    r.style.display = r.textContent.toLowerCase().includes(texto) ? "block" : "none";
  });
}

// Simulación de envío de formulario
function enviarFormulario(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  document.getElementById("respuesta").textContent =
    `Gracias, ${nombre}. Tu mensaje ha sido enviado.`;
}

// Cargar recursos desde XML
async function cargarRecursos() {
  const response = await fetch("biblioteca.xml");
  const xml = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, "application/xml");

  const recursos = doc.querySelectorAll("recurso");
  const contenedor = document.getElementById("recursos");

  recursos.forEach(r => {
    let tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta", "recurso");
    tarjeta.innerHTML = `<h3>${r.getAttribute("nombre")}</h3>
                         <a href="${r.getAttribute("enlace")}" target="_blank">Visitar</a>`;
    contenedor.appendChild(tarjeta);
  });
}

function buscarRecurso() {
  let texto = document.getElementById("busqueda").value.toLowerCase();
  let recursos = document.querySelectorAll(".recurso");

  recursos.forEach(r => {
    r.style.display = r.textContent.toLowerCase().includes(texto) ? "block" : "none";
  });
}
