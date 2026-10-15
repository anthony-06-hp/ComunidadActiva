const express = require("express");
const cors = require("cors");
const registrosRouter = require("./routes/registros");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    mensaje: "API de Comunidad Activa funcionando.",
    endpoints: {
      consultar: "GET /registros",
      crear: "POST /registros"
    }
  });
});

app.use("/registros", registrosRouter);

app.use((req, res) => {
  res.status(404).json({ mensaje: "Ruta no encontrada." });
});

app.use((err, req, res, next) => {
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({
      mensaje: "El cuerpo de la petición no es un JSON válido."
    });
  }

  console.error(err);

  res.status(500).json({
    mensaje: "Error interno del servidor."
  });
});

app.listen(PORT, () => {
  console.log(`Servidor Comunidad Activa activo en http://localhost:${PORT}`);
});
