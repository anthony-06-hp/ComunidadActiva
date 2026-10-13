const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

async function procesarRespuesta(respuesta) {
  const datos = await respuesta.json().catch(() => ({}));

  if (!respuesta.ok) {
    const detalle = Array.isArray(datos.errores) ? datos.errores.join(" ") : datos.mensaje;
    throw new Error(detalle || "Ocurrió un error al comunicarse con el servidor.");
  }

  return datos;
}

export async function obtenerRegistros() {
  const respuesta = await fetch(`${API_URL}/registros`);
  return procesarRespuesta(respuesta);
}

export async function crearRegistro(evento) {
  const respuesta = await fetch(`${API_URL}/registros`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(evento)
  });

  return procesarRespuesta(respuesta);
}
