import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Overlaymenu.css";
export const Overlaymenu = () => {
  const navigate = useNavigate();
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
            <li
              className="overlay__link"
              onClick={() => {
                navigate("/docs/navbar");
                setState(false);
              }}
            >
              navbar
            </li>
            <li
              className="overlay__link"
              onClick={() => {
                navigate("/docs/cards");
                setState(false);
              }}
            >
              cards
            </li>
            <li
              className="overlay__link"
              onClick={() => {
                navigate("/docs/buttons");
                setState(false);
              }}
            >
              buttons
            </li>
            <li
              className="overlay__link"
              onClick={() => {
                navigate("/docs/image");
                setState(false);
              }}
            >
              image
            </li>
            <li
              className="overlay__link"
              onClick={() => {
                navigate("/docs/list");
                setState(false);
              }}
            >
              lists
            </li>
            <li
              className="overlay__link"
              onClick={() => {
                navigate("/docs/modal");
                setState(false);
              }}
            >
              modal
            </li>
            <li
              className="overlay__link"
              onClick={() => {
                navigate("/docs/toast");
                setState(false);
              }}
            >
              toast
            </li>
            <li
              className="overlay__link"
              onClick={() => {
                navigate("/docs/alert");
                setState(false);
              }}
            >
              alert
            </li>
            <li
              className="overlay__link"
              onClick={() => {
                navigate("/docs/badge");
                setState(false);
              }}
            >
              badge
            </li>
            <li
              className="overlay__link"
              onClick={() => {
                navigate("/docs/list");
                setState(false);
              }}
            >
              list
            </li>
            <li
              className="overlay__link"
              onClick={() => {
                navigate("/docs/grid");
                setState(false);
              }}
            >
              grid
            </li>
            <li
              className="overlay__link"
              onClick={() => {
                navigate("/docs/avatar");
                setState(false);
              }}
            >
              avatar
            </li>
            <li
              className="overlay__link"
              onClick={() => {
                navigate("/docs/input");
                setState(false);
              }}
            >
              input
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
