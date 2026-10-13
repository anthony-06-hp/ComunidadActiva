const fs = require("node:fs/promises");
const path = require("node:path");

const archivo = path.join(__dirname, "..", "data", "registros.json");

async function asegurarArchivo() {
  await fs.mkdir(path.dirname(archivo), { recursive: true });

  try {
    await fs.access(archivo);
  } catch {
    await fs.writeFile(archivo, "[]\n", "utf8");
  }
}

async function leerRegistros() {
  await asegurarArchivo();
  const contenido = await fs.readFile(archivo, "utf8");

  try {
    const datos = JSON.parse(contenido);
    if (!Array.isArray(datos)) {
      throw new Error("El archivo JSON debe contener una lista.");
    }
    return datos;
  } catch (error) {
    throw new Error(`No se pudo leer registros.json: ${error.message}`);
  }
}

async function guardarRegistros(registros) {
  await asegurarArchivo();
  await fs.writeFile(archivo, `${JSON.stringify(registros, null, 2)}\n`, "utf8");
}

module.exports = { leerRegistros, guardarRegistros };
