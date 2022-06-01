import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  const [state, setState] = useState(true);
  const handleclick = (state) => {
    setState(!state);
  };
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__brand">Brand</div>
        <ul className="navbar__links">
          <li className="navbar__link">
            <Link className="navbar__dlink" to="/docs/navbar">
              link1
            </Link>
          </li>
          <li className="navbar__link">
            <Link className="navbar__dlink" to="/docs/navbar">
              link2
            </Link>
          </li>
          <li className="navbar__link">
            <Link className="navbar__dlink" to="/docs/navbar">
              link3
            </Link>
          </li>
        </ul>
        <div className="navbar__togglebox">
          <button onClick={() => handleclick(state)} className="navbar__toggle">
            {state ? (
              <>
                <i className="bi bi-list"></i>{" "}
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
          state ? "navbar__dropdown" : "navbar__dropdown navbar__dropdown--open"
        }
      >
        <ul className="navbar__dlinks">
          <li>
            <Link className="navbar__dlink" to="/docs/navbar">
              link1
            </Link>
          </li>
          <li>
            <Link className="navbar__dlink" to="/docs/navbar">
              link2
            </Link>
          </li>
          <li>
            <Link className="navbar__dlink" to="/docs/navbar">
              link3
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
