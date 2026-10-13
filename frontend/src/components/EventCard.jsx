import { Link } from "react-router-dom";

export default function EventCard({ evento }) {
  const fecha = new Date(`${evento.fecha}T00:00:00`).toLocaleDateString("es-EC", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <article className="event-card">
      <div className="event-card-top">
        <span className="category-pill">{evento.categoria}</span>
        <span className="event-date">{fecha}</span>
      </div>
      <h3>{evento.nombre}</h3>
      <p className="event-description">{evento.descripcion}</p>
      <div className="event-meta">
        <span><strong>Organiza:</strong> {evento.organizador}</span>
        <span><strong>Contacto:</strong> {evento.email}</span>
      </div>
      <p className="event-id">Código: {evento.id}</p>
      <Link className="text-link" to="/lista">Ver lista de eventos →</Link>
    </article>
  );
}
