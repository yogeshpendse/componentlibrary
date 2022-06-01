import "./Modal.css";
import "../Buttons/Button.css";
export const Modal = ({ modaltgl, setModaltgl }) => {
  return (
    <div>
      {modaltgl && (
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
              <button
                onClick={() => setModaltgl(false)}
                className="btn btn--primary"
              >
                close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
