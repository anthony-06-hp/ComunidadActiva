const express = require("express");
const { randomUUID } = require("node:crypto");
const { leerRegistros, guardarRegistros } = require("../services/almacenamiento");

const router = express.Router();

const CATEGORIAS = [
  "Limpieza comunitaria",
  "Deportivo",
  "Cultural",
  "Educativo",
  "Reunión barrial",
  "Solidario",
  "Otro"
];

function validarEvento(datos) {
  const errores = [];
  const campos = ["nombre", "organizador", "email", "descripcion", "fecha", "categoria"];

  for (const campo of campos) {
    if (typeof datos[campo] !== "string" || datos[campo].trim() === "") {
      errores.push(`El campo "${campo}" es obligatorio.`);
    }
  }

  if (typeof datos.email === "string" &&
      datos.email.trim() !== "" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email.trim())) {
    errores.push("El correo electrónico no tiene un formato válido.");
  }

  if (typeof datos.fecha === "string" && datos.fecha.trim() !== "") {
    const fecha = new Date(`${datos.fecha}T00:00:00`);
    if (Number.isNaN(fecha.getTime()) || fecha.toISOString().slice(0, 10) !== datos.fecha) {
      errores.push("La fecha no es válida.");
    } else {
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);
      if (fecha < hoy) errores.push("La fecha del evento no puede estar en el pasado.");
    }
  }

  if (typeof datos.categoria === "string" &&
      datos.categoria.trim() !== "" &&
      !CATEGORIAS.includes(datos.categoria.trim())) {
    errores.push("Selecciona una categoría permitida.");
  }
  
  const LIMITES = {
    nombre: 100,
    organizador: 100,
    email: 150,
    descripcion: 1000
  };

  for (const [campo, max] of Object.entries(LIMITES)) {
    if (
      typeof datos[campo] === "string" &&
      datos[campo].trim().length > max
    ) {
      errores.push(
        `El campo "${campo}" no puede superar los ${max} caracteres.`
      );
    }
  }

  return errores;
}

// GET /registros: devuelve todos los eventos.
router.get("/", async (req, res) => {
  try {
    const registros = await leerRegistros();
    return res.status(200).json(registros);
  } catch (error) {
    console.error("Error al consultar registros:", error.message);
    return res.status(500).json({ mensaje: "No se pudieron consultar los eventos." });
  }
});

// POST /registros: valida y guarda un evento nuevo.
router.post("/", async (req, res) => {
  try {
    const datos = req.body || {};
    const errores = validarEvento(datos);

    if (errores.length > 0) {
      return res.status(400).json({
        mensaje: "Revisa los datos enviados.",
        errores
      });
    }

    const registros = await leerRegistros();
    const nuevoRegistro = {
      id: randomUUID(),
      nombre: datos.nombre.trim(),
      organizador: datos.organizador.trim(),
      email: datos.email.trim(),
      descripcion: datos.descripcion.trim(),
      fecha: datos.fecha,
      categoria: datos.categoria.trim(),
      creadoEn: new Date().toISOString()
    };

    registros.push(nuevoRegistro);
    await guardarRegistros(registros);

    return res.status(201).json({
      mensaje: "Evento registrado correctamente.",
      registro: nuevoRegistro
    });
  } catch (error) {
    console.error("Error al guardar registro:", error.message);
    return res.status(500).json({ mensaje: "No se pudo guardar el evento." });
  }
});

module.exports = router;
