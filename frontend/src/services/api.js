const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

async function procesarRespuesta(respuesta) {
  const datos = await respuesta.json().catch(() => ({}));

  if (!respuesta.ok) {
    const detalle = Array.isArray(datos.errores) ? datos.errores.join(" ") : datos.mensaje;
    throw new Error(detalle || "Ocurrió un error al comunicarse con el servidor.");
  }

  return datos;
}

async function peticion(url, opciones) {
  let respuesta;
  try {
    respuesta = await fetch(url, opciones);
  } catch {
    throw new Error("No se pudo conectar con el servidor. Verifica que el backend esté activo.");
  }
  return procesarRespuesta(respuesta);
}

export function obtenerRegistros() {
  return peticion(`${API_URL}/registros`);
}

export function crearRegistro(evento) {
  return peticion(`${API_URL}/registros`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(evento)
  });
}
