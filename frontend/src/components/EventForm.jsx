import { useState } from "react";
import Message from "./Message.jsx";

const CATEGORIAS = [
  "Limpieza comunitaria",
  "Deportivo",
  "Cultural",
  "Educativo",
  "Reunión barrial",
  "Solidario",
  "Otro"
];

const formularioInicial = {
  nombre: "",
  organizador: "",
  email: "",
  descripcion: "",
  fecha: "",
  categoria: ""
};

export default function EventForm({ onSubmit }) {
  const [formulario, setFormulario] = useState(formularioInicial);
  const [errores, setErrores] = useState({});
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("info");
  const [enviando, setEnviando] = useState(false);

  function cambiarCampo(evento) {
    const { name, value } = evento.target;
    setFormulario((anterior) => ({ ...anterior, [name]: value }));
    setErrores((anterior) => ({ ...anterior, [name]: "" }));
    setMensaje("");
  }

  function validar() {
    const nuevosErrores = {};
    const obligatorios = ["nombre", "organizador", "email", "descripcion", "fecha", "categoria"];

    for (const campo of obligatorios) {
      if (!formulario[campo].trim()) nuevosErrores[campo] = "Este campo es obligatorio.";
    }

    if (formulario.email.trim() &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.email.trim())) {
      nuevosErrores.email = "Ingresa un correo válido, por ejemplo nombre@correo.com.";
    }

    if (formulario.fecha) {
      const hoy = new Date();
      const fechaLocal = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
      const fechaSeleccionada = new Date(`${formulario.fecha}T00:00:00`);
      if (Number.isNaN(fechaSeleccionada.getTime())) {
        nuevosErrores.fecha = "Selecciona una fecha válida.";
      } else if (fechaSeleccionada < fechaLocal) {
        nuevosErrores.fecha = "La fecha no puede estar en el pasado.";
      }
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  }

  async function enviar(evento) {
    evento.preventDefault();
    setMensaje("");

    if (!validar()) {
      setTipoMensaje("error");
      setMensaje("Revisa los campos señalados antes de continuar.");
      return;
    }

    setEnviando(true);
    try {
      await onSubmit(formulario);
      setFormulario(formularioInicial);
      setErrores({});
      setTipoMensaje("success");
      setMensaje("¡Evento registrado correctamente!");
    } catch (error) {
      setTipoMensaje("error");
      setMensaje(error.message || "No se pudo registrar el evento.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <form className="event-form" onSubmit={enviar} noValidate>
      <Message type={tipoMensaje}>{mensaje}</Message>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="nombre">Nombre del evento *</label>
          <input id="nombre" name="nombre" value={formulario.nombre} onChange={cambiarCampo}
            placeholder="Ej. Minga de limpieza" maxLength="100" aria-invalid={Boolean(errores.nombre)} />
          {errores.nombre && <small className="field-error">{errores.nombre}</small>}
        </div>
        <div className="field">
          <label htmlFor="organizador">Organizador *</label>
          <input id="organizador" name="organizador" value={formulario.organizador} onChange={cambiarCampo}
            placeholder="Ej. Comité barrial" maxLength="100" aria-invalid={Boolean(errores.organizador)} />
          {errores.organizador && <small className="field-error">{errores.organizador}</small>}
        </div>
        <div className="field">
          <label htmlFor="email">Correo de contacto *</label>
          <input id="email" name="email" type="email" value={formulario.email} onChange={cambiarCampo}
            placeholder="nombre@correo.com" maxLength="150" aria-invalid={Boolean(errores.email)} />
          {errores.email && <small className="field-error">{errores.email}</small>}
        </div>
        <div className="field">
          <label htmlFor="fecha">Fecha del evento *</label>
          <input id="fecha" name="fecha" type="date" value={formulario.fecha} onChange={cambiarCampo}
            min={new Date().toLocaleDateString("en-CA")} aria-invalid={Boolean(errores.fecha)} />
          {errores.fecha && <small className="field-error">{errores.fecha}</small>}
        </div>
        <div className="field field-full">
          <label htmlFor="categoria">Categoría *</label>
          <select id="categoria" name="categoria" value={formulario.categoria} onChange={cambiarCampo}
            aria-invalid={Boolean(errores.categoria)}>
            <option value="">Selecciona una categoría</option>
            {CATEGORIAS.map((categoria) => <option key={categoria} value={categoria}>{categoria}</option>)}
          </select>
          {errores.categoria && <small className="field-error">{errores.categoria}</small>}
        </div>
        <div className="field field-full">
          <label htmlFor="descripcion">Descripción *</label>
          <textarea id="descripcion" name="descripcion" value={formulario.descripcion} onChange={cambiarCampo}
            placeholder="Explica qué actividad se realizará y cómo puede participar la comunidad."
            rows="5" maxLength="1000" aria-invalid={Boolean(errores.descripcion)} />
          <div className="field-bottom">
            {errores.descripcion && <small className="field-error">{errores.descripcion}</small>}
            <small>{formulario.descripcion.length}/1000 caracteres</small>
          </div>
        </div>
      </div>
      <p className="required-note">* Todos los campos son obligatorios.</p>
      <button className="button" type="submit" disabled={enviando}>
        {enviando ? "Registrando..." : "Registrar evento"}
      </button>
    </form>
  );
}
