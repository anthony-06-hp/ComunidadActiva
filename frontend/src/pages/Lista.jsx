import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard.jsx";
import Message from "../components/Message.jsx";
import { obtenerRegistros } from "../services/api.js";

export default function Lista() {
  const [eventos, setEventos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  const cargarEventos = useCallback(async () => {
    setCargando(true);
    setError("");
    try {
      const datos = await obtenerRegistros();
      setEventos(datos);
    } catch (err) {
      setError(err.message || "No se pudieron cargar los eventos.");
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargarEventos();
  }, [cargarEventos]);

  return (
    <section className="page-section">
      <div className="list-heading">
        <div className="page-heading">
          <span className="eyebrow">AGENDA COMUNITARIA</span>
          <h1>Eventos de la comunidad</h1>
          <p>Consulta las actividades registradas y encuentra una forma de participar.</p>
        </div>
        <Link className="button" to="/registro">＋ Nuevo evento</Link>
      </div>

      <div className="list-toolbar">
        <div>
          {!cargando && !error &&(
            <>
              <strong>{eventos.length}</strong> {eventos.length === 1 ? "evento registrado" : "eventos registrados"}
            </>
          )}
        </div>
        <button className="button button-secondary button-small" onClick={cargarEventos} disabled={cargando}>
          {cargando ? "Actualizando..." : "↻ Actualizar lista"}
        </button>
      </div>

      {cargando && <div className="panel state-panel"><div className="spinner"></div><p>Cargando eventos...</p></div>}
      {!cargando && error && (
        <div className="panel state-panel">
          <Message type="error">{error}</Message>
          <button className="button" onClick={cargarEventos}>Intentar de nuevo</button>
          <p className="muted">Comprueba que el backend esté ejecutándose en el puerto 3001.</p>
        </div>
      )}
      {!cargando && !error && eventos.length === 0 && (
        <div className="panel empty-state">
          <div className="empty-icon">▤</div>
          <h2>Aún no hay eventos</h2>
          <p>¡Sé el primero en compartir una actividad con tu comunidad!</p>
          <Link className="button" to="/registro">Registrar primer evento</Link>
        </div>
      )}
      {!cargando && !error && eventos.length > 0 && (
        <div className="events-grid">
          {eventos.map((evento) => <EventCard key={evento.id} evento={evento} />)}
        </div>
      )}
    </section>
  );
}
