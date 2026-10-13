import { useNavigate } from "react-router-dom";
import EventForm from "../components/EventForm.jsx";
import { crearRegistro } from "../services/api.js";

export default function Registro() {
  const navigate = useNavigate();

  async function registrar(evento) {
    await crearRegistro(evento);
    // El formulario muestra la confirmación; la lista se consulta al abrir /lista.
  }

  return (
    <section className="page-section">
      <div className="page-heading">
        <span className="eyebrow">COMPARTE CON TU COMUNIDAD</span>
        <h1>Registrar un evento</h1>
        <p>Completa los datos para que la comunidad conozca tu próxima actividad.</p>
      </div>
      <div className="panel form-panel">
        <div className="panel-heading">
          <div>
            <h2>Información del evento</h2>
            <p>Los campos marcados con * son obligatorios.</p>
          </div>
          <span className="panel-icon">✎</span>
        </div>
        <EventForm onSubmit={registrar} />
        <div className="form-bottom">
          <span>¿Ya registraste una actividad?</span>
          <button type="button" className="text-button" onClick={() => navigate("/lista")}>Consultar eventos →</button>
        </div>
      </div>
    </section>
  );
}
