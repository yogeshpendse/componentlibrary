import { useState } from "react";
import "./Overlaymenu.css";
export const Overlaymenu = () => {
  const [state, setState] = useState(false);
  function handleclick(state) {
    setState(!state);
  }
  return (
    <>
      <button className="overlay-btn" onClick={() => handleclick(state)}>
        <i className="bi bi-layer-forward"></i>
      </button>
      {state && (
        <div className="overlay">
          <button
            className="overlay__cancel"
            onClick={() => handleclick(state)}
          >
            <i className="bi bi-layer-backward"></i>
          </button>
          <ul className="overlay__links">
            <li className="overlay__link">lopside_1</li>
            <li className="overlay__link">lopside</li>
            <li className="overlay__link">lopside</li>
            <li className="overlay__link">lopside</li>
            <li className="overlay__link">lopside</li>
            <li className="overlay__link">lopside</li>
            <li className="overlay__link">lopside</li>
            <li className="overlay__link">lopside</li>
            <li className="overlay__link">lopside</li>
            <li className="overlay__link">lopside</li>
            <li className="overlay__link">lopside</li>
            <li className="overlay__link">lopside</li>
            <li className="overlay__link">lopside_n</li>
          </ul>
        </div>
      )}
    </>
  );
};
