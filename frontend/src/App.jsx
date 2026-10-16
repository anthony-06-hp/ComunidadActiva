import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Registro from "./pages/Registro.jsx";
import Lista from "./pages/Lista.jsx";
import Navbar from "./components/Navbar.jsx";

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
