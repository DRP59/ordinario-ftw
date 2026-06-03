// ====== BUSCADOR DE RECURSOS ======
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
