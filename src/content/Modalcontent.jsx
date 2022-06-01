import { useState } from "react";
import Codesnnippet from "../utilities/Codesnnippet";
import "./content.css";
import "../components/Buttons/Button.css";
import { Modal } from "../components/Modal/Modal";

export const Modalcontent = () => {
  const [modaltgl, setModaltgl] = useState(false);
  const code = `
  <div className="modal__overlay">
  <div className="modal">
    <div className="modal__header">Modal Header</div>
    <div className="modal__content">
      <p>modal content</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        repellendus saepe.
      </p>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
        <li>item 5</li>
      </ul>
    </div>
    <div className="modal__controls">
      <button className="btn btn--primary">
        close
      </button>
    </div>
  </div>
</div>
  `;
  return (
    <div>
      <h1 className="content-header">Modal</h1>
      <div className="content-component">
        <button onClick={() => setModaltgl(true)} className="btn btn--primary">
          open modal
        </button>
        <Modal modaltgl={modaltgl} setModaltgl={setModaltgl} />
      </div>
      <div className="content-snippet">
        <Codesnnippet code={code} />
      </div>
    </div>
  );
};
