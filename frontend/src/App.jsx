import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Registro from "./pages/Registro.jsx";
import Lista from "./pages/Lista.jsx";

function Navbar() {
  return (
    <header className="topbar">
      <NavLink to="/" className="brand">
        <span className="brand-mark">CA</span>
        <span>Comunidad <strong>Activa</strong></span>
      </NavLink>
      <nav aria-label="Navegación principal">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/registro">Registrar evento</NavLink>
        <NavLink to="/lista">Eventos</NavLink>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/lista" element={<Lista />} />
          <Route path="*" element={
            <section className="panel">
              <h1>Página no encontrada</h1>
              <p>La ruta que buscas no existe.</p>
              <NavLink className="button" to="/">Volver al inicio</NavLink>
            </section>
          } />
        </Routes>
      </main>
      <footer className="footer">
        <p>Comunidad Activa · Eventos que nos unen</p>
      </footer>
    </div>
  );
}
