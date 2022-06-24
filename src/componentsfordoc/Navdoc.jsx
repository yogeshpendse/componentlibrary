import { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Navbar/Navbar.css";
export function Navdoc() {
  const [state, setState] = useState(true);
  const handleclick = (state) => {
    setState(!state);
  };
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link className="navbar__brand" to="/">
          bluecss
        </Link>
        <ul className="navbar__links">
          <li className="navbar__link">
            <Link className="navbar__dlink" to="/">
              Home
            </Link>
          </li>
          <li className="navbar__link">
            <a className="navbar__dlink" href="/docs/navbar">
              <Link className="navbar__dlink" to="/docs/cards">
                Docs
              </Link>
            </a>
          </li>
          <li className="navbar__link">
            <a className="navbar__dlink" href="https://github.com">
              GitHub
            </a>
          </li>
        </ul>
        <div className="navbar__togglebox">
          <button onClick={() => handleclick(state)} className="navbar__toggle">
            {state ? (
              <>
                <i className="bi bi-list"></i>
              </>
            ) : (
              <>
                <i className="bi bi-x"></i>
              </>
            )}
          </button>
        </div>
      </div>
      <div
        className={
          state
            ? "navbar__dropdown"
            : " navbar__dropdown navbar__dropdown--open"
        }
      >
        <ul className="navbar__dlinks">
          <li>
            <Link className="navbar__dlink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar__dlink" to="/docs/cards">
              Docs
            </Link>
          </li>
          <li>
            <a
              className="navbar__dlink"
              href="https://github.com/yogeshpendse/componentlibrary/tree/development"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
