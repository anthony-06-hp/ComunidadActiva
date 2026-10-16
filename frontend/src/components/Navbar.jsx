import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="topbar">
        <NavLink to="/" className="brand">
            <span className="brand-mark">CA</span>
            <span>
            Comunidad <strong>Activa</strong>
            </span>
        </NavLink>

        <nav aria-label="Navegación principal">
            <NavLink to="/" end>Inicio</NavLink>
            <NavLink to="/registro">Registrar evento</NavLink>
            <NavLink to="/lista">Eventos</NavLink>
        </nav>
        </header>
    );
}
