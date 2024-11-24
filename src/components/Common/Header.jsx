import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";
import "./Header.css";

const Header = () => {
  const navRef = useRef(null);

  const handleNavLinkClick = () => {
    if (navRef.current.classList.contains("show")) {
      navRef.current.classList.remove("show");
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-da fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              className="logoHeader"
              src="/Logo_Learn_From_Scratch.png"
              alt="Logo Aprender desde cero"
            />
          </Link>
          <button
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-bs-target="#navbarNav"
            data-bs-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" ref={navRef}>
            <ul className="navbar-nav">
              {[
                "/",
                "/Abecedario",
                "/Escribe y escucha",
                "/Lectura en voz alta",
                "/Sílabas",
                "/Números",
                "/Colores",
                "/Frutas",
                "/Verduras",
                "/Cosas de la casa",
              ].map((path, index) => (
                <li className="nav-item" key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to={path}
                    onClick={handleNavLinkClick}
                  >
                    {path === "/" ? "Inicio" : path.slice(1)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
