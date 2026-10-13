import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">PARTICIPA · COMPARTE · CONSTRUYE</span>
          <h1>Los mejores cambios empiezan <span>en comunidad.</span></h1>
          <p>
            Descubre actividades de tu sector, comparte iniciativas y ayuda a que
            más personas se unan a los eventos que hacen crecer nuestro barrio.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/registro">＋ Registrar un evento</Link>
            <Link className="button button-secondary" to="/lista">Explorar eventos</Link>
          </div>
          <div className="hero-note"><span className="status-dot" /> Un espacio para conectar a la comunidad</div>
        </div>
        <div className="hero-illustration" aria-label="Ilustración decorativa de comunidad" role="img">
          <div className="sun"></div>
          <div className="circle circle-one"></div>
          <div className="circle circle-two"></div>
          <div className="house house-one"><span></span></div>
          <div className="house house-two"><span></span></div>
          <div className="people"><span>●</span><span>●</span><span>●</span></div>
          <div className="ground"></div>
          <div className="illustration-label">Juntos hacemos barrio</div>
        </div>
      </section>

      <section className="features">
        <div className="section-heading">
          <span className="eyebrow">¿CÓMO FUNCIONA?</span>
          <h2>Tu comunidad, más conectada</h2>
          <p>Tres pasos sencillos para mantener a todos informados.</p>
        </div>
        <div className="feature-grid">
          <article className="feature-card">
            <span className="feature-icon">✦</span>
            <h3>Propón una actividad</h3>
            <p>Registra mingas, encuentros, ferias, jornadas deportivas y más.</p>
          </article>
          <article className="feature-card">
            <span className="feature-icon">▤</span>
            <h3>Consulta los eventos</h3>
            <p>Revisa las fechas, categorías y detalles de cada actividad publicada.</p>
          </article>
          <article className="feature-card">
            <span className="feature-icon">♡</span>
            <h3>Participa y colabora</h3>
            <p>Encuentra iniciativas que ayudan a fortalecer la vida comunitaria.</p>
          </article>
        </div>
      </section>
    </>
  );
}
