import { useState } from "react";
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
            <a className="navbar__dlink" href="/">
              link1
            </a>
          </li>
          <li className="navbar__link">
            <a className="navbar__dlink" href="/">
              link2
            </a>
          </li>
          <li className="navbar__link">
            <a className="navbar__dlink" href="/">
              link3
            </a>
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
            <a className="navbar__dlink" href="/">
              link1
            </a>
          </li>
          <li>
            <a className="navbar__dlink" href="/">
              link2
            </a>
          </li>
          <li>
            <a className="navbar__dlink" href="/">
              link3
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
