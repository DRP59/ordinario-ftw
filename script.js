// Filtrado de recursos (solo activo en index.html)
function buscarRecurso() {
  const campo = document.getElementById("busqueda");
  if (!campo) return;
  const texto = campo.value.toLowerCase();
  const recursos = document.querySelectorAll(".recurso");

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

// Cargar recursos desde XML (solo en index.html donde existe #recursos vacío)
async function cargarRecursos() {
  const contenedor = document.getElementById("recursos");
  // Solo cargar del XML si el contenedor existe Y está vacío (página de inicio)
  if (!contenedor || contenedor.children.length > 0) return;

  try {
    const response = await fetch("script.xml");
    const xml = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, "application/xml");

    const recursos = doc.querySelectorAll("recurso");

    recursos.forEach(r => {
      const tarjeta = document.createElement("article");
      tarjeta.classList.add("tarjeta", "recurso");
      tarjeta.innerHTML = `<h3>${r.getAttribute("nombre")}</h3>
                           <a href="${r.getAttribute("enlace")}" target="_blank" rel="noopener noreferrer">Visitar</a>`;
      contenedor.appendChild(tarjeta);
    });
  } catch (error) {
    console.error("Error cargando recursos XML:", error);
  }
}

document.addEventListener("DOMContentLoaded", cargarRecursos);
